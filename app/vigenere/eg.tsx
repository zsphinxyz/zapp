export default function Eg() {
  return (
    <div className="border-neutral-600 border-[0.1px] mt-1 text-stone-800 flex flex-col items-center justify-center p-4 md:p-6">
      <div className="text-base">
        <h1 className="text-3xl font-bold mb-6 text-center text-stone-900">How Does the Vigenère Cipher Work?</h1>
        <p className="leading-relaxed mb-4">
          The Vigenère Cipher is a polyalphabetic substitution cipher that improves upon the Caesar Cipher. It uses a keyword to shift the letters of the alphabet, making it much harder to break than simple substitution ciphers.
        </p>
        <p className="leading-relaxed mb-4">
          This method was first described by Giovan Battista Bellaso in 1553, but misattributed to Blaise de Vigenère in the 19th century. It remained unbroken for three centuries, earning it the nickname &quot;le chiffre indéchiffrable&quot; (the indecipherable cipher).
        </p>
        <p className="leading-relaxed mb-8">
          The formula to encrypt a letter is: <span className="font-mono bg-neutral-300 p-1 rounded">E(i) = (P(i) + K(i mod m)) mod 26</span>, where <span className="font-mono bg-neutral-300 p-1 rounded">P(i)</span> is the i-th letter of the plaintext, <span className="font-mono bg-neutral-300 p-1 rounded">K(i mod m)</span> is the i-th letter of the key (repeated as necessary), and <span className="font-mono bg-neutral-300 p-1 rounded">m</span> is the length of the key.
        </p>
        <div className="border-t border-neutral-700 pt-4">
          <h2 className="text-2xl font-bold mb-4 text-stone-900">Example</h2>
          <p className="leading-relaxed mb-2">
            If we use the key <span className="font-bold text-stone-800">KEY</span> to encrypt the word <span className="font-bold text-stone-800">HELLO</span>:
          </p>
          <p className="w-fit font-mono bg-neutral-300 p-2 rounded mb-4">
            H + K = R, E + E = I, L + Y = J, L + K = V, O + E = S
          </p>
          <p className="">The encrypted message is: <span className="font-bold text-stone-800">RIJVS</span></p>
        </div>
        <div className="border-t border-neutral-700 pt-4 mt-4">
          <h2 className="text-2xl font-bold mb-4 text-stone-900">How It Works</h2>
          <p className="leading-relaxed mb-4">
            1. The key is repeated to match the length of the plaintext.
          </p>
          <p className="leading-relaxed mb-4">
            2. Each letter of the plaintext is shifted by the corresponding letter in the key.
          </p>
          <p className="leading-relaxed mb-4">
            3. The shift is performed by treating A=0, B=1, C=2, etc., adding the values, and taking the result modulo 26.
          </p>
          <p className="leading-relaxed">
            This process creates a different Caesar Cipher for each letter of the key, significantly increasing the cipher&apos;s strength compared to a simple Caesar Cipher.
          </p>
        </div>
      </div>
    </div>
  )
}