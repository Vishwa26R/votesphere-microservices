import { useState } from 'react';

function App() {
  const [status, setStatus] = useState('Ready to vote!');

  // This function will be called when a user clicks a button
  const handleVote = async (option: 'tabs' | 'spaces') => {
    try {
      setStatus('Submitting vote...');
      const response = await fetch('/api/vote', { // The '/api' prefix is important!
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ option }),
      });

      if (!response.ok) {
        throw new Error('Vote submission failed!');
      }

      const data = await response.json();
      console.log(data.message);
      setStatus(`Successfully voted for ${option}!`);
    } catch (error) {
      console.error('Error submitting vote:', error);
      setStatus('Error: Could not submit vote.');
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center font-sans">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4">Tabs vs. Spaces</h1>
        <p className="text-xl text-gray-400">Which do you prefer for indentation?</p>
      </header>
      <div className="flex gap-8 mt-12">
        <button
          onClick={() => handleVote('tabs')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-2xl transition-transform transform hover:scale-105"
        >
          Tabs
        </button>
        <button
          onClick={() => handleVote('spaces')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-2xl transition-transform transform hover:scale-105"
        >
          Spaces
        </button>
      </div>
      <p className="mt-8 text-lg text-gray-500">{status}</p>
    </div>
  );
}

export default App;