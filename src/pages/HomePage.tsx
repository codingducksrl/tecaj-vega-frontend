import Slider from "@/components/atoms/Slider";

export default function HomePage() {
    return (
        <>
            <div
                className="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
                Igrane pred kratkim:
                <Slider games={[
                    {id: "43424", name: "Magneto", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/b3116e7399759eb75c97cee01e85071cd598872b/ss_b3116e7399759eb75c97cee01e85071cd598872b.600x338.jpg?t=1748596178"},
                    {id: "43424", name: "HumanTorch", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/b3116e7399759eb75c97cee01e85071cd598872b/ss_b3116e7399759eb75c97cee01e85071cd598872b.600x338.jpg?t=1748596178"},
                    {id: "43424", name: "SpiderMan", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/47c19fb55fa8765b375deb5f9fc69a5543ac3b2c/ss_47c19fb55fa8765b375deb5f9fc69a5543ac3b2c.600x338.jpg?t=1748596178"},
                    {id: "43424", name: "Shrek", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/47c19fb55fa8765b375deb5f9fc69a5543ac3b2c/ss_47c19fb55fa8765b375deb5f9fc69a5543ac3b2c.600x338.jpg?t=1748596178"},

                ]}/>
                Igrane PVP:
                <Slider games={[
                    {id: "43424", name: "Pippo", image:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/f2190c172de3579543198c8e4372a2f352c91ab4/ss_f2190c172de3579543198c8e4372a2f352c91ab4.600x338.jpg?t=1748596178"},
                    {id: "43424", name: "IronMan", image:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/f2190c172de3579543198c8e4372a2f352c91ab4/ss_f2190c172de3579543198c8e4372a2f352c91ab4.600x338.jpg?t=1748596178"},
                    {id: "43424", name: "Hulk", image:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/f2190c172de3579543198c8e4372a2f352c91ab4/ss_f2190c172de3579543198c8e4372a2f352c91ab4.600x338.jpg?t=1748596178"},
                    {id: "43424", name: "Pippo", image:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/f2190c172de3579543198c8e4372a2f352c91ab4/ss_f2190c172de3579543198c8e4372a2f352c91ab4.600x338.jpg?t=1748596178"},

                ]}/>
                Igrane Fantasy
                <Slider games={[
                    {id: "43424", name: "Thor", image:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/6e242f0a6d2c7cf4f44dede1b0f760f72c2a5cb1/ss_6e242f0a6d2c7cf4f44dede1b0f760f72c2a5cb1.600x338.jpg?t=1748596178"},
                    {id: "43424", name: "Blackwidow", image:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/ae7e94f60f14bf17f87c75e99d2fdae47cbf2231/ss_ae7e94f60f14bf17f87c75e99d2fdae47cbf2231.600x338.jpg?t=1748596178"},
                    {id: "43424", name: "Jeff", image:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/ae7e94f60f14bf17f87c75e99d2fdae47cbf2231/ss_ae7e94f60f14bf17f87c75e99d2fdae47cbf2231.600x338.jpg?t=1748596178"},
                    {id: "43424", name: "Venom", image:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/ae7e94f60f14bf17f87c75e99d2fdae47cbf2231/ss_ae7e94f60f14bf17f87c75e99d2fdae47cbf2231.600x338.jpg?t=1748596178"},

                ]}/>

            </div>
        </>
    )
}