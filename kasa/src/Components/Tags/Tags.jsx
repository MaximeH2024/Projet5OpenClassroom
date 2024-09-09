import './Tags.scss';
import PropTypes from 'prop-types';


const Tags = (props) => {
    const {annonce} = props
    const annonceTag = annonce.tags 
    

  return (
    <div className="tags">
      {annonceTag.map((tag, index) => (
        <h4 key={index}>{tag}</h4>
      ))}
    </div>
  )
}

Tags.propTypes = {
  annonce: PropTypes.object.isRequired,
};

export default Tags