import { Metadata } from "next";
import Sort from "./sort";

export const metadata:Metadata = {
  title: 'Total Cans',
  description: 'Count the total cans in a pyramid shape pile'
}

export default function Booklet() {

  return (
    <section className="px-4 md:px-6">
      <h1 className="font-geistSans font-bold text-3xl pt-3 mb-3">Booklet Print</h1>

      <Sort />

    </section>
  )
}
