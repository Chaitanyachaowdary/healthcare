import React, { useState } from 'react';
import styles from './ImageBody.module.css';
import { FaPlus, FaTimes } from 'react-icons/fa';
import imageSrc from '../../assets/image.png'
import bones from '../../assets/bones.jpg'
import teeth from '../../assets/teeth.png'
import lungs from '../../assets/lungs.png'

const ImageBody = ({  healthData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const defaultData = [
    { 
      title: "Lungs", 
      date: "26 Okt 2021",
      imageUrl:lungs
    },
    { 
      title: "Teeth", 
      date: "26 Okt 2021",
      imageUrl: teeth
      },
    { 
      title: "Bone", 
      date: "26 Okt 2021",
      imageUrl:bones
       }
  ];

  const healthItems = healthData || defaultData;

  const openModal = (imgSrc) => {
    setCurrentImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.imagebody}>
      <div className={styles.human}>
        {imageSrc && (
          <img src={imageSrc} alt="Human body" className={styles.bodyImage} />
        )}
        <button 
          className={styles.zoomButton} 
          onClick={() => openModal(imageSrc)}
        >
          <FaPlus />
        </button>
      </div>
      
      <div className={styles.status}>
        {healthItems.map((item, index) => (
          <div key={index} className={styles.box}>
            <div 
              className={styles.boxImageContainer}
              onClick={() => openModal(item.imageUrl)}
            >
              <img src={item.imageUrl} alt={item.title} className={styles.boxImage} />
            </div>
            <div className={styles.boxContent}>
              <h3 className={styles.boxTitle}>{item.title}</h3>
              <p className={styles.boxDate}>Date: {item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Popup Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              <FaTimes />
            </button>
            <img 
              src={currentImage} 
              alt="Enlarged view" 
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageBody;