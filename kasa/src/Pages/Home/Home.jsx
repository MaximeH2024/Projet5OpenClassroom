import Banner from "../../Components/Banner/Banner";
import Gallery from "../../Components/Gallery/Gallery";
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