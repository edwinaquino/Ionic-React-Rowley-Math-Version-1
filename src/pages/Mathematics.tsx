import { useRef, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonFooter,
  IonButton,
  IonMenuButton,
  IonMenuToggle,
  IonIcon,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCheckbox,
  IonList,
  IonBadge,
} from "@ionic/react";

import FormResults from "../components/FormResults";
import "./Mathematics.css";
import { thumbsUp, thumbsDown, timeOutline, timerOutline } from "ionicons/icons";
import { RouteComponentProps } from "react-router";
interface UserDetailPageProps
  extends RouteComponentProps<{
    operator: string;
    limit: string; // top
    common: string; // bottom
  }> {}
const Mathematics: React.FC<UserDetailPageProps> = ({ match },props) => {
  const [processedData, setProcessedData] = useState<number>();
  
  
  
  // GENERATE MATH NUMBERS
  const Selected_NumberLimit = generateRandom(0, parseInt(match.params.limit));
  const Selected_NumberCommon = match.params.common;
  const MathNumberArr = shuffle([Selected_NumberLimit, Selected_NumberCommon]); // will be used to shuffle the bottom and top number randomly
  
  
  let OperatorString = "";
  
  switch (match.params.operator) {
    case "Addition":
      OperatorString = "+";
      break;
    case "Substraction":
      if(MathNumberArr[1]>MathNumberArr[0]) {
        MathNumberArr[3]=MathNumberArr[1];
        MathNumberArr[4]=MathNumberArr[0];

        MathNumberArr[0]=MathNumberArr[3];
        MathNumberArr[1]=MathNumberArr[4];

      //alert("bad");
      }
      //MathNumberArr.reverse();
      OperatorString = "-";
      break;
    case "Multiplication":
      OperatorString = "x";
      break;
    case "Division":
      OperatorString = "/";
      break;
    default:
      break;
  }
  // INPUT FIELDS
  const topInputRef = useRef<HTMLIonInputElement>(null);
  const bottomInputRef = useRef<HTMLIonInputElement>(null);
  const submittedInputRef = useRef<HTMLIonInputElement>(null);

  const generateMessage = (e: any) => {
    //alert("submiitted");
   e.preventDefault(); // Prevent the form from submitting/refreshing
    // SUBMITED FIELDS
    let submittedTop = topInputRef.current!.value;
    let submittedBottom = bottomInputRef.current!.value;
    let submittedAnswer = submittedInputRef.current!.value;
    // CHECK TO MAKE SURE IS NOT NULL
    if (
      !submittedTop ||
      !submittedBottom ||
      !submittedAnswer ||
      +submittedTop < 0 ||
      +submittedBottom < 0 ||
      +submittedAnswer < 0
    ) {
      let returnFalse = false;
      if(submittedTop==="")returnFalse = true;
      if(submittedBottom==="")returnFalse = true;

      if(returnFalse){
        // DO NOT PROCESS ANY FURTHER IF EITHER VALUES ARE NULL
        alert("Please enter a valid input values. Try again. |"+submittedTop+'|'+submittedBottom+'|'+submittedAnswer+'|');
        return;
      }
    }
    let CorrectAsnwer: number = 0;
    switch (match.params.operator) {
      case "Addition":
        CorrectAsnwer = +submittedTop! + +submittedBottom!;
        break;
      case "Substraction":
        CorrectAsnwer = +submittedTop! - +submittedBottom!;
        break;
      case "Multiplication":
        CorrectAsnwer = +submittedTop! * +submittedBottom!;
        break;
      case "Division":
        CorrectAsnwer = +submittedTop! / +submittedBottom!;
        break;
      default:
          alert("operator not found="+match.params.operator);
          return false;
        
    }
    let finalResults: any = {};
    // change submittedAnswer to number type with the + sign
    if (+submittedAnswer! === CorrectAsnwer) {
      finalResults.finalMessage =
        "Correct! - " + CorrectAsnwer + " is the right answer";
      
      finalResults.title = "Correct";
      finalResults.color = "success";
      finalResults.icon = thumbsUp;
      submittedInputRef.current!.value = 3;
      finalResults.correct = true;

    } else {
      
      finalResults.finalMessage =
        "Wrong. The correct answer is: " +
        CorrectAsnwer +
        ", you entered " +
        submittedAnswer;
        // submittedAnswer + ". |"+submittedTop+'|'+submittedBottom+'|'+submittedAnswer+'|';
      finalResults.title = "Wrong";
      finalResults.color = "danger";
      finalResults.icon = thumbsDown;
      finalResults.correct = false;
    }
    setProcessedData(finalResults);
    setTimeout(() => {
      //alert('will focus');
      submittedInputRef.current!.setFocus();
     
      AnswersTracker.push();
    }, 150);
    setQuestionCounter(QuestionCounter + 1);

    setAnswersTracker([...AnswersTracker, {
      number:  QuestionCounter,
      top:submittedTop,
      bottom: submittedBottom,
      answer: submittedAnswer,
      correct: finalResults.correct,
      color: finalResults.color,
      icon:finalResults.icon
    }]);
  };



//https://www.code-sample.com/2019/11/reactjs-increment-counter-example-using.html
const [QuestionCounter, setQuestionCounter] = useState(1);


const [AnswersTracker, setAnswersTracker] = useState<any>([]);
  


return (




    
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          {/* <IonTitle>Math Practice {match.params.operator}</IonTitle> */}
          <IonTitle>Question {QuestionCounter}</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>



      

        






        <IonCard>
          <IonCardContent>
            <form onSubmit={generateMessage}>
              <div className="NumberLimit" title="0">{MathNumberArr[0]}</div>
              <div className="NumberCommon" title="1">{OperatorString} {MathNumberArr[1]}</div>
              <div className="MathAnswerBox">
                <IonInput
                  className="ion-text-right"
                  hidden
                  type="text"
                  value={MathNumberArr[0]}
                  ref={topInputRef}
                ></IonInput>
                <IonInput
                  hidden
                  className="ion-text-right operator"
                  type="text"
                  value={MathNumberArr[1]}
                  ref={bottomInputRef}
                ></IonInput>
                <IonInput
                  className="MathAnswerBoxInput bgGray"
                  type="text"
                  value=""
                  ref={submittedInputRef}
                ></IonInput>
                
              </div>
              <div>
                
                {/* // HIT ENTER DOES NOT WORK WITH ionButton https://github.com/ionic-team/ionic-framework/issues/19368#issuecomment-605714226 */}
                <IonButton type="submit" expand="block" size="large">Go</IonButton>

                <button type="submit" />
              </div>
            </form>




            <IonList>
            {AnswersTracker.map((question:any, i:number) => {
        return (
          <IonItem key={i} >
            <IonBadge slot="start" color="dark">#{question.number}</IonBadge>
            <IonLabel>{ `${question.top} ${OperatorString} ${question.bottom} = ${question.answer}` }</IonLabel>
            <IonIcon slot="end"  icon={question.icon} color={question.color}></IonIcon>
            </IonItem>
          // <div key={i}>{JSON.stringify(values, null, 2)}</div>
        )

      }
          
        )}
</IonList>







          </IonCardContent>
        </IonCard>
        {processedData && <FormResults result={processedData} />}
      </IonContent>
      <IonFooter>
        <IonToolbar className="ion-padding">
        <IonBadge slot="start"  color="warning"><IonIcon icon={timeOutline}></IonIcon> 5:00</IonBadge>
        <IonBadge slot="end"  color="secondary"><IonIcon icon={timerOutline}></IonIcon> 98%</IonBadge>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
  function shuffle(array: any) {
    var currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  function generateRandom(min: number, max: number) {
    //https://codesandbox.io/s/98n9EkEOJ?file=/index.js:236-406
    max++;
    return Math.floor(Math.random() * max);
  }
};
export default Mathematics;
