import React, {useEffect, useState} from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { fetchImages } from './Api/PixabayApi';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export const App = () => {
const [imagesData, setImagesData] = useState([])
const [page, setPage] = useState(1)
const [userInput, setUserInput] = useState('')
const [loading, setLoading] = useState (false)
// const [total, setTotal] = useState (0)
const [modalImageUrl, setModalImageUrl] = useState('')
const [isModalOpen, setIsModalOpen] = useState(false)



useEffect (() => {
  async function getImages() {
    try {
      setLoading(true);
      const imgs = await fetchImages(userInput, page);
      if (page === 1){
        setImagesData(imgs.hits);
        console.log(imgs)
      } else {
        setImagesData(prevState => [...prevState, ...imgs.hits])
      }
    } catch (error){
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  getImages()
}, [userInput, page])

const handleLoadMore = () => {
  setPage(prevState => prevState + 1);
};

  /* modal */
  const openModal = imgUrl => {
    setModalImageUrl(imgUrl)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false)
  };
  /* */

  /* form submit  */
  const onSubmit = event => {
    event.preventDefault();
    const userInput = event.currentTarget.elements.userInput.value;
    setUserInput(userInput)
    setPage(1)
    setImagesData([])
  };
  /*  */

    return (
      <div>
      <Searchbar onSubmit={onSubmit} />
      
        <ImageGallery imagesData={imagesData} openModal={openModal} />
        {loading === true ? <Loader /> : null}
        <Button click={handleLoadMore} />
        {isModalOpen && (
          <Modal modalImageUrl={modalImageUrl} closeModal={closeModal} />
        )}
    
    </div>
    );
  }
