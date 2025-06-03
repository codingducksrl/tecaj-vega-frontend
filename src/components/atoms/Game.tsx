import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Game(props: {id: string}){

    const igra = useQuery({
        queryKey: [props.id,"igra"],
        queryFn: async () => {
        const response = await axios.get(`http://10.0.1.5:8080/game/${props.id}`)
        return response.data;
        }
    })

    if(igra.isLoading || igra.error){
        return <></>
    }

    const data = igra.data[props.id].data

    if(!data || !data.name || !data.header_image) return <></>

    return  <div
                style={{
                position: 'relative',
                backgroundImage: `url(${data.header_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginRight: '40px',
                borderRadius: '200px',
                height: '245px', 
                marginLeft: '40px',
                
                }}
            >
                <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    borderBottomRightRadius: '25%',
                    borderBottomLeftRadius: '25%',
                    backgroundColor: 'black',
                    textAlign: 'center',
                    padding: '6px',
                    fontSize: '23px',
                }}
                >
                <a
                    href="https://store.steampowered.com/app/2767030/Marvel_Rivals/"
                    style={{ color: 'white'}}
                >
                    {data.name}
                </a>
                </div>
            </div>
}