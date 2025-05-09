import Eg from "./eg";
import { Metadata } from "next";
import EnDecode from "./endecode";


export const metadata:Metadata = {
  title: 'Caesar Cipher',
  description: 'Caesar Cipher Decode and Encode Online'
}

// TODO: to generate OG Image 

export default function Cipher() {

  return (
    <section className="px-4 md:px-6">

      <h1 className="font-geistSans font-bold text-3xl pt-3 mb-3">Caesar Cipher</h1>
      <EnDecode />
      <Eg />

    </section>
  )
}
