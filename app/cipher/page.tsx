'use client'

import { useEffect, useState } from "react"

export default function Cipher() {
  const [text, setText] = useState('');
  const [cipher, setCipher] = useState('');
  const [offset, setOffset] = useState(7);

  function Encrypt(text:string, offset:number) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const idx = offset + alphabets.indexOf(text)                // add current index to offset index
    const encrypt = alphabets[idx > 25 ? idx - 26 : idx]
    return encrypt;
  }
  
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for( const char of alphabets) {
    console.log(Encrypt(char, 5))
  }

  useEffect(() => {
    setCipher(text)
  }, [text])

  return (
    <section className="p-10 flex flex-col items-center justify-start md:items-start md:justify-center gap-2 md:flex-row h-dvh">

      <div className="w-full">
        <textarea spellCheck='false' autoComplete="off" name="text" placeholder="Text" className="block h-72 bg-foreground/10 w-full bg-transparent border-[0.1px] p-3 border-foreground/20"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>

      <div className="border-[0.1px] border-foreground/20 p-1 shrink-0">
        <label htmlFor="offset" className="block mx-auto w-fit">Offset |
          <input type="number" min={0} max={28} name="offset" id="offset" className="ml-2 bg-transparent text-foreground focus:outline-none text-right " defaultValue={offset} />
        </label>
      </div>

      <div className="w-full">
        <textarea spellCheck='false' autoComplete="off" name="cipher" placeholder="Cipher" className="block h-72 bg-foreground/10 w-full bg-transparent border-[0.1px] p-3 border-foreground/20"
          value={cipher}
          onChange={(e) => setCipher(e.target.value)}
        ></textarea>
      </div>

    </section>
  )
}
