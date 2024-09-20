import Eg from "./eg";
import EnDecode from "./endecode";


export default function Vigenere() {
  return (
  <section className="px-4 md:px-6">
    <h1 className="font-geistSans font-bold text-3xl pt-3 pl-10 md:pl-0 mb-3">Vigenere Cipher</h1>
    <EnDecode />
    <Eg />
  </section>
  )
}
