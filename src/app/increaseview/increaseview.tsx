"use client"
import { useState } from "react";


export default function IncreaseView() {

  const [cards, setCards] = useState<{ id: number; content: string }[]>([]);
  const[uservalue,setUservalue]=useState('https://www.youtube.com/embed/8ZB9AU25LWM?autoplay=1&mute=1');
  const [cardnumber, setCardnumber] = useState(0);
  const [userval, setUserval] = useState('');
  const handleAddCard = () => {
    // Create a new card object. You can add any data you need.
    const newCard = { id: cardnumber+1, content: uservalue };
    setCardnumber(newCard.id);
    setCards([...cards, newCard]);

   // const regex = /[?&]v=([a-zA-Z0-9_-]+)/;
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|))([a-zA-Z0-9_-]{11})/i;
    const match = uservalue.match(regExp);
    console.log(match ? match[1] : '');
    // Return the video ID or null if no match
    setUserval(match ? match[1] : '');
  };

  return (
    <div>
      <button onClick={handleAddCard} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Increase View</button>
      <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Youtube Url</label>
          <div className="mt-2">
            <input type="text" onChange={(e)=>setUservalue(e.target.value)} value={uservalue} name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      <div className="bg-white dark:bg-gray-600">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Link</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
           
            {cards.map(card => (
                <div key={card.id} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <iframe width="420" height="315" src={`https://www.youtube.com/embed/${userval}?autoplay=1&mute=1`}></iframe>
                </div>
              ))}

          </div>
        </div>
      </div>
    </div>
  );
}
