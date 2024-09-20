'use client'

import { useEffect, useMemo, useState } from "react"

export default function EnDecode() {

  const [reverse, setReverse] = useState(false)
  const [text, setText] = useState('hello');
  const [cipher, setCipher] = useState('');
  const [key, setKey] = useState('key');
  const [errorMessage, setErrorMessage] = useState('');

  const alphabets = useMemo(() => 'abcdefghijklmnopqrstuvwxyz'.split(''), []);

  function Encrypt(text: string, key: string) {
    if (alphabets.join('').includes(text.toLowerCase())) {
      const textIndex = alphabets.indexOf(text.toLowerCase());
      const keyIndex = alphabets.indexOf(key[0].toLowerCase());
      const encryptIndex = (textIndex + keyIndex) % 26;
      const encrypt = alphabets[encryptIndex];
      return text === text.toUpperCase() ? encrypt.toUpperCase() : encrypt;
    }
    return text;
  }

  function Decrypt(text: string, key: string) {
    if (alphabets.join('').includes(text.toLowerCase())) {
      const textIndex = alphabets.indexOf(text.toLowerCase());
      const keyIndex = alphabets.indexOf(key[0].toLowerCase());
      const decryptIndex = (textIndex - keyIndex + 26) % 26;
      const decrypt = alphabets[decryptIndex];
      return text === text.toUpperCase() ? decrypt.toUpperCase() : decrypt;
    }
    return text;
  }

  useEffect(() => {
    if (key.trim() === '') {
      setErrorMessage('Please enter a key');
      return;
    }
    setErrorMessage('');

    let keyIndex = 0;
    reverse ?
      setText(cipher.split('').map(char => {
        const result = Decrypt(char, key[keyIndex % key.length]);
        if (alphabets.join('').includes(char.toLowerCase())) keyIndex++;
        return result;
      }).join('')) :
      setCipher(text.split('').map(char => {
        const result = Encrypt(char, key[keyIndex % key.length]);
        if (alphabets.join('').includes(char.toLowerCase())) keyIndex++;
        return result;
      }).join(''))
  }, [text, cipher, key, reverse])

  return (
    <section className="font-geistMono flex flex-col items-center justify-start md:items-start md:justify-center gap-2 md:flex-row mb-5">
      <div className="w-full">
        <h1 className="">Text</h1>
        <textarea spellCheck='false' rows={12} autoComplete="off" name="text" placeholder="Text" className="block max-h-72 w-full bg-transparent border-[0.1px] p-3 border-zinc-700"
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setReverse(false)}
        ></textarea>
      </div>

      <div className={`border-[0.1px] border-zinc-700 p-1 shrink-0 select-none self-center ${errorMessage ? 'bg-red-500/20' : ''} `}>
        <label htmlFor="key" className="block mx-auto w-fit text-foreground font-sans font-medium">Key:
          <input type="text" name="key" id="key" className="ml-2 bg-transparent text-foreground focus:outline-none" value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </label>
        {errorMessage && <p className="text-red-500 text-sm mt-1 text-center">{errorMessage}</p>}
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