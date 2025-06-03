import { Button } from "@/components/catalyst/button";
import { Input } from "@/components/catalyst/input";
import { Heading } from "@components/catalyst/heading.tsx";
import axios from "axios";
import { useState } from "react";




export default function Login() {
  const [id, setId] = useState("");




  return (
      <div className="min-h-screen flex items-center justify-center w-screen bg-no-repeat bg-cover bg-[url(https://cdn.steamstatic.com/steamcommunity/public/images/items/455120/80a8b1d46bc2434a53c634de9721205228bea966.jpg)]">
    
          <div className="absolute top-6 center-8 text-9xl font-bold text-white mt-[60px] ">
              Steam suggestions
          </div>


           <div className="flex flex-col items-center gap-y-6">




          <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl border border-black-300">
              <Heading className="text-center text-xl mb-6 text-gray-800">🎮 Wassup Gamer</Heading>




              <div className="flex flex-col gap-y-4">
                       <Input
                           placeholder="Enter your SteamID"
                           className="bg-gray-100 text-gray-900 border border-black-300 rounded-lg focus:border-blue-400"
                           onChange={(event) => setId(event.target.value)}
                       />
                       <Button
                           onClick={async ()=>{
                                await axios.get(`http://10.0.1.5:8080/player/${id}/refresh`)
                                window.location.href = `/home?steamid=${id}`
                           }}
                           color="light"
                           className="w-full bg-black border border-black text-white font-semibold py-2 rounded-lg transition duration-200 hover:bg-gray-900"
                       >
                           🚀 Request Your Game
                       </Button>
                   </div>
               </div>
               <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl border border-black-300">
                   <Heading className="text-center text-xl mb-6 text-gray-800">Don’t have a Steam account?</Heading>




                   <div className="flex flex-col gap-y-4">
                
                       <Button
                           href="https://store.steampowered.com/join/"
                           color="light"
                           className="w-full bg-black border border-black text-white font-semibold py-2 rounded-lg transition duration-200 hover:bg-gray-900"
                       >
                           Steam Sign up
                       </Button>




                   </div>
               </div>
          </div>
      </div>
  );

}






