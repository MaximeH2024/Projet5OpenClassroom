import React from 'react';
import data from '../../Data/logements.json';
import './Gallery.scss';
import Cards from '../../Components/Cards/Cards';

function Gallery() {
    const logements = data.map((logement,i ) => (
        <Cards 
            key={i} 
            id={logement.id}
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
