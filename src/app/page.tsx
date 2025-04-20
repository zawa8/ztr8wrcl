'use client';
import { SetStateAction, useState } from 'react';

import Image from "next/image";
// import { FormEvent } from "react";
import { duztr } from "./ztr/duztr";
// import { ue2il } from "./ztr/ue2il";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import FontPicker from '@/components/lifonts/lifp';

export default function Home() {
  const [iteksta, set_iteksta] = useState("");
  const sampletkst = `test: select language binary/inglish4/... n see changes vere(here).
  x.com=xmericα=Americα=Aks.com
  zawa8.vercel.App is now muwed to ztr8.Vercel.app(new)
  whitehome=wvitevouse cαr=cAb=cxb
  ziro wn two three four fiwe siks sewen
  0123 4567 89LY VWPF . 4finger_mxths . 8+8=10=wnti=4*4
  eight nine ten twelwe dblu purn fiwn wnti`;
  const iplaceholer = `input: replace/paste here.ԃis is trαnsliterator for phonetical languages.
steps to use : 1. pls replace ԃis tekst to indiα/nepαl/sinhl/bαnglα.
1.1 to copy unicode google search : wiki indiα in indian languages
2. pls press eu2i btn.
3. result : tekst areα down.`;
  const oplaceholer = `output:replace/paste some Eng52/ing4/unicode tekst(text) and press eu2i btn.
  output will get generAted in Asia lAnguAges.`;
  const btntkst = `ztr`
  const [oteksta, set_oteksta] = useState('');
  const itekst: string = "";
  const otekst: string = "";
  const ztrdir: string = "";
  // const [text, set_text] = useState(itekst);

  const ioz: { i: string; o: string; z: string } = { i: itekst, o: otekst, z: ztrdir };

  const handle_ita_change = (event: { target: { value: SetStateAction<string>; }; }) => {
    set_iteksta(event.target.value);
  };
  const handle_ota_change = (event: { target: { value: SetStateAction<string>; }; }) => {
    set_oteksta(event.target.value);
  };
  //function itekst_on_input(): void { duztr(ioz); }
  //function ztrdir_changed(): void { duztr(ioz); }
  function on_eu2l() { 
    ioz.i = iteksta ;
    //ue2il(ioz); 
    /////
    ioz.z = "e2i"; duztr(ioz);
    ioz.z = "u2i"; duztr(ioz);
    ioz.i = ioz.o; // set_iteksta(ioz.i); //risky
    ioz.z = "i2l"; duztr(ioz);
    set_oteksta(ioz.o);
  }


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-8 gap-4 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">		
        <div className="flex gap-4 items-center flex-col sm:flex-row">          
          <Image className="dark:invert" src="/flg8.jpg" alt="zawa8 logo" width={100} height={100} priority />
          <Textarea id="sampleta" placeholder={sampletkst}></Textarea>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <FontPicker/>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://github.com/zawa8/font"
            target="_blank"
            rel="noopener noreferrer"
          >
            free hscii fonts
          </a>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Textarea id="ita" value={iteksta} cols={40} onChange={handle_ita_change} placeholder={iplaceholer}></Textarea>
          <Button onClick={on_eu2l}>{btntkst}</Button>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Textarea id="ota" value={oteksta} onChange={handle_ota_change} cols={60} rows={12} placeholder={oplaceholer}></Textarea>
        </div>        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
		  <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          lexrn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
		  <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
		  <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          go2nextjs.org →
        </a>
      </footer>
    </div>
  );
}


