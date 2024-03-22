"use client";
import { useRef, useState } from "react";
//@ts-ignore
import MidiPalyer from 'react-midi-player';
//@ts-ignore
import { midiToWav }  from 'synth-js';

const MIN_NO = 1;
const MAX_NO = 502;
export default function Home() {
  const [currentNo, setCurrentNo] = useState(1);
  const audioURL = `https://hymn-player.vercel.app/api/get-hymn?no=${('000'+currentNo).slice(-3)}`;

  return (
    <main className="grid-cols-1 w-full items-center p-12">
      <h1 className="text-4xl">ヒムプレイヤー(Web版)</h1>
      <div className="grid-cols-1 pb-30">
        <p className="pb-10">日本福音ルーテル教会の賛美歌を再生するアプリです。</p>
        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://jelc.or.jp/jelc-archive/doc_for_service/" target="_blank">ルーテル教会アーカイブはこちらから</a>
        <p className="pt-10 pb-10">
          賛美歌は1番から502番まであります。<br/>
          番号を入力して再生ボタンを押してください。
        </p>
      </div>
      <input
        className="w-1/4 p-2 border-2 border-gray-300 rounded-lg mt-10 mb-10"
        type="number"
        value={currentNo}
        onChange={(e) => setCurrentNo(Number(e.target.value))}
        max={MAX_NO}
        min={MIN_NO}
      />
      <figure>
        <figcaption>現在の美歌：{('000'+currentNo).slice(-3)}番</figcaption>
        <MidiPalyer src={audioURL}></MidiPalyer>
      </figure>
    </main>
  );
}
