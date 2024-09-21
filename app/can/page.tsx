import { Metadata } from 'next'
import Can from './can'
import Eg from './eg'

export const metadata:Metadata = {
  title: 'Count the Cans',
  description: 'Count the Cans Problem'

}


export default function page() {
  return (
    <section className="px-4 md:px-6">
      <h1 className="font-geistSans font-bold text-3xl pt-3 mb-3">Count the Cans</h1>
      <Can />
      <Eg />
    </section>

  ) 

}




