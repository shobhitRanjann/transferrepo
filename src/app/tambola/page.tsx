"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const [roomidforhost, setRoomIdforhost] = useState<string | null>(null);
  const [islogin, setIslogin] = useState(false);


  const generateRandomRoomIdForHost = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomText = '';
    for (let i = 0; i < 32; i++) { // 8-character random string
      randomText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomText;
  };
  //const [roomidforhost, setHostRoomss] = useState('');
  const [token, setUserToken] = useState('');
  // Start the game and redirect to the random URL
  const startGame = async () => {
    const token = sessionStorage.getItem('token');
    //const roomId = generateRandomRoomId(); // Generate a random room ID
   // setRoomId(roomId); // Save the room ID in state (optional)
    const hostroom = generateRandomRoomIdForHost();
  
    //router.push(`/${roomId}`); // Redirect to the new URL
    if(token && hostroom){
    //  updateData(hostroom, token);
      setRoomIdforhost(hostroom);
      setUserToken(token);
    }

  };

  const joinashost = async () => {
  //  const token = sessionStorage.getItem('token');
  //  const roomId = generateRandomRoomId(); // Generate a random room ID
   // setRoomId(roomId); // Save the room ID in state (optional)
   // const hostroom = generateRandomRoomIdForHost();
  
    router.push(`tambola/${roomidforhost}`); // Redirect to the new URL
  //  if(token && hostroom){
    //  updateData(hostroom, token);
   // setRoomIdforhost(hostroom);
   //   setUserToken(token);
    }

  useEffect(()=>{
    const token = sessionStorage.getItem('token');
    if(token===undefined || token === null){
      router.push('tambola/login')
    }
  },[])
 

  useEffect(()=>{
    const updateData = async () =>{
      console.log('valli   >>  ',roomidforhost, '   <>   ', token);
      if(roomidforhost!=null && token !== null){

      try {
        const response = await fetch('http://localhost:8080/api/host', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ roomidforhost, token }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setRoomIdforhost(roomidforhost);
          // Save the JWT token in sessionStorage
  
          // Redirect the user to a protected route or dashboard
        } else {
          console.log('while api hit in creating game', response);
        }
      } catch (error) {
        console.log('while creating game  ??  ',error);
      }
    }
    }
    updateData();
  },[roomidforhost])



  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setIslogin(true);
    }
    else {
      setIslogin(false)
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-5">Tambola Game</h1>

      {islogin ?
        <button
          onClick={startGame}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Create Game
        </button> :
        <button
          onClick={startGame}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Start Game
        </button>
      }
      <div className="mt-2">
        <input
          id="roomid"
          name="roomid"
          type="text"
          required
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
      {roomidforhost!=null?
      <button
        onClick={joinashost}
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
      >
        Join Game
      </button>
      :''}

      {/* Display the room ID and link if generated */}
    
      {roomidforhost && (
        <div className="mt-5 text-center">
          <p className="text-lg">Share this link to invite players:</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://smallstore.in/player/{roomidforhost}
          </a>
        </div>
      )}
    </div>
  );
}
