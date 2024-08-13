import React, { useEffect, useState } from 'react';
import stockfish from 'stockfish';

const ChessGame: React.FC = () => {
    const [engine, setEngine] = useState<Worker | null>(null);
    const [output, setOutput] = useState<string>('');
  
    useEffect(() => {
      // Initialize Stockfish engine
      const sf = stockfish();
      setEngine(sf);
  
      // Handle Stockfish output
      sf.onmessage = (event: MessageEvent) => {
        setOutput(event.data);
      };
  
      // Send the UCI command to Stockfish
      sf.postMessage('uci');
  
      return () => {
        // Terminate the engine when the component unmounts
        sf.terminate();
      };
    }, []);
  
    return (
      <div>
        <h1>Chess Game with Stockfish</h1>
        <pre>{output}</pre>
      </div>
    );
  };
  
  export default ChessGame;
  