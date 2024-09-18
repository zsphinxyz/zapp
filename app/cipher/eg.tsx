

export default function Eg() {
  return (
    <div className="bg-neutral-900 mt-1 text-stone-300 flex flex-col items-center justify-center p-6">
      <div className=" text-base">
        <h1 className="text-3xl font-bold mb-6 text-center text-stone-100">How Does the Caesar Cipher Work?</h1>
        <p className=" leading-relaxed mb-4">
          The Caesar Cipher is one of the simplest and oldest encryption techniques. It works by shifting the letters of the alphabet by a fixed amount. For example, with a shift of 3, the letter <span className="font-bold">A</span> becomes <span className="font-bold">D</span>, <span className="font-bold">B</span> becomes <span className="font-bold">E</span>, and so on.
        </p>
        <p className=" leading-relaxed mb-4">
          This method was used by Julius Caesar to send confidential messages to his allies. However, due to its simplicity, it is very easy to break with modern techniques.
        </p>
        <p className=" leading-relaxed mb-8">
          The formula to encrypt a letter is: <span className="font-mono bg-neutral-800 p-1 rounded">E(x) = (x + n) mod 26</span>, where <span className="font-mono bg-neutral-800 p-1 rounded">x</span> is the letter's position in the alphabet, and <span className="font-mono bg-neutral-800 p-1 rounded">n</span> is the number of positions to shift.
        </p>
        <div className="border-t border-neutral-700 pt-4">
          <h2 className="text-2xl font-bold mb-4 text-stone-100">Example</h2>
          <p className=" leading-relaxed mb-2">
            If we use a shift of 3 on the word <span className="font-bold text-stone-200">HELLO</span>:
          </p>
          <p className="w-fit font-mono bg-neutral-800 p-2 rounded mb-4">
            H → K, E → H, L → O, L → O, O → R
          </p>
          <p className="">The encrypted message is: <span className="font-bold text-stone-200">KHOOR</span></p>
        </div>
      </div>
    </div>
  )
}
