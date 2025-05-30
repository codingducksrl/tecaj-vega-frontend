import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const user = {
  name: 'Marvel Rivals',
  color: 'chartreuse',
};

export default function Slider(props: {games: {id: string,name: string,image:string}[]}) {
    return (
        <>
            <div className='w-screen' >
                <Slide slidesToScroll={1} slidesToShow={4} indicators={true} arrows={true} infinite={true} transitionDuration={300}>
                    {
                        props.games.map((game)=>{
                            return <div style={{
                                textAlign: 'center',
                                backgroundColor: 'red',
                                backgroundImage: `url(${game.image})`,
                                padding: '100px 0',
                                fontSize: '30px',
                                
                            }}>{game.name}</div>
                        })
                    }
                    
                </Slide>
            </div>
        </>
    )
}

