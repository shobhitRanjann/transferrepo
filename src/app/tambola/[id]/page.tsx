"use client"

import { useState } from 'react';
import PlayerScreen from '../playerdata/playerscreen';

export default function TambolaCaller() {
  const [calledNumbers, setCalledNumbers] = useState<number[]>([]);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  //const roomid = useParams<{ id: string; }>() // Extract the roomId from the URL
  const [userid, setUserId] = useState(0);
 // const [showuserdisplay, setShowuserdisplay] = useState(false);


  // Generate a random number between 1 and 99
  const generateRandomNumber = () => {
    let randomNumber;
    if (calledNumbers.length < 90) {
      // console.log(calledNumbers.length)
      do {
        randomNumber = Math.floor(Math.random() * 90) + 1;
      } while (calledNumbers.includes(randomNumber)); // Ensure no duplicates
      setCurrentNumber(randomNumber);
      setCalledNumbers([...calledNumbers, randomNumber]);
    }
  };


  // const handleusernamesubmit = () => {
  //   setShowuserdisplay(true);
  // }

  return (
    <>
      <div className="flex flex-col items-center p-5 font-sans">
        <h1 className="text-2xl mb-5">Tambola Number Caller</h1>

        {/* Grid for Numbers 1 to 90 */}
        <div className="grid grid-cols-10 gap-2 max-w-2xl mb-5">
          {Array.from({ length: 90 }, (_, i) => i + 1).map((number) => (
            <div
              key={number}
              className={`flex items-center justify-center w-12 h-12 border border-gray-300 rounded-lg text-lg cursor-pointer ${calledNumbers.includes(number)
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-black'
                }`}
            >
              {number}
            </div>
          ))}
        </div>

        {/* Display Current Number */}
        {currentNumber && (
          <div className="my-5 text-center">
            <h2 className="text-xl">Last Called Number:</h2>
            <div className="text-5xl font-bold text-green-500">{currentNumber}</div>
          </div>
        )}

        {/* Generate Random Number Button */}
        <button
          onClick={generateRandomNumber}
          className="px-5 py-2 text-lg bg-green-500 text-white rounded-lg cursor-pointer"
        >
          Generate Number
        </button>
      </div>

      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-red-900">Player Name</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="full-name" className="block text-sm/6 font-medium text-gray-900">
                  Your Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="full-name"
                    name="full-name"
                    value={userid}
                    onChange={(e) => setUserId(Number(e.target.value))}
                    type="number"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <PlayerScreen playerid={userid} />
    </>
  );
}

