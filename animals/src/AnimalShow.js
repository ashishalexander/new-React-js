import './AnimalShow.css'
import {useState} from 'react'
import bird from './53 - svg/bird.svg'
import cat from './53 - svg/cat.svg'
import cow from './53 - svg/cow.svg'
import dog from './53 - svg/dog.svg'
import gator from './53 - svg/gator.svg'
import heart from './53 - svg/heart.svg'
import horse from './53 - svg/horse.svg'

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({type}){
    const [clicks,setClicks] = useState(0)
    const handleClick =()=>{
        setClicks(clicks+1)
    }

    return <div className='animal-show' onClick={handleClick}>
        <img className="animal"alt="animal" src={svgMap[type]} />
        <img className='heart' alt ="heart" src={heart} style={{width:10+10*clicks+'px'}} />
    </div>
}

export default AnimalShow