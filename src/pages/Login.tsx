import { Button } from "@/components/catalyst/button";
import { Input } from "@/components/catalyst/input";
import { Heading } from "@components/catalyst/heading.tsx";
import { useState } from "react";

export default function Home() {

    var [id, setId] = useState("")

    return (
        <>
            <div className="flex flex-col w-full items-center">
                <div className="w-[350px] mt-[100px]">
                    <Heading>Wassup gamer!</Heading>
                    
                    <div className="mt-[20px] flex flex-col gap-y-3">
                        <Input placeholder="i will not steal your data..  just your [SteamID]" onChange={(event)=>{setId(event.target.value)}}></Input>
                        {id}
                        <Button href={`/page?steamid=${id}`} color='light' >Request your new game</Button>
                    </div>
                </div>
            </div>
        </>
    )
}