import Slider from "@/components/atoms/Slider";

export default function HomePage() {
    return (
        <>
            <div
                className="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
                Igrane pred kratkim:
                <Slider games={[
                    {id: "43424", name: "Pluto", color:"yellow"},
                    {id: "43424", name: "Pippo", color:"red"},
                    {id: "43424", name: "Pippo", color:"red"},

                ]}/>
                Igrane PVP:
                <Slider games={[
                    {id: "43424", name: "Pippo", color:"red"},
                    {id: "43424", name: "Pippo", color:"yellow"},
                    {id: "43424", name: "Pippo", color:"red"},
                    {id: "43424", name: "Pippo", color:"red"},

                ]}/>
                Igrane Fantasy
                <Slider games={[
                    {id: "43424", name: "Pippo", color:"red"},
                    {id: "43424", name: "Pippo", color:"yellow"},
                    {id: "43424", name: "Pippo", color:"red"},
                    {id: "43424", name: "Pippo", color:"red"},

                ]}/>

            </div>
        </>
    )
}