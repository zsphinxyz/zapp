'use client'

import { useEffect, useMemo, useState } from "react"

export default function Can() {
  const [base, setBase] = useState(8)
  const [top, setTop] = useState(3)
  const [addition, setAddition] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')
  const [containerWidth] = useState(10)
  const [containerHeight] = useState(15) 

  const range = useMemo(() =>
    (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step), []
  )

const totalCans = useMemo(() => 
  ((base - top + 1) * (top + base)) / 2 + addition, 
  [base, top, addition]
)


  const scaleFactor = useMemo(() => {
    const maxBottles = Math.max(base, 10) // minimun 10 cans
    return Math.min(containerWidth / maxBottles, containerHeight / base)
  }, [base, containerWidth, containerHeight])

  useEffect(() => {

    if (top > base) {
      setErrorMsg('ERROR: Top cans must be less than base cans')
      setAddition(0)
    } else {
      setErrorMsg('')
    }

    if (addition > top-1) {
      setAddition(top-1)
    }

  }, [base, top, addition])


  let c = useMemo(() => 0, [])
  return (

    <section className="">

      <div className="flex flex-col gap-2 border border-black p-3 py-5 max-w-md mx-auto">
        <div className="flex gap-2 items-center justify-center">
          <label htmlFor="base" className="font-medium block w-28 shrink-0"> Cans at base:</label>
          <input type="number" min={1} max={30} id="base" className="border border-neutral-600 w-full rounded-md p-2" value={base} onChange={(e) => setBase(Math.min(30, Number(e.target.value)))} />
        </div>

        <div className="flex gap-2 items-center justify-center">
          <label htmlFor="top" className="font-medium block w-28 shrink-0"> Cans at top:</label>
          <input type="number" min={1} max={30} id="top" className="border border-neutral-600 w-full rounded-md p-2" value={top} onChange={(e) => setTop(Math.min(30, Number(e.target.value)))} />
        </div>

        <div className="flex gap-2 items-center justify-center">
          <label htmlFor="addition" className="font-medium block w-28 shrink-0"> Addition cans:</label>
          <input type="number" min={0} max={30} id="addition" className="border border-neutral-600 w-full rounded-md p-2" value={addition} onChange={(e) => setAddition(Math.min(top-1, Number(e.target.value)))} />
        </div>

        <div className="text-center font-medium text-xl mt-2 bg-neutral-500 text-white w-max mx-auto rounded-md px-4 py-1">
          Total cans: {totalCans}
        </div>

      </div>

      {
        errorMsg &&
        <div className="text-red-500 font-medium text-center bg-red-500/20 p-2 rounded-md max-w-md mx-auto my-3">{errorMsg}</div>
      }


      <div 
        className="mx-auto mt-5 origin-top relative "
        style={{ 
          width: `${containerWidth}px`, 
          height: `${containerHeight}px` 
        }}
      >
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0"
          style={{ 
            transform: `translateX(-50%) scale(${scaleFactor})`,
            transformOrigin: 'top center'
          }}
        >
          <div className={`flex w-max -mb-0.5 gap-0.5 mx-auto ${addition % 2 == 0 || top % 2 != 0 ? '-translate-x-4' : ''} ${addition % 2 == 0 && top % 2 != 0 ? 'pl-8' : ''}`}>
            {
              Array.from({length: addition}, (_, i) => {
                c++;
                return(
                <p key={i} className="size-[32px] rounded-full bg-zinc-500 mx-auto grid place-items-center text-xs md:text-sm text-neutral-300 select-none ">{c}</p>
              )})
            }

          </div>

          {
            range(top, base, 1).map((i) => (
              <div key={i} className="flex justify-center items-center">
                {Array.from({ length: i }, (_, j) => {
                  c++;
                  return (
                    <p 
                      key={j} 
                      className="gap-2 text-xs md:text-sm bg-zinc-500 shrink-0 text-neutral-300 rounded-full grid place-items-center ml-[1px] -mb-[2px] select-none"
                      style={{ 
                        width: '32px', 
                        height: '32px',
                        fontSize: '12px'
                      }}
                    >
                      {c}
                    </p>
                  )

                })}
              </div>
            ))
          }
          {!errorMsg &&<div className="w-full h-0.5 mt-0.5 rounded-full bg-neutral-500 scale-x-105" />}
        </div>
      </div>
      </section>
  )
}