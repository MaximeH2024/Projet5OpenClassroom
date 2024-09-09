import { useContext } from "react";
import { AnnonceContext } from "../../Context/Context";
import { useParams, Navigate } from "react-router-dom";
import AnnonceView from "../../components/AnnonceView/AnnonceView";

function annonces() {
    const {data} = useContext(AnnonceContext)
    const {annonceId} = useParams()
    const annonce = data.find((annonce)=> annonce.id === annonceId)

     if (!annonce) {
          return <Navigate to={"*"}/>
     }
    
    return (
       <main className="annonce-section">
            <AnnonceView annonce={annonce}/>
       </main>   
      )
}

export default annonces