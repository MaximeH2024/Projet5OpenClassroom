import { Navigate, useParams } from "react-router-dom";
import logementsJson from "../../data/logements";

const Location = () => {
    const { id } = useParams();
    const logements = logementsJson.filter((logement) => logement.id === id);
    if (logements.length === 0) {
      return <Navigate to="/Error" />;
    }
    
    
}

export default Location;