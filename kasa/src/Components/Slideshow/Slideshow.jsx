import './Slideshow.scss';
import previous from '../../assets/previous.svg';
import next from '../../assets/next.svg';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Slideshow = (props) => {
    const {annonce} = props
    const Slideshow = annonce.pictures

    let [SlideshowNav, setSlideshowNav] = useState(1)

    const previousSlide = () => {
      if (SlideshowNav > 1) {
        setSlideshowNav(SlideshowNav - 1);
      } else if (SlideshowNav === 1) {
        setSlideshowNav(SlideshowNav = Slideshow.length - 1)
      }  
    }
    
    const nextSlide = () => {
      if (SlideshowNav < Slideshow.length - 1) {
        setSlideshowNav(SlideshowNav + 1)
      } else if (SlideshowNav === Slideshow.length - 1) {
        setSlideshowNav(1)
      }
    }

  return (
    <div className='slideshow'>
      <div className='slideshow-img-section' >
        {Slideshow.map((picture, index) => (
          <img className={`slideshow-img ${index +1 === SlideshowNav ? 'visible' : 'none'}`} key={index + 1} src={picture} alt={`Image ${index +1}`} />
        ))}
      </div>
      <div className={`slider-section ${Slideshow.length === 1 ? 'none' : ''}`}>
        <img className='previous slider' src={previous} onClick={previousSlide} alt={`image précédant ${SlideshowNav}`}></img>
        <img className='next slider' src={next} onClick={nextSlide} alt={`image suivant ${SlideshowNav}`}></img>
      </div>
      <p className={`${Slideshow.length === 1 ? 'none' : ''}`}>{SlideshowNav} / {Slideshow.length - 1}</p>
    </div>
  )
}

Slideshow.propTypes = {
  annonce: PropTypes.object.isRequired,
};

export default Slideshow