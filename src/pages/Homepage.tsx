import { Avatar } from '@/components/catalyst/avatar';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSearchParams } from 'react-router';

export default function Homepage() {

//get id from url
const [searchParams, setSearchParams] = useSearchParams();

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
    
    <div className=' flex justify-end mr-[20px] mt-[20px]'>

      <Avatar className="size-14" src={data.slika} />
    </div>
      
    </>
  )
}