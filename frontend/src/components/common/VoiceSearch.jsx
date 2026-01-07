import { useState } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const VoiceSearch = ({ onResult }) => {
  const [listening, setListening] = useState(false);

  const startListening = () => {
    if (!SpeechRecognition) {
      alert("Voice search not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;

    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  return (
    <button
      onClick={startListening}
      className={`px-4 py-2 rounded-md text-sm font-medium
        ${
          listening
            ? "bg-red-500 animate-pulse"
            : "bg-indigo-500 hover:bg-indigo-600"
        }
      `}
    >
      🎤 {listening ? "Listening..." : "Voice Search"}
    </button>
  );
};

export default VoiceSearch;