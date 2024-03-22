import React, { useState } from 'react'

const photos= [
  {id:1, alt :'', link:'https://mivietnam.vn/wp-content/uploads/2024/01/mivietnam-banner-tet-2024-01.jpg' },
  {id:2, alt :'', link:'https://mivietnam.vn/wp-content/uploads/2024/01/mivietnam-banner-dreame-l20-ultra-sale-tet.jpg' },
  {id:3, alt :'', link:'https://mivietnam.vn/wp-content/uploads/2024/01/MX16-banner-01.jpg' },
  {id:4, alt :'', link:'https://mivietnam.vn/wp-content/uploads/2024/01/mivietnam-banner-dreame-L10s-pro-ultra.jpg' },
];

const totalPhoto= photos.length;

const SimpleGallery = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="gallery">
      <img src={photos[current].link} alt=""/>
      <button onClick={()=>{
        setCurrent((prev) => {
        if(current === 1){
        return prev
      }
       return prev -1 
        });
      }} className='btn'>Prev</button>
      <button onClick={()=>{
        setCurrent(prev => {
          if(current === (totalPhoto -1)){
            return prev;
          }
           return prev + 1
        })
      }} className='btn'>Next</button>
    </div>
  );
};

export default SimpleGallery;