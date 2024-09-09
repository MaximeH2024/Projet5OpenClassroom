import ReactDOM from 'react-dom/client'
import RouterGlobal from './Components/Router/Router.jsx';
import AnnonceContextProvider from './Context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render( 
  <AnnonceContextProvider>
    <RouterGlobal />
  </AnnonceContextProvider>
)
