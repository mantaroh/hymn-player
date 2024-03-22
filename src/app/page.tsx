"use client";
import { useRef, useState } from "react";

export default function Home() {
  const [currentNo, setCurrentNo] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const setMusic = async () => {
    if (!audioRef.current) return;
    // https://jelc.or.jp/wp-content/uploads/sanbi-mid/005.mid
    console.log(currentNo);
    const url = `http://hymn-player.vercel.app/api/get-hymn?no=${('0000'+currentNo).slice(-3)}`;
    const res = await fetch(url);
    const blob = await res.blob();
    const objectURL = URL.createObjectURL(blob);
    console.log(objectURL);
    audioRef.current.src = objectURL;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div>

      <input type="number" value={currentNo} onChange={(e) => setCurrentNo(Number(e.target.value))} />
      <button onClick={() => setMusic()}>再生</button>

      <figure>
        <figcaption>賛美歌：{('0000'+currentNo).slice(-3)}番</figcaption>
        <audio ref={audioRef} controls src="/media/cc0-audio/t-rex-roar.mp3"></audio>
        <a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a>
      </figure>
    </main>
  );
}
