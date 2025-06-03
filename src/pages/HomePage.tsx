import Slider from "@/components/atoms/Slider";
import { Avatar } from '@/components/catalyst/avatar';
import { useSearchParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { Heading } from '@/components/catalyst/heading';
import axios from 'axios';

export default function HomePage() {
  //get id from url
  const [searchParams, setSearchParams] = useSearchParams();
  const data2 = [
    { id: "43424", name: "Name", descr: " Description", category: "category", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/b3116e7399759eb75c97cee01e85071cd598872b/ss_b3116e7399759eb75c97cee01e85071cd598872b.600x338.jpg?t=1748596178" },
    { id: "2", name: "HumanTorch", descr: " FEEEAR", category: "category", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/b3116e7399759eb75c97cee01e85071cd598872b/ss_b3116e7399759eb75c97cee01e85071cd598872b.600x338.jpg?t=1748596178" },
    { id: "4342424", name: "SpiderMan", descr: " FEEEAR", category: "category", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/47c19fb55fa8765b375deb5f9fc69a5543ac3b2c/ss_47c19fb55fa8765b375deb5f9fc69a5543ac3b2c.600x338.jpg?t=1748596178" },
    { id: "141", name: "Shrek", descr: " FEEEAR", category: "category", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/47c19fb55fa8765b375deb5f9fc69a5543ac3b2c/ss_47c19fb55fa8765b375deb5f9fc69a5543ac3b2c.600x338.jpg?t=1748596178" },
    { id: "141", name: "Shrek", descr: " dad", category: "category", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/47c19fb55fa8765b375deb5f9fc69a5543ac3b2c/ss_47c19fb55fa8765b375deb5f9fc69a5543ac3b2c.600x338.jpg?t=1748596178" },
    { id: "141", name: "paos", descr: " FEEEAR", category: "category", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/47c19fb55fa8765b375deb5f9fc69a5543ac3b2c/ss_47c19fb55fa8765b375deb5f9fc69a5543ac3b2c.600x338.jpg?t=1748596178" },
  ]


  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await axios.get(`http://10.0.1.7:8080/player/${searchParams.get("steamid")}`)
      return response.data;
    }
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
    <div className="relative mt-[50px]">

    <h1 className="relative z-10 max-w-4xl mx-auto mt-20 text-center text-white text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
      Odkrij Najboljše Igre Na Steamu
    </h1>
      
      <div className="absolute top-0 right-5">
        <Avatar className="size-16 mt-[20px] mr-[30px]" src={data.slika} />
      </div>
    </div>
<div className="fixed inset-0 -z-20">
  <img
    src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1268040/ss_2b9c6d16c8f5c47dfc3b5733efcc83b9415c2372.1920x1080.jpg?t=1667662740"
    alt="Background"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black opacity-60"></div> {/* temna plast */}
</div>


      <div
        className="flex w-full flex-wrap items-end justify-between gap-1 border-b border-zinc-950/10 pb-6 dark:border-white/10">
        Igrane pred kratkim:
        <Slider games={data2} />
        Igrane PVP:
        <Slider games={data2} />
        Igrane Free-to-play
        <Slider games={data2} />

      </div>
    </>
  )
}