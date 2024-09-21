
export default function Eg() {
  return (
    <div className=" mx-auto p-6 rounded-lg mt-80 border border-neutral-600">
    <h2 className="text-2xl font-bold mb-4">Count the Cans: Problem Explanation</h2>
    
    <p className="mb-4">
      The &quot;Count the Cans&quot; problem involves calculating the total number of cans in a pyramid-like structure, 
      with optional additional cans on top.
    </p>

    <h3 className="text-xl font-semibold mb-2">Key Components:</h3>
    <ul className="list-disc pl-6 mb-4 leading-relaxed">
      <li><strong>Base cans:</strong> The number of cans in the bottom row.</li>
      <li><strong>Top cans:</strong> The number of cans in the top row of the pyramid.</li>
      <li><strong>Additional cans:</strong> Extra cans placed on top of the pyramid.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2">The Formula:</h3>
    <div className="bg-gray-100 p-4 rounded-md mb-4">
      <code className="text-sm bg-neutral-200 p-2 rounded-md">
        totalCans = ((base - top + 1) * (top + base)) / 2 + addition
      </code>
    </div>

    <h3 className="text-xl font-semibold mb-2">Explanation:</h3>
    <ol className="list-decimal pl-6 mb-4 leading-relaxed">
      <li className="mb-2">
        <strong>Pyramid calculation:</strong> <code>((base - top + 1) * (top + base)) / 2</code>
        <ul className="list-disc pl-6 mt-1">
          <li>This uses the formula for the sum of an arithmetic sequence.</li>
          <li><code>base - top + 1</code> is the number of rows.</li>
          <li><code>top + base</code> is the sum of the first and last terms.</li>
        </ul>
      </li>
      <li className="mb-2">
        <strong>Additional cans:</strong> Simply add the <code>addition</code> value.
      </li>
    </ol>

    <p className="mb-4">
      This formula efficiently calculates the total number of cans without needing to generate 
      the entire structure in memory.
    </p>

    <div className="bg-white shadow-md p-4 rounded-md">
      <h4 className="font-semibold mb-2">Note:</h4>
      <p>
        Ensure that the top cans are always less than or equal to the base cans for a valid pyramid structure.
        The additional cans can be any non-negative number.
      </p>
    </div>
  </div>
  )
}
