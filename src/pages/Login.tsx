import { Button } from "@/components/catalyst/button";
import { Input } from "@/components/catalyst/input";
import { Heading } from "@components/catalyst/heading.tsx";
import { useState } from "react";

export default function Login() {
    const [id, setId] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 px-4">
            <div className="absolute top-6 center-8 text-9xl font-bold text-gray-700 mt-[100px] ">
                Steam Suggestions
            </div>

            <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl border border-gray-300">
                <Heading className="text-center text-xl mb-6 text-gray-800">🎮 Wassup Gamer</Heading>

                <div className="flex flex-col gap-y-4">
                    <Input 
                        placeholder="Enter your SteamID"
                        className="bg-gray-100 text-gray-900 border border-gray-300 focus:border-blue-400"
                        onChange={(event) => setId(event.target.value)}
                    />
                    <Button 
                        href={`/home?steamid=${id}`} 
                        color="light"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
                    >
                        🚀 Request Your Game
                    </Button>
                </div>
            </div>
        </div>
    );
}
