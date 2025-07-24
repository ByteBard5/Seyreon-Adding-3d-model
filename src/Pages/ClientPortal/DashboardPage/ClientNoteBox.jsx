//use for showing the Previous Notes to the Client, in the client portal (2nd last section)
import React, { useEffect, useState } from "react";
import { fetchClientNotes } from "./clientNotes";

const ClientNoteBox = ({ clientId }) => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  const loadNotes = async () => {
    setError("");
    try {
      const rawNotes = await fetchClientNotes(clientId);

      // Convert "[2025-07-23 21:46] Some note" → { date: "...", note: "..." }
      const parsedNotes = rawNotes.filter(Boolean).map((line) => {
        const match = line.match(/^\[(.*?)\]\s*(.*)$/);
        if (match) {
          return { date: match[1], note: match[2] };
        } else {
          return { date: "Unknown", note: line };
        }
      });

      setNotes(parsedNotes.reverse()); // latest first
    } catch (err) {
      console.error("Error fetching notes:", err);
      setError("Failed to load notes.");
    }
  };

  useEffect(() => {
    loadNotes();
  }, [clientId]);

  return (
    <div className="bg-[#1e1e2f] p-5 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-white">Client Notes</h2>
      {error && <p className="text-red-500">{error}</p>}
      {notes.length === 0 && !error && (
        <p className="text-gray-400">No notes added yet.</p>
      )}
      {notes.map((entry, index) => (
        <div key={index} className="p-3 rounded-lg bg-[#2c2c3e] text-white">
          <p className="text-sm text-gray-400 mb-1">{entry.date}</p>
          <p className="text-base">{entry.note}</p>
        </div>
      ))}
    </div>
  );
};

export default ClientNoteBox;
