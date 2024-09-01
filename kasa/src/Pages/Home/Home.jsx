import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import homeBg from "../../assets/Image1.png";

function Home() {
  return ( 
   <main>
    <Banner title="Chez vous, partout et ailleurs" url={homeBg} />
    <Gallery />
   </main>   
  )
}

export default Home