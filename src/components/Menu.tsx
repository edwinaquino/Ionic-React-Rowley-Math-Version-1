import React, { useState } from "react";
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonButton,
  IonRadioGroup,
  IonRadio,
  IonItemDivider,
  IonSelect,
  IonSelectOption,
  IonInput,
} from "@ionic/react";
import { useLocation } from "react-router-dom";
import {
  trendingUpOutline,
  heartSharp,
  removeCircleOutline,
  mailSharp,
  closeCircleOutline,
  paperPlaneSharp,
  addCircleOutline,
} from "ionicons/icons";
import "./Menu.css";
import { Link, RouteComponentProps } from "react-router-dom";
// DECLARE TYPES
interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}
// NAVIGATIONAL LINKS
const appPages: AppPage[] = [
  {
    title: "Addition",
    url: "/math/addition",
    iosIcon: addCircleOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Substraction",
    url: "/math/substraction",
    iosIcon: removeCircleOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: "Multiplication",
    url: "/math/multiplication",
    iosIcon: closeCircleOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Division",
    url: "/division",
    iosIcon: trendingUpOutline,
    mdIcon: heartSharp,
  },
];
const Menu: React.FC = (props) => {

  // const SendToHome = () => {
  //     setData("This message was sent from Menu.tsx");
  //   }
  // const location = useLocation();
  const [selected, setSelected] = useState<string>("Addition");
  const [NumberLimit, setNumberLimit] = useState<number>(9);
  const [NumberCommon, setNumberCommon] = useState<number>(2);
  const [gender, setGender] = useState<string>();
  const [data, setData] = useState("");
  
  const openUrl = (url:string) => {
    window.open(url);
  };
  


  return (
    <IonMenu side="start" contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonItemDivider>Math Operations</IonItemDivider>
          <IonRadioGroup
            value={selected}
            onIonChange={(e) => setSelected(e.detail.value)}
          >
            {appPages.map((appPage, i) => {
              return (
                // <IonMenuToggle key={i} autoHide={false}> // CLOSE MENU ONCLICK
                <IonItem key={i}>
                  {/* // <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}> */}
                  <IonLabel>{appPage.title}</IonLabel>
                  <IonRadio slot="start" value={appPage.title} />
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                </IonItem>
                // </IonMenuToggle>
              );
            })}
          </IonRadioGroup>
        </IonList>
        
        {/* # SHOWS THE SELETECT OPTION FROM THE LIST */}
        {/* <IonItemDivider>Your Selection</IonItemDivider>
        <IonItem>{selected ?? "(none selected"}</IonItem>
        <IonItemDivider>Options</IonItemDivider> */}
        
        
        
        <IonList>
          {/* <IonItem>
            <IonLabel>Gender</IonLabel>
            <IonSelect value={gender} placeholder="Select One" onIonChange={e => setGender(e.detail.value)}>
              <IonSelectOption value="female">Female</IonSelectOption>
              <IonSelectOption value="male">Male</IonSelectOption>
            </IonSelect>
          </IonItem> */}
         
          
          <IonItem>
            <IonLabel>Common Number </IonLabel>
            <IonSelect
              interface="popover"
              placeholder="Select Limit Number"
              value={NumberCommon}
              okText="OK"
              cancelText="Cancel"
              onIonChange={(e) => setNumberCommon(e.detail.value)}
            >
              <IonSelectOption value="1">1</IonSelectOption>
              <IonSelectOption value="2">2</IonSelectOption>
              <IonSelectOption value="3">3</IonSelectOption>
              <IonSelectOption value="4">4</IonSelectOption>
              <IonSelectOption value="5">5</IonSelectOption>
              <IonSelectOption value="6">6</IonSelectOption>
              <IonSelectOption value="7">7</IonSelectOption>
              <IonSelectOption value="8">8</IonSelectOption>
              <IonSelectOption value="9">9</IonSelectOption>
              {/* {[...Array(9)].map((e, i) => {
                                if(i===0) return false; // skip
                                let valNumber = i + 1
                                console.dir(valNumber);
                                return <IonSelectOption value={valNumber}>{valNumber}</IonSelectOption>
                            })} */}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Limit Number</IonLabel>
            <IonSelect
              value={NumberLimit}
              placeholder="Select Common Number"
              okText="OK"
              cancelText="Cancel"
              onIonChange={(e) => setNumberLimit(e.detail.value)}
            >
              {[...Array(9)].map((e, i) => {
                let valNumber = i + 1;
                return (
                  <IonSelectOption key={i} value={valNumber}>
                    {valNumber}
                  </IonSelectOption>
                );
              })}
            </IonSelect>
          </IonItem>

          <IonItem>
          <IonLabel>Number Of Questions</IonLabel>
          
          </IonItem>
         

          <IonItem>
          <IonLabel>Timer Limit</IonLabel>
          <IonInput type="time"></IonInput>
          </IonItem>


        </IonList>
        <IonMenuToggle>
          <IonButton expand="block" color="success"
          href={
            process.env.PUBLIC_URL +
            "/mathematics/" +
            selected +
            "/" +
            NumberLimit +
            "/" +
            NumberCommon
          }
          >
            Done
            
          </IonButton>
        </IonMenuToggle>
        


 
      </IonContent>
    </IonMenu>
  );
  
};
export default Menu;
