import React, { useState } from 'react'
import './slider.scss'
import { imgData } from './imgData'
import ImageComp from './ImageComp'


export default function Slider() {

    // console.log(imgData)
    const [x, setX] = useState(0)

    function goLeft() {
        // console.log(x)
        // return setX(x + 100)
        x === 0 ? setX(-100 * (imgData.length - 1)) : setX(x + 100)
    }

    function goRight() {
        x === -100 * (imgData.length - 1) ? setX(0) : setX(x - 100)
    }

    return (
        <ImageComp x={x}>
            <button id="goLeft" onClick={goLeft}><i class="fas fa-chevron-left"></i></button>
            <button id="goRight" onClick={goRight}><i class="fas fa-chevron-right"></i></button>
        </ImageComp>
    )
}

