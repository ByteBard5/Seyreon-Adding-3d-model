//use  to Post and Get the data from google sheet to website for the last 2 sections of Client dashboard, (Showing previous notes, and to new notes using a text block)
const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxftGtqLL0BjKTIwiTkQiMq-iqLeYieJ0G4La7r9VByzRcTUA7QsojI_kEFXTOO7dAI/exec";

// ✅ Append a new note for a client
export async function appendClientNote(clientId, noteText) {
  try {
    const response = await fetch(SHEET_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientId: clientId,
        note: noteText,
      }),
    });

    console.log("🟡 Response OK?", response.ok); // <- log this
    console.log("🟡 Response status:", response.status); // <- and this

    const rawText = await response.text();
    console.log("🟡 Raw response text:", rawText); // <- and this

    let result;
    try {
      result = JSON.parse(rawText);
    } catch (err) {
      console.error("❌ Failed to parse JSON:", err);
      throw new Error("Invalid JSON response.");
    }

    if (result?.success !== true) {
      console.error("❌ Failed to append note. Parsed result:", result);
      throw new Error("Note append failed.");
    }

    return true;
  } catch (error) {
    console.error("❌ Error appending client note:", error);
    return false;
  }
}

// ✅ Fetch existing notes for a client
export async function fetchClientNotes(clientId) {
  try {
    const url = `${SHEET_ENDPOINT}?clientId=${encodeURIComponent(
      clientId
    )}&action=getNotes`;

    const response = await fetch(url);
    const result = await response.json();

    if (typeof result.notes !== "string") {
      throw new Error("Invalid response format from server.");
    }

    return result.notes.split("\n"); // returns an array
  } catch (error) {
    console.error("Error fetching client notes:", error);
    return [];
  }
}
