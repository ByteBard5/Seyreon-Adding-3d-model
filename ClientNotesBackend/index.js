const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");

const app = express();
app.use(cors());
app.use(express.json());

const auth = new google.auth.GoogleAuth({
  keyFile: "service-account.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const SPREADSHEET_ID = "1CGq1vtArLhPXJFcblL-V9z-hfyq6zThJ2iWSASOFzgY";
const SHEET_NAME = "Client Portal";

// Format time like: [26 Jul 2025, 08:45 PM]
function getFormattedTimestamp() {
  const now = new Date();
  return `[${now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}, ${now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })}]`;
}

app.post("/add-note", async (req, res) => {
  try {
    const { clientId, note } = req.body;

    if (!clientId || !note) {
      return res
        .status(400)
        .json({ success: false, error: "Missing clientId or note" });
    }

    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });

    // Read the entire sheet
    const getResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: SHEET_NAME,
    });

    const rows = getResponse.data.values;
    const header = rows[0];
    const clientIdIndex = header.indexOf("Client ID");
    const noteColIndex = header.indexOf("Note from Client");
    const statusColIndex = header.indexOf("New Request");

    let rowToUpdate = -1;

    for (let i = 1; i < rows.length; i++) {
      if (
        (rows[i][clientIdIndex] || "").trim().toLowerCase() ===
        clientId.trim().toLowerCase()
      ) {
        rowToUpdate = i + 1; // 1-based row index for Google Sheets
        break;
      }
    }

    if (rowToUpdate === -1) {
      return res
        .status(404)
        .json({ success: false, error: "Client ID not found" });
    }

    const currentNotes = rows[rowToUpdate - 1][noteColIndex] || "";
    const timestamp = getFormattedTimestamp();
    const newNote = `${timestamp} ${note}`;
    const updatedNotes = currentNotes ? `${currentNotes}\n${newNote}` : newNote;

    const updates = [
      {
        range: `${SHEET_NAME}!${String.fromCharCode(
          65 + noteColIndex
        )}${rowToUpdate}`,
        values: [[updatedNotes]],
      },
    ];

    const currentStatus = rows[rowToUpdate - 1][statusColIndex];
    if (!currentStatus || currentStatus.toLowerCase() === "no") {
      updates.push({
        range: `${SHEET_NAME}!${String.fromCharCode(
          65 + statusColIndex
        )}${rowToUpdate}`,
        values: [["Received"]],
      });
    }

    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        valueInputOption: "USER_ENTERED",
        data: updates,
      },
    });

    return res.json({ success: true, message: "Note added" });
  } catch (err) {
    console.error("❌ Error in /add-note:", err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
