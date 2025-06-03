import { Avatar } from '@/components/catalyst/avatar';
import { useSearchParams } from 'react-router';

export default function Homepage() {

//get id from url
const [searchParams, setSearchParams] = useSearchParams();

//call internal api for data

    return (
    <>

    <div className=' flex justify-end mr-[20px] mt-[20px]'>
      {searchParams.get("steamid")}
      <Avatar className="size-14" src={"https://avatars.steamstatic.com/1dff05a168b886479115b2d2b2aa6b2d4ae75464_full.jpg"} />
    </div>
      
    </>
  )
}