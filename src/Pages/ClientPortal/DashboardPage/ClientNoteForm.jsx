//use to provide the form to the Clients inside the client client dashboard to submit the note (last section of the client dashboard page)
import React, { useState } from "react";
import { appendClientNote } from "./clientNotes";

const ClientNoteForm = ({ clientId, onNoteAdded }) => {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!note.trim()) return;

    setLoading(true);
    setError("");

    try {
      await appendClientNote(clientId, note.trim());
      setNote("");
      onNoteAdded(); // Refresh notes list
    } catch (err) {
      console.error("Error submitting note:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1e1e2e] p-4 rounded-xl mt-4 shadow-lg"
    >
      <textarea
        className="w-full p-2 rounded-lg bg-[#2a2a3c] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        rows={4}
        placeholder="Write your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      {error && <p className="text-red-400 mt-1 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className={`mt-2 px-4 py-2 rounded-lg font-medium transition duration-300 ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        } text-white`}
      >
        {loading ? "Submitting..." : "Add Note"}
      </button>
    </form>
  );
};

export default ClientNoteForm;
