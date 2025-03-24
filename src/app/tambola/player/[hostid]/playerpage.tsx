"use client"

import { useEffect, useState } from "react";

export default function Playerpage({ hostid }: { hostid: string }) {
    const [boxes, setBoxes] = useState<{ key: number; value: number; checked: boolean; userid: string }[]>([]);
    const [idStatus, setIdStatus] = useState('');
    const [username, setUserfullname] = useState('');
    const [userids, setUserId] = useState('');

    const generateArray = (): { key: number; value: number; checked: boolean; userid: string, }[] => {
        const totalBoxes = 27;
        const numbersPerRow = 5; // Each row (9 values) must have 5 numbers
        const min = 1;
        const max = 80;

        const randomValues = new Set<number>();

        // Generate 15 unique random numbers between 1 and 80
        while (randomValues.size < 15) {
            randomValues.add(Math.floor(Math.random() * (max - min + 1)) + min);
        }

        const randomValuesArray = Array.from(randomValues);

        const result: { key: number; value: number; checked: boolean; userid: string }[] = Array(totalBoxes).fill(null).map((_, i) => ({
            key: i + 1,
            value: 0, // Default value is 0
            checked: false,
            userid: userids,
        }));

        // Function to randomly pick 5 indexes from a group of 9
        const getRandomIndexes = (startIndex: number): number[] => {
            const indexes = Array.from({ length: 9 }, (_, i) => startIndex + i);
            indexes.sort(() => Math.random() - 0.5); // Shuffle indexes
            return indexes.slice(0, numbersPerRow); // Pick first 5 indexes
        };

        // Fill first 9 slots with 5 numbers
        const firstRowIndexes = getRandomIndexes(0);
        const secondRowIndexes = getRandomIndexes(9);
        const thirdRowIndexes = getRandomIndexes(18);

        const allSelectedIndexes = [...firstRowIndexes, ...secondRowIndexes, ...thirdRowIndexes];

        // Assign random values to selected indexes
        allSelectedIndexes.forEach((idx, i) => {
            result[idx].value = randomValuesArray[i];
        });

        return result;
    };

    useEffect(() => {
        console.log('from https ', hostid)
        const checkidIfExist = async () => {
            try {
                if (hostid !== null) {
                    const response = await fetch('http://localhost:8080/api/player', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ hostid }),
                    });

                    if (response.ok) {
                        const data = await response.json();
                        console.log(data.status);
                        setIdStatus(data.status);
                        // Save the JWT token in sessionStorage

                        // Redirect the user to a protected route or dashboard
                    } else {
                        console.log('url doesnot exist', response)
                        setIdStatus('not found');
                    }
                }
            } catch (error) {
                console.log('server down', error)
            }
        }
        checkidIfExist();
    }, [hostid])

    // Create a debounce function
    const useDebounce = (value: { key: number; value: number; checked: boolean; userid: string }[], delay: number) => {
        const [debouncedValue, setDebouncedValue] = useState(value);

        useEffect(() => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            // Cleanup the timeout
            return () => {
                clearTimeout(handler);
            };
        }, [value, delay]);

        return debouncedValue;
    };


    const handleChange = (e: number, f: string) => {
        const updatedBoxes = boxes.map((box) =>
            box.key === e ? { ...box, checked: !box.checked } : box
        );
        setBoxes(updatedBoxes);

        console.log(e, userids, f);
        handleupdatecheck(e, userids);
    }
    const handleupdatecheck = async (e: number, f: string) => {
        try {
            const response = await fetch('http://localhost:8080/api/updatevaluesafe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ f, e }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('got response >>>>>  ', data.status);
            } else {
                console.log('url doesnot exist')
                setIdStatus('not found');
            }
        } catch (error) {
            console.log('server is down', error)
        }


    }
    const debouncedBoxes = useDebounce(boxes, 500); // Debounce the update by 500ms //need to uncomment below box
    useEffect(() => {
        // Call handleUpdate after debounce
        if (debouncedBoxes.length > 0) {
            handleupdate(debouncedBoxes);
        }
    }, [debouncedBoxes]);

    const handleupdate = async (boxes: { key: number; value: number; checked: boolean; userid: string }[]) => {
        console.log('updating >> ', boxes);
        try {
            // const response = await fetch('http://localhost:8080/updatevaluesag', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(boxes),
            // });

            // if (response.ok) {
            //     const data = await response.json();
            //     console.log('got response >>>>>  ',data.status);
            // } else {
            //     console.log('url doesnot exist')
            //     setIdStatus('not found');
            // }
        } catch (error) {
            console.log('server down', error)
        }
    }

    const handleusernamesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(username)
        try {
            const res = await fetch('http://localhost:8080/api/submitname', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, hostid }),
            });

            if (res.ok) {
                const data = await res.json();
                console.log('git id>> ', data.id);

                setUserId(data.id.toString());

                console.log('Form submission successful:', data);
            } else {
                console.error('Form submission failed:', res.statusText);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    }

    useEffect(() => {
        const newaray = generateArray();
        setBoxes(newaray);
        console.log('user id from useEffect ', userids);
        const updateval = async () => {
            console.log('while sending values  >> ', newaray);
            try {
                const response = await fetch('http://localhost:8080/api/updatevalues', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newaray),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('got response >>>>>  ', data.status);
                } else {
                    console.log('url doesnot exist')
                    setIdStatus('not found');
                }
            } catch (error) {
                console.log('server down', error)
            }
        }
        updateval()
    }, [userids])
    //console.log(boxes);
    return (
    <div className="bg-blue-300">
        {idStatus === 'success' ?
            <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleusernamesubmit}>
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
                                        disabled={userids == '' ? false : true}
                                        id="full-name"
                                        name="full-name"
                                        value={username}
                                        onChange={(e) => setUserfullname(e.target.value)}
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {userids == '' || userids == null ?
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                    : ' '}
            </form>
            : 'Please ask your host to share valid link'}
        Your Id :  {userids}


        <div>
            {idStatus === 'success' ? <>
                <h2>Generated Values</h2>

                <div className="grid grid-cols-9 gap-2 max-w-2xl mb-5 ">
                    {boxes.map((box) => (
                        <div
                            key={box.key}
                            className={`flex items-center justify-center w-12 h-12 border border-gray-300 rounded-lg text-lg cursor-pointer ${box.checked === true
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-100 text-black'
                                }`}
                            onClick={() => { if (box.value != 0) { handleChange(box.key, box.userid) } }}
                        >
                            {box.value}
                        </div>
                    ))}
                </div>
            </> : 'Refresh The Page'}


        </div>
    </div>
    );
}