import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Slider(props: 
    {games: 
        {id: string,name: string, descr:string, category:string, image:string}[]}) {
    return (
        <>
            <div className='w-screen' >
                <Slide slidesToScroll={1} slidesToShow={4} indicators={true} arrows={true} infinite={true} transitionDuration={300}>
                    {
                        props.games.map((game)=>{
                        return (
                        <div
                            style={{
                            position: 'relative',
                            backgroundImage: `url(${game.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            marginRight: '15px',
                            height: '245px', // adjust height as needed
                            }}
                        >
                            <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                
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
                                {game.name}
                            </a>
                            </div>
                        </div>
                        );})
                                            }
                                            
                </Slide>
            </div>
        </>
    )
}

