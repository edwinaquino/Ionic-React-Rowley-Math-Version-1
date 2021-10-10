
import { IonIcon, IonMenuToggle, IonButton, IonMenuButton } from "@ionic/react";
import React, { useEffect } from "react";
import { menuOutline } from 'ionicons/icons';
interface AppSubject {
  url: string;
  title: string;
}
const appSubjects: AppSubject[] = [
  {
    title: 'HOME',
    url: '/home',
  },
  {
    title: 'Addition',
    url: '/math/addition',
  },
  {
    title: 'Substraction',
    url: '/math/substraction',
  },
  {
    title: 'Multiplication',
    url: '/math/multiplication',
  },
  {
    title: 'Division',
    url: '/math/division',
  },
];
export const NavButtons = () => {
  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 768 ? true : false,
  });
  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);
    return () => mediaQuery.removeListener(setMQuery);
  }, []);
  return (
    <div>
      {mQuery && !mQuery.matches ? (
        <IonMenuButton />
      ) : (
          <>
            {appSubjects.map((AppSubject, index) => {
              return (
                <IonButton routerLink={AppSubject.url}>{AppSubject.title} </IonButton>
              );
            })}

          </>
        )}
    </div>
  );
};
