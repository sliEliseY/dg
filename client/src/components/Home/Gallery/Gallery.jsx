import React from "react";
import './Gallery.scss';
// import gallery1 from '../../../images/gallery1.jpg';
// import gallery2 from '../../../images/gallery2.jpg';
// import gallery3 from '../../../images/gallery3.jpg';
// import gallery4 from '../../../images/gallery4.jpg';
// import gallery5 from '../../../images/gallery5.jpg';
// import gallery6 from '../../../images/gallery6.jpg';
// import gallery7 from '../../../images/gallery7.jpg';
// import gallery8 from '../../../images/gallery8.jpg';
// import gallery9 from '../../../images/gallery9.jpg';
// import gallery10 from '../../../images/gallery10.jpg';
// import gallery11 from '../../../images/gallery11.jpg';
// import gallery12 from '../../../images/gallery12.jpg';
// import gallery13 from '../../../images/gallery13.jpg';
// import gallery14 from '../../../images/gallery14.jpg';
// import gallery15 from '../../../images/gallery15.jpg';
// import gallery16 from '../../../images/gallery16.jpg';
// import gallery17 from '../../../images/gallery17.jpg';
// import gallery18 from '../../../images/gallery18.jpg';
// import gallery19 from '../../../images/gallery19.jpg';
// import gallery20 from '../../../images/gallery20.jpg';
// import gallery21 from '../../../images/gallery21.jpg';
// import gallery22 from '../../../images/gallery22.jpg';
// import gallery23 from '../../../images/gallery23.jpg';
// import gallery24 from '../../../images/gallery24.jpg';
// import gallery25 from '../../../images/gallery25.jpg';
// import gallery26 from '../../../images/gallery26.jpg';
// import gallery27 from '../../../images/gallery27.jpg';
// import gallery28 from '../../../images/gallery28.jpg';
// import gallery29 from '../../../images/gallery29.jpg';
// import gallery30 from '../../../images/gallery30.jpg';
// import gallery31 from '../../../images/gallery31.jpg';
// import gallery32 from '../../../images/gallery32.jpg';
// import gallery33 from '../../../images/gallery33.jpg';
// import gallery34 from '../../../images/gallery34.jpg';
// import gallery35 from '../../../images/gallery35.jpg';
// import gallery36 from '../../../images/gallery36.jpg';
// import gallery37 from '../../../images/gallery37.jpg';
// import gallery38 from '../../../images/gallery38.jpg';
// import gallery39 from '../../../images/gallery39.jpg';
// import gallery40 from '../../../images/gallery40.jpg';
// import gallery41 from '../../../images/gallery41.jpg';
// import gallery42 from '../../../images/gallery42.jpg';
// import gallery43 from '../../../images/gallery43.jpg';
// import gallery44 from '../../../images/gallery44.jpg';
// import gallery45 from '../../../images/gallery45.jpg';
// import gallery46 from '../../../images/gallery46.jpg';
// import gallery47 from '../../../images/gallery47.jpg';
// import gallery48 from '../../../images/gallery48.jpg';
// import gallery49 from '../../../images/gallery49.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.scss';

const Gallery = (props) => {
  // const galleryImages = [
  //   gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10,
  //   gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19,
  //   gallery20, gallery21, gallery22, gallery23, gallery24, gallery25, gallery26, gallery27, gallery28,
  //   gallery29, gallery30, gallery31, gallery32, gallery33, gallery34, gallery35, gallery36, gallery37,
  //   gallery38, gallery39, gallery40, gallery41, gallery42, gallery43, gallery44, gallery45, gallery46,
  //   gallery47, gallery48, gallery49
  // ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 826, // Ширина экрана, на которой изменится количество слайдов
        settings: {
          speed: 700,
          slidesToShow: 1, // Количество слайдов при адаптации
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  return (
    <div className="gallery-wrapper">
      <div className="headings">
        <h1>Галерея</h1>
        <h2>Больше фото в нашем <a href="https://instagram.com/detailing_garage.md?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer">Instagram</a></h2>
      </div>
      <div className="gallery-content">
        <Slider {...settings}>
          {props.galleryImage.map((src, index) => (
            <div key={index} className="slide">
              <img src={src} alt="" />
            </div>
          ))}
          {/* {galleryImages.map((image, index) => (  
            <div key={index} className="slide">
              <img src={props.galleryImage.map(src)} alt="" />
            </div>
          ))} */}
        </Slider>
      </div>
    </div>
  );
}

export default Gallery;