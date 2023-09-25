import { useEffect, useState } from 'react'
import './Dice.css'

function Dice() {

    let image1 = <img src={require('./images/dice1.png')} />
    let image2 = <img src={require('./images/dice2.png')} />
    let image3 = <img src={require('./images/dice3.png')} />
    let image4 = <img src={require('./images/dice4.png')} />
    let image5 = <img src={require('./images/dice5.png')} />
    let image6 = <img src={require('./images/dice6.png')} />

    const images = [image1, image2, image3, image4, image5, image6]
    const [number, setNumber] = useState(Math.floor(Math.random() * (6 - 1 + 1) + 1 * 1));
    const [img, setImg] = useState(images[{ number }.number - 1])

    function randomNumber() {
        setNumber(Math.floor(Math.random() * (6 - 1 + 1) + 1 * 1))
        setImg(images[{ number }.number - 1])
        console.log(number);
        console.log(img);

    }
    useEffect(() => {

        setImg(images[{ number }.number - 1])
    }, [number])

    return (
        <div className='container'>
            <div className='img-cont' onClick={randomNumber}>
                {img}
            </div>
            <div className='number'>Ваше число : <span>{number}</span></div>
            <button onClick={randomNumber}>Ещё</button>
        </div>
    )
}
export default Dice