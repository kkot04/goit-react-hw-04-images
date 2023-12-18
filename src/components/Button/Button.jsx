import React from "react";
import s from './Button.module.css'

export const Button = ({click}) => {
    return (
        <>
        <div>
            <button onClick={click} className={s.btn}>Load more</button>
        </div>
        </>
    )
}

