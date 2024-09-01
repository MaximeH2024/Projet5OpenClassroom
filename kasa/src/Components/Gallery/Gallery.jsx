import data from '../../Data/logements.json'

function Gallery() {
    
    const announceList = data.map((announce, i) =>
        <AnnouncePreview key={i}  id={announce.id} cover={announce.cover} title={announce.title}/>
    );
   
    return (
        <section className="gallery">
            {announceList}
        </section>
    )
}

export default Gallery