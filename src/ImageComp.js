import React from 'react'
import { imgData } from './imgData'

export default function ImageComp({ children, x }) {

    return (
        <div className="slider">
            {imgData.map((img, idx) => {
                return (
                    <div className="slide" key={idx} style={{ transform: `translateX(${x}%)` }}>
                        <img src={img.imageSrc} alt="Image slider" />
                    </div>
                )
            })}
            {children}
        </div>
    )
}
