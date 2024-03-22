"use client";
import { useState } from "react";
//@ts-ignore
import MidiPalyer from 'react-midi-player';

const MIN_NO = 1;
const MAX_NO = 502;
export default function Home() {
  const [currentNo, setCurrentNo] = useState(1);
  const audioURL = `http://hymn-player.vercel.app/api/get-hymn?no=${('0000'+currentNo).slice(-3)}`;

  return (
    <main className="grid-cols-1 w-full items-center p-12">
      <h1 className="">ヒムプレイヤー(Web版)</h1>
      <div className="grid-cols-1 pb-30">
        <p className="pb-10">日本福音ルーテル教会の賛美歌を再生するアプリです。</p>
        <a href="https://jelc.or.jp/jelc-archive/doc_for_service/" target="_blank">ルーテル教会アーカイブ</a>
        <p>
          番号を入力して再生ボタンを押してください。
        </p>
      </div>
      <input
        className="w-1/4 p-2 border-2 border-gray-300 rounded-lg"
        type="number"
        value={currentNo}
        onChange={(e) => setCurrentNo(Number(e.target.value))}
        max={MAX_NO}
        min={MIN_NO}
      />
      <figure>
        <figcaption>賛美歌：{('0000'+currentNo).slice(-3)}番</figcaption>
        <MidiPalyer src={audioURL}></MidiPalyer>
      </figure>
    </main>
  );
}
