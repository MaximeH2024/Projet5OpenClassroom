import data from "../Data/logements.json";
import { createContext } from 'react';
import PropTypes from 'prop-types';

export const AnnonceContext = createContext(null)

const AnnonceContextProvider = (props) => {
    const contextValue = {data}
    return (
        <AnnonceContext.Provider value={contextValue}>
            {props.children}
        </AnnonceContext.Provider>
    )
}

AnnonceContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AnnonceContextProvider