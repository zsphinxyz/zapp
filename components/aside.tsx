'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Aside() {
  const path = usePathname();
  const links = [
    {
      id: 1,
      title: 'Caesar Cipher',
      href: '/caesar'
    },
    {
      id: 2,
      title: 'Vigenere Cipher',
      href: '/vigenere'
    },
    {
      id: 3,
      title: 'Count the Cans',
      href: '/can'

    },
    {
      id: 4,
      title: 'Booklet Print',
      href: '/booklet'

    },

  ]

  const others = [
    {
      id: 1,
      title: 'Magic',
      href: 'https://21magic.vercel.app'
    },
    {
      id: 2,
      title: 'Morse Code',
      href: 'https://zmorse.vercel.app'
    },
  ]

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if(open) {
      // document.body.style.rotate = '3deg';
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = 'auto';
    }
  }, [open])
  // style={{display: open ? 'block' : 'none'}}
  return (
    <aside>
      
      <>
        <div onClick={() => setOpen(false)} className={`w-screen h-vh bg-black/50 absolute inset-0 z-0 md:invisible ${open ? 'block' : 'hidden'} md:hidden`} ></div>
        <button onClick={()=>setOpen(true)} className="w-10 h-8 rounded-r-md bg-foreground text-background absolute -left-1 top-3 border border-foreground block md:hidden text-2xl">≡</button>
      </>

      <section className="min-w-60 max-w-96 md:min-w-40 max-h-dvh absolute -left-full bg-neutral-300 md:bg-transparent h-dvh md:sticky top-0 z-50" style={{left: open ? 0 : ''}}>

        <div className=" flex items-center justify-between py-2">
          <Link href='/' className="leading-10 text-2xl font-black px-2 text-gray-900 font-geistMono select-none" draggable={true}>ZAPPS</Link>
          <button onClick={()=>setOpen(false)} className="bg-foreground text-background px-3 rounded-md mr-2 block md:hidden text-xl">×</button>
        </div>


        <hr className="w-full border border-neutral-400 mb-2" />

        <div className="md:pl-2 space-y-1 min-h-80 ">
          {
            links.map(link => (
              <Link key={link.id} href={link.href} className={`block text-base font-sans hover:bg-neutral-100 p-1 rounded-md font-medium transition-all ${path == link.href ? 'text-foreground bg-neutral-100/80' : 'text-stone-600'}`}>{link.title}</Link>
            ))
          }
        </div>

        <hr className="w-full border border-neutral-400 my-3" />

        <div className="md:pl-3 space-y-1">
          <p className="text-base font-bold mb-3 md:-ml-2 text-stone-800 select-none">More▼</p>
          {
            others.map(link => (
              <Link key={link.id} href={link.href} className="block text-base font-sans font-medium text-stone-600  hover:bg-neutral-100 p-1 rounded-md transition-all" target="_blank">{link.title}<span className="text-stone-500"> ↳</span></Link> 
            ))
          }
        </div>
      </section>
    </aside>
  )
}
