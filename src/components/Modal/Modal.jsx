import React from "react";
import s from './Modal.module.css'

export class Modal extends React.Component {
    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = event => {
        if(event.key === 'Escape'){
            this.props.closeModal()
        }
    }

    render() {
        const {modalImageUrl, closeModal} = this.props;
        return(
            <div onClick={closeModal} className={s.modalDiv}>
                <img src={modalImageUrl} alt="Modal" className={s.modalImg} />
            </div>
        )
    }
}



