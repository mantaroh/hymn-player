"use client";
import { useRef, useState } from "react";
//@ts-ignore
import MidiPalyer from 'react-midi-player';

const MIN_NO = 1;
const MAX_NO = 502;
export default function Home() {
  const [currentNo, setCurrentNo] = useState(1);
  const audioURL = `https://hymn-player.vercel.app/api/get-hymn?no=${('000'+currentNo).slice(-3)}`;
  const selectItems = Array.from({length: MAX_NO - MIN_NO + 1}, (_, i) => i + MIN_NO);

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
      選択:　 
      <select
        className="w-1/4 p-2 border-2 border-gray-300 rounded-lg mt-10 mb-10"
        value={currentNo}
        onChange={(e) => setCurrentNo(Number(e.target.value))}>
        {selectItems.map((no) => (
          <option key={no} value={no}>{no}</option>
        ))}
      </select>
      <figure className="pb-10">
        <figcaption>現在の美歌：{('000'+currentNo).slice(-3)}番</figcaption>
        <MidiPalyer src={audioURL}></MidiPalyer>
      </figure>
      <div>
        <p>
          <span className="font-bold">注意:</span>
          <ul className="list-disc">
            <li>iPhone ご利用の方は、消音モードをオフにしてください [やり方は<a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://www.nojima.co.jp/support/koneta/84811/" target="_blank">こちら</a>]</li>
            <li>Android ご利用の方は、マナーモードをオフにしてください</li>
            <li>お気にいりに登録していただけるといつでもアクセスできるようになります</li>
            <li>コードはオープンソースで公開しています。[<a href="https://github.com/mantaroh/hymn-player"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">こちら</a>]</li>
            <li>お問い合わせは<a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="mailto:mantaroh@gmail.com">こちら</a>まで。</li>
          </ul>
        </p>
      </div>
    </main>
  );
}
