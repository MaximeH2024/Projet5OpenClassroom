
import './AnnonceView.scss';
import Slideshow from '../Slideshow/Slideshow';
import Rating from '../Rating/Rating';
import Tags from '../Tags/Tags';
import PropTypes from 'prop-types';
import Collapse from '../Collapse/Collapse';

const AnnonceView = (props) => {
    const {annonce} = props
    const [firstName, lastName] = annonce.host.name.split(' ');
    const equipmentsString = annonce.equipments.join("#@")
  return (
    <div className={`annonce-display ${annonce.pictures.length === 1 ? '' : 'reduce'}`}>
      <Slideshow annonce={annonce}/>
      <div className={`annonce-content ${annonce.pictures.length === 1 ? '' : 'up'}`}>
        <div className='content-info'>
          <h1>{annonce.title}</h1>
          <h3>{annonce.location}</h3>
          <Tags annonce={annonce}/>
        </div>
        <div className='host'>
          <div className='host-info'>
            <h2>{firstName}<br/>{lastName}</h2>
            <img src={annonce.host.picture} alt={`photo de ${annonce.host.name}`}></img>
          </div>
          <Rating annonce={annonce} />
        </div> 
      </div>
      <div className={`annonce-collapse ${annonce.pictures.length === 1 ? '' : 'up'}`}>
        <Collapse title="description" content={annonce.description}/>
        <Collapse title="équipements" content={equipmentsString}/>
      </div>
      
    </div>
  )
}

AnnonceView.propTypes = {
  annonce: PropTypes.object.isRequired,
};


export default AnnonceView
