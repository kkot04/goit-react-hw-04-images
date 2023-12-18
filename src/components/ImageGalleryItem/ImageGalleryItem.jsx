import React from "react";
import s from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({  id, webformatURL, type, largeImageURL, openModal,}) => {
    return (
        <li className={s.item}>
            <img
            className={s.photo} onClick={() => openModal(largeImageURL)}
          src={webformatURL}
          alt={type}
          id={id}/>
        </li>
    )
}


