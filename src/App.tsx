import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Mathematics from './pages/Mathematics';
import Home from './pages/Home';
import Menu from "./components/Menu";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  return (
    <IonApp>
    {/* // LOCAHOST */}
    <IonReactRouter basename={'/IONIC/React/SCHOOl/IonicMathApp/IonicMathApp1/build/'}> 
    {/* // REMOTE */}
    {/* <IonReactRouter basename={'/pre-school/math2/react/build/'}> */}


    <Menu />
      <IonRouterOutlet   id="main">
      
      {/* PRODUCTION */}
      {/* https://medium.com/@svinkle/how-to-deploy-a-react-app-to-a-subdirectory-f694d46427c1 */}
      {/* <Route path={ `${process.env.PUBLIC_URL}/`} component={Home} />
      <Route path={`${process.env.PUBLIC_URL}/mathematics/:operator/:limit/:common/`} component={Mathematics} />
      <Route exact path="/">  
      <Redirect to="/home" /> */}
      
      {/*LOCAL APP  */}
      
      <Route path={`/home`} component={Home} />
      <Route path={`/mathematics/:operator/:limit/:common`} component={Mathematics} /> 
      <Route exact path="/">  
      <Redirect to="/home" />
     
        
          
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  );
};

export default App;
