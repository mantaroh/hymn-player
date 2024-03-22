"use client";
import { useRef, useState } from "react";
import MidiPalyer from 'react-midi-player';

const MIN_NO = 1;
const MAX_NO = 503;
export default function Home() {
  const [currentNo, setCurrentNo] = useState(1);
  const audioURL = `http://hymn-player.vercel.app/api/get-hymn?no=${('0000'+currentNo).slice(-3)}`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input type="number" value={currentNo} onChange={(e) => setCurrentNo(Number(e.target.value))} max={MAX_NO} min={MIN_NO} />
      <figure>
        <figcaption>賛美歌：{('0000'+currentNo).slice(-3)}番</figcaption>
        <MidiPalyer src={audioURL}></MidiPalyer>
      </figure>
    </main>
  );
}
