import './Cards.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Cards = (props) => {
  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <Link className='annonce-preview' to={`/annonces/${props.id}`} key={props.id} onClick={handleClick}>
        <article style={{ backgroundImage: `url(${props.cover})` }}>
            <h2>{props.title}</h2>
        </article>
    </Link>
  )
}

Cards.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Cards