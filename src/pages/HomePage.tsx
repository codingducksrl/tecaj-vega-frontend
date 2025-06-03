import Slider from "@/components/atoms/Slider";
import { Avatar } from '@/components/catalyst/avatar';
import { useSearchParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Button } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";

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

  const id = searchParams.get("steamid")


  const { isPending, error, data } = useQuery({
    queryKey: [id,"player"],
    queryFn: async () => {
      const response = await axios.get(`http://10.0.1.5:8080/player/${id}`)
      return response.data;
    }
  })

  const kategorije = useQuery({
    queryKey: [id,"kategorije"],
    queryFn: async () => {
      const response = await axios.get(`http://10.0.1.5:8080/player/${id}/genres`)
      return response.data;
    }
  })

  if (isPending || kategorije.isPending) return 'Loading...'

  if (error || kategorije.error) return 'An error has occurred: ' + error.message

  console.log(kategorije.data)


  return (
    <>
      <div className=' flex justify-end mr-[20px] mt-[20px] '>
        <Avatar className="size-14" src={data.slika} />
      </div>
      <div
        className="flex w-full flex-wrap items-end justify-between gap-1 border-b border-zinc-950/10 pb-6 dark:border-white/10">
        
        {
            kategorije.data.map((kategorija)=>{
                return <Fragment key={kategorija.ime}>
                   
                    <Slider games={data2} steamId={id} genre={kategorija.ime} />
                </Fragment>
            })
        }

      </div>
    </>
  )
}