import React from "react";
import s from './ImageGallery.module.css'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery =  ({ imagesData, openModal })=>{
    return (
        <div>
          <ul className={s.list}>
            {imagesData.map(item => {
              return (
                <ImageGalleryItem key={item.id} {...item} openModal={openModal} />
              );
            })}
          </ul>
        </div>
      );
    };

