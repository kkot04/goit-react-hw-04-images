import React, {useEffect} from "react";
import s from './Modal.module.css'

export const Modal = ({modalImageUrl, closeModal}) => {
    useEffect(() => {
        const handleKeyDown = event => {
          if (event.key === 'Escape') {
            closeModal();
          }
        };
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [closeModal]);

    return(
        <div onClick={closeModal} className={s.modalDiv}>
                <img src={modalImageUrl} alt="Modal" className={s.modalImg} />
            </div>
    )
}


