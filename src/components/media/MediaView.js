import React, { useState, useEffect } from 'react'
import { obtenerMedial } from '../../services/mediaService';
import { MediaCard } from './MediaCard';
import { MediaNew } from './MediaNew';

export const MediaView = () => {

  const [ media, setMedia ] = useState([]);
  const [openModal, setOpenModal] = useState(false)
  const listarMedia = async () => {

    try {

      const { data } = await obtenerMedial();
            setMedia(data);

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    listarMedia();
  }, []);

  const handleOpenModal=()=>{
    setOpenModal(!openModal)
  }

  return (
    <div className='container'>
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {
          media.map((media) => {
            return <MediaCard key = { media._id } media= {media } />
          })
        }
      </div>
{
    openModal ? <MediaNew
    handleOpenModal = {handleOpenModal}
    listarMedia={listarMedia}/> :

<button type="button" className="btn btn-primary fat "onClick={handleOpenModal}>
      <i className="fa-solid fa-plus"></i>
      </button>
      }
    </div>
  )
}