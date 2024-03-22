"use client";
import { useRef, useState } from "react";

export default function Home() {
  const [currentNo, setCurrentNo] = useState(1);

  const setMusic = async () => {
    // https://jelc.or.jp/wp-content/uploads/sanbi-mid/005.mid
    console.log(currentNo);
    const url = `https://jelc.or.jp/wp-content/uploads/sanbi-mid/${('0000'+currentNo).slice(-3)}.mid`;
    const res = await fetch(url);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div>

      <input type="number" value={currentNo} onChange={(e) => setCurrentNo(Number(e.target.value))} />
      <button onClick={() => setMusic()}>再生</button>

      <figure>
        <figcaption>賛美歌：{('0000'+currentNo).slice(-3)}番</figcaption>
        <audio controls src="/media/cc0-audio/t-rex-roar.mp3"></audio>
        <a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a>
      </figure>
    </main>
  );
}
