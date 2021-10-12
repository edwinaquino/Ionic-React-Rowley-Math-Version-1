import React, { useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonContent, IonButton, IonMenuToggle } from "@ionic/react";

import "./Home.css";
const Home: React.FC = (props) => {
  const [word, setWord] = useState('edwin');
    return (
        <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          {/* <IonTitle>Math Practice {match.params.operator}</IonTitle> */}
          <IonTitle>Math App</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className="container">
      <h2>Welcome</h2>
      <p>LOCALHOST Location: http://localhost/IONIC/React/SCHOOl/IonicMathApp/IonicMathApp1/build/home</p>
      <IonMenuToggle><IonButton>Start</IonButton></IonMenuToggle>
      <pre>{JSON.stringify(process.env, null, 2)}</pre>
    </div>
          </IonContent>
          </IonPage>
    )

};
export default Home;