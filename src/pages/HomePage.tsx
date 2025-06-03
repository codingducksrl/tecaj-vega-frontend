import Slider from "@/components/atoms/Slider";

export default function HomePage() {
    const data=[
                    {id: "43424", name: "Name", descr: " Description" , category:"category", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/b3116e7399759eb75c97cee01e85071cd598872b/ss_b3116e7399759eb75c97cee01e85071cd598872b.600x338.jpg?t=1748596178"},
                    {id: "2", name: "HumanTorch", descr: " FEEEAR" , category:"category", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/b3116e7399759eb75c97cee01e85071cd598872b/ss_b3116e7399759eb75c97cee01e85071cd598872b.600x338.jpg?t=1748596178"},
                    {id: "4342424", name: "SpiderMan", descr: " FEEEAR" , category:"category", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/47c19fb55fa8765b375deb5f9fc69a5543ac3b2c/ss_47c19fb55fa8765b375deb5f9fc69a5543ac3b2c.600x338.jpg?t=1748596178"},
                    {id: "141", name: "Shrek", descr: " FEEEAR" , category:"category", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/47c19fb55fa8765b375deb5f9fc69a5543ac3b2c/ss_47c19fb55fa8765b375deb5f9fc69a5543ac3b2c.600x338.jpg?t=1748596178"},
                    {id: "141", name: "Shrek", descr: " dad" , category:"category", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/47c19fb55fa8765b375deb5f9fc69a5543ac3b2c/ss_47c19fb55fa8765b375deb5f9fc69a5543ac3b2c.600x338.jpg?t=1748596178"},
                    {id: "141", name: "paos", descr: " FEEEAR" , category:"category", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/47c19fb55fa8765b375deb5f9fc69a5543ac3b2c/ss_47c19fb55fa8765b375deb5f9fc69a5543ac3b2c.600x338.jpg?t=1748596178"},
                ]
    return (
        <>
            <div
                className="flex w-full flex-wrap items-end justify-between gap-1 border-b border-zinc-950/10 pb-6 dark:border-white/10">
                Igrane pred kratkim:
                <Slider games={data}/>
                Igrane PVP:
                <Slider games={data}/>
                Igrane Free-to-play
                <Slider games={data}/>

            </div>
        </>
    )
}