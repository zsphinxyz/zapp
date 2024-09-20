import { Metadata } from "next";
import Eg from "./eg";
import EnDecode from "./endecode";


export const metadata:Metadata = {
  title: 'Vigenere Cipher',
  description: 'Vigenere Cipher Decode and Encode Online'
}

export default function Vigenere() {
  return (
  <section className="px-4 pb-4 md:px-6">
    <h1 className="font-geistSans font-bold text-3xl pt-3 mb-3">Vigenere Cipher</h1>
    <EnDecode />
    <Eg />
  </section>
  )
}
