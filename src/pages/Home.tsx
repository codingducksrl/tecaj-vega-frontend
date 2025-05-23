import { Input } from "@/components/catalyst/input";
import { Heading } from "@components/catalyst/heading.tsx";

export default function Home() {
    return (
        <>
            <div className="flex flex-col w-full items-center">
                <div className="w-[350px] mt-[100px]">
                    <Heading>4e1l0 gAmeR!</Heading>
                    
                    <div className="mt-[20px]">
                        <Input placeholder="i will not steal your data..  just your [SteamID]"></Input>
                    </div>
                </div>
            </div>
        </>
    )
}