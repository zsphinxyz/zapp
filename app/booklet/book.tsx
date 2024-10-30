import { useState } from "react";

export default function Book({ arr }: { arr: number[] }) {
  const [sheet, setSheet] = useState(-1)
  let c = 0

  return (
    <section className="py-5">
      <div className="h-56 w-40 mx-auto relative transition-all" style={{ translate: '50%' }}>
        {
          Array( arr.length / 2 ).fill(0).map((_, i) => {
            const front = arr[c];
            const back = arr[c + 1];

            c = c + 2
            return (
              <div key={i} className={`absolute size-full top-0 left-0 origin-left transition-transform duration-500 [perspective:1500px]`} style={{ zIndex: sheet >= i ? i : arr.length - i }}>

                <div className={`${front ? 'bg-teal-400' : 'bg-rose-400'}  absolute size-full origin-left transition-transform duration-500 top-0 left-0 z-[1] flex items-center justify-center border-l border-dashed ${sheet >= i ? 'flip' : ''}`} style={{ backfaceVisibility: 'hidden' }}>
                  <div className="relative size-full flex items-center justify-center">
                    <p className="text-5xl font-black text-white/80 select-none">{front || '?'}</p>

                    <span className="select-none absolute size-5 text-center rounded-full block bottom-2 right-2 text-sm text-black/50 font-bold bg-white/50">{c - 1}</span>
                  </div>
                </div>

                <div className={`${back ? 'bg-teal-400' : 'bg-rose-400'}  absolute size-full origin-left transition-transform duration-500 top-0 left-0 z-[0] flex items-center justify-center ${sheet >= i ? 'flip' : ''}`} >
                  <div className="relative size-full flex items-center justify-center [transform:rotateY(180deg)]">
                    <p className="text-5xl font-black text-white/80 select-none">{back || '?'}</p>

                    <span className="select-none absolute size-5 text-center rounded-full block bottom-2 left-2 text-sm text-black/50 font-bold bg-white/50">{c}</span>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>

      <div className="flex gap-3 mx-auto w-max mt-5">
        <button className="bg-neutral-600 select-none hover:bg-neutral-600/90 text-sm text-white px-2 py-1 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed" disabled={sheet <= -1 ? true : false} onClick={() => setSheet(sheet <= -1 ? -1 : sheet - 1)}>◀ Prev</button>
        <button className="bg-neutral-600 select-none hover:bg-neutral-600/90 text-sm text-white px-2 py-1 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed" disabled={sheet >= arr.length / 2 - 1 ? true : false} onClick={() => setSheet(sheet >= arr.length / 2 - 1 ? arr.length / 2 - 1 : sheet + 1)}>Next ▶</button>
      </div>
    </section>
  )
}
