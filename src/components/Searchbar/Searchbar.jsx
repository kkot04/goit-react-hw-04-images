import React from "react";
import s from './Searchbar.module.css'

export const Searchbar = ({onSubmit}) => {
    return (
        <header className={s.searchbar}>
            <form className={s.form} onSubmit={onSubmit}>
                <button type="submit" className={s.button}>
                    <span className={s.label}>Search</span>
                </button>

                <input
                className={s.input}
                type="text"
                placeholder="Search images and photos"
                name='userInput'
                />
            </form>
        </header>
    )
}


