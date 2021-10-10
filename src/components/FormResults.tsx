import React from "react";
import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";
const FormResults: React.FC<{ result: any }> = props => {
    return (
        <IonRow>
            <IonCol>
                <IonCard  color={props.result.color}>
                    <IonCardContent className="ion-text-center">
                        {/* Show formatted message from Home.tsx generateMessage() */}
                        <h1>{props.result.title}</h1>
                        <h3 >{props.result.finalMessage}</h3>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    )
}
export default FormResults;