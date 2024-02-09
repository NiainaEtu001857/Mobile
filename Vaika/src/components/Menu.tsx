import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle
} from '@ionic/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useHistory, useLocation } from 'react-router-dom';
import {  addOutline, addSharp, globeOutline, globeSharp, heartOutline, heartSharp, listOutline, listSharp, logOutOutline, logOutSharp, mailOutline, mailSharp, menuOutline, menuSharp, paperPlaneOutline, paperPlaneSharp, pulseOutline, pulseSharp, remove, searchCircleSharp, searchOutline } from 'ionicons/icons';
import './Menu.css';
import React from 'react';
import { handlogout } from '../data/Function';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [

  {
    title: 'Annonces',
    url: '/Menu',
    iosIcon: globeOutline,
    mdIcon: globeSharp
  },
  {
    title: 'Ajouter annonce',
    url: '/Ajout',
    iosIcon: addOutline,
    mdIcon: addSharp
  }
];




const ajoute = [
  {
    titre: 'Marques',
    url: '/Ajouter/Marques'
  },
  {
    titre: 'Categorie',
    url: '/Ajouter/Categories'
  }
];
const Menu: React.FC = () => {
  const history = useHistory();
  const fetchLogout = async () => {
    try {
        const token = sessionStorage.getItem('token');
        const response = await fetch('https://wscloudfinal-production.up.railway.app/api/auth/v1/logout', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const responseData = await response.json();
          console.log(responseData.data);
          history.push("/");
            window.location.reload();
        } else {
            console.error('Error fetching annonces:', response.status);
        }
    } catch (error) {
        console.error('Error during fetch:', error);
    }
  };
  const location = useLocation();
  const fucntionsimple = () => {
    console.log("teste de rep");
    
  }

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent style={{backgroundColor: "red"}}>
        <IonList id="inbox-list"  >
          <IonListHeader>Menu</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          <IonItem  onClick={fetchLogout} routerLink="/login">
          <IonIcon aria-hidden="true" slot="start" ios={logOutOutline} md={logOutSharp} />
            <IonLabel>Log out</IonLabel>
          </IonItem>
          
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
