'use client'
import { useState } from "react";
import Book from "./book";

export default function Sort() {

  const [pages, setPages] = useState(8);

  let arr:number[] = Array.from({length: pages}, (_, i) => i+1)
  arr = arr.length % 4 != 0 ? arr.concat(Array(4 - arr.length % 4).fill(undefined)) : arr     // fill with undefined for extra pages

  const arr1:number[] = arr.slice(0, arr.length/2) 
  const arr2:number[] = arr.slice(arr.length/2).reverse()
  const pairArr = arr2.map( (_, i) => [arr1[i], arr2[i]] ).map( (pair,i) => i % 2 ==0 ? pair.reverse() : pair).flat()   // pair two arr into one


  return (
    <>
      <section className="border border-black py-5 px-2 md:px-5 rounded-md mx-auto max-w-screen-sm">
        <form className="flex flex-col gap-3 select-none">
          <label htmlFor="pages" className="w-max">Total Pages
            <input type="number" min={1} max={100} id="pages" value={pages} placeholder={pages.toString()}
              onChange={(e) => setPages(Math.min(Number(e.target.value), 100))}
              className="pl-2 ml-3 py-1 rounded-sm w-20" />
          </label>

        </form>

        <div className="w-full flex gap-1 mt-3">
          <p className="bg-zinc-500/20 px-2 rounded-sm"> {pairArr.length} pages.</p>
          <p className="bg-zinc-500/20 px-2 rounded-sm"> {pairArr.length / 4} sheets.</p>
          <p className="bg-zinc-500/20 px-2 rounded-sm"> {pairArr.filter(i => !i).length} blank pages.</p>
        </div>
      </section>

      <section className="my-5 h-[360px] overflow-auto w-max border border-black rounded-md mx-auto px-10 py-2">
        <div className="grid grid-cols-2 w-max mx-auto">
          {
            pairArr.map((i, idx) => {
              return (
                <div key={idx} className={`select-none relative odd:border-r border-dashed [&:nth-child(4n)]:mb-1 mb-[1px] border-white/50 size-16 grid place-content-center font-black font-mono text-4xl text-white/80 ${i ? 'bg-teal-500' : 'bg-rose-400'}`}>
                  {i || '?'}
                  {
                    idx % 4 == 0 &&
                    <div className="size-0 select-none [border-top:10px_solid_#f5f5f5] [border-right:10px_solid_transparent] [border-bottom:10px_solid_transparent] absolute top-[0px] left-[0px] z-10 text-sm text-center ">
                      <div className='size-5 bg-neutral-500 absolute -top-2 right-2 rounded-full text-sm' title="sheet">{idx / 4 + 1}</div>
                    </div>
                  }
                </div>
              )
            })
          }
        </div>
      </section>

      <Book arr={arr} />
    </>
  )
}
