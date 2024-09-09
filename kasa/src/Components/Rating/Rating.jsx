
import './Rating.scss';
import redStar from '../../assets/red-star.svg';
import greyStar from '../../assets/grey-star.svg';
import PropTypes from 'prop-types';

const Rating = (props) => {
  const {annonce} = props
  const rate = parseInt(annonce.rating)
  const noRate = 5 - rate
  
  return (
    <div className='rating'>
      {Array(rate).fill().map((_, index) => (
        <img key={index} src={redStar} alt='étoile rouge'/>
      ))}
      {Array(noRate).fill().map((_, index) => (
        <img key={index} src={greyStar} alt='étoile grise'/>
      ))}
      
    </div>
  )
}

Rating.propTypes = {
  annonce: PropTypes.object.isRequired,
};

export default Rating
