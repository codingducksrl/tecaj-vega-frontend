import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Game from './Game';

export default function Slider(props: 
    {games: 
        {id: string,name: string, descr:string, category:string, image:string}[],genre:string, steamId: string } ) {

    const igre = useQuery({
        queryKey: [props.genre,"genre"],
        queryFn: async () => {
            const response = await axios.get(`http://10.0.1.5:8080/player/${props.steamId}/genres/${props.genre}`)
            return response.data.slice(0,4);
        
        }
    })

    if(igre.isLoading || igre.error){
        return <></>
    }


    return (
        <>
            Igrane {props.genre}:
            <div className='w-full mb-[40px]' >
                <Slide slidesToScroll={1} slidesToShow={4} indicators={false} arrows={true} infinite={true} transitionDuration={300}>
                    {
                        igre.data.map((game)=>{
                            return <Game id={game}/>
                        })
                    }
                                            
                </Slide>
            </div>
        </>
    )
}

