import { useEffect, useState } from "react"

export default function PlayerScreen({playerid}:{playerid: number}){
    
    console.log('player screen ',playerid)
    const [boxes, setBoxes] = useState<{ key: number; value: number; checked: boolean; userid: string }[]>([]);

    useEffect(()=>{
        console.log('calling effext')
        
        fetchData(playerid);
    },[playerid])


    const fetchData = async (playerid:number)=>{
        try {
            const response = await fetch(`http://localhost:8080/api/getbyuserid?playerid=${playerid}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setBoxes(data);
                console.log('donee')
                // Save the JWT token in sessionStorage

                // Redirect the user to a protected route or dashboard
            } else {
                console.log('error page')
            }
        } catch (error) {
            console.log('getting error ',error)
        }
    }

    return (<>
    
    <div className="grid grid-cols-9 gap-2 max-w-2xl mb-5 ">
                {boxes.map((box) => (
                    <div
                        key={box.key}
                        className={`flex items-center justify-center w-12 h-12 border border-gray-300 rounded-lg text-lg cursor-pointer ${box.checked === true
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-100 text-black'
                            }`}
                    >
                        {box.value}
                    </div>
                ))}
            </div>

    </>)
}