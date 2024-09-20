'use client'

import { useEffect, useMemo, useState } from "react"

export default function EnDecode() {

  const [reverse, setReverse] = useState(false)
  const [text, setText] = useState('hello');
  const [cipher, setCipher] = useState('');
  const [offset, setOffset] = useState(3);

  const alphabets = useMemo(() => 'abcdefghijklmnopqrstuvwxyz'.split(''), []);

  function Encrypt(text: string, offset: number) {
    if (alphabets.join('').includes(text.toLowerCase())) {
      const idx = Math.abs(offset + alphabets.indexOf(text.toLowerCase()))  // add current index to offset index
      const encrypt = alphabets[idx > 25 ? idx - 26 : idx]
      if (text === text.toUpperCase()) {
        return encrypt.toUpperCase();
      }
      return encrypt;
    }
    return text;
  }

  function Decrypt(text: string, offset: number) {
    if (alphabets.join('').includes(text.toLowerCase())) {
      const idx = Math.abs(alphabets.indexOf(text.toLowerCase()) - offset)  // remove offset to get index
      const decrypt = alphabets[idx > 25 ? idx - 26 : idx]
      if (text === text.toUpperCase()) {
        return decrypt.toUpperCase();
      }
      return decrypt
    }
    return text;
  }

  
  useEffect(() => {
    reverse ?
      setText(cipher.split('').map(word => Decrypt(word, offset)).toString().replaceAll(',', '')) :
      setCipher(text.split('').map(word => Encrypt(word, offset)).toString().replaceAll(',', ''))
  }, [text, cipher, offset, reverse])

  return (
    <section className=" font-geistMono flex flex-col items-center justify-start md:items-start md:justify-center gap-2 md:flex-row mb-5">
        <div className="w-full">
          <h1 className="">Text</h1>
          <textarea spellCheck='false' rows={12} autoComplete="off" name="text" placeholder="Text" className="block max-h-72 w-full bg-transparent border-[0.1px] p-3 border-zinc-700"
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={() => setReverse(false)}
          ></textarea>
        </div>

        <div className="border-[0.1px] border-zinc-700 p-1 shrink-0 select-none self-center ">
          <label htmlFor="offset" className="block mx-auto w-fit text-foreground font-sans font-medium">Offset |
            <input type="number" min={0} max={25} name="offset" id="offset" className="ml-2 bg-transparent text-foreground focus:outline-none text-right " value={offset}
              onChange={(e) => parseInt(e.target.value) > 25 ? setOffset(1) : setOffset(parseInt(e.target.value) ? Math.abs(parseInt(e.target.value)) : 1)}
            />
          </label>
        </div>

        <div className="w-full">
          <h1 className="">Cipher</h1>
          <textarea spellCheck='false' rows={12} autoComplete="off" name="cipher" placeholder="Cipher" className="block max-h-72 w-full bg-transparent border-[0.1px] p-3 border-zinc-700"
            value={cipher}
            onChange={(e) => setCipher(e.target.value)}
            onFocus={() => setReverse(true)}
          ></textarea>
        </div>
      </section>
  )
}
