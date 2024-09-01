import React from 'react';
import data from '../../Data/logements.json';
import Cards from '../Components/Cards/Cards';
import './Gallery.scss';

function Gallery() {
    const logements = data.map(logement => (
        <Cards 
            key={logement.id} 
            title={logement.title} 
            cover={logement.cover} 
        />
    ));

    return (
        <section className="gallery">
            {logements}
        </section>
    );
}

export default Gallery;
