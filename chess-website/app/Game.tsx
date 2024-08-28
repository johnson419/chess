"use client";

import { useEffect, useState } from 'react';

const stockfish = typeof window !== 'undefined'
  ? () => new Worker(new URL('stockfish.js', import.meta.url))
  : null;

const ChessGame: React.FC = () => {
  const [engine, setEngine] = useState<Worker | null>(null);
  const [output, setOutput] = useState<string>('');

  useEffect(() => {
    if (stockfish) {
      const sf = stockfish();
      setEngine(sf);

      sf.onmessage = (event: MessageEvent) => {
        setOutput(event.data);
      };

      sf.postMessage('uci');

      return () => {
        sf.terminate();
      };
    }
  }, []);

  return (
    <div>
      <h1>Chess Game with Stockfish</h1>
      <pre>{output}</pre>
    </div>
  );
};

export default ChessGame;