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
import {  addOutline, addSharp, heartOutline, heartSharp, listOutline, listSharp, mailOutline, mailSharp, menuOutline, menuSharp, paperPlaneOutline, paperPlaneSharp, pulseOutline, pulseSharp, remove, searchCircleSharp, searchOutline } from 'ionicons/icons';
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
    title: 'Menu',
    url: '/Menu',
    iosIcon: menuOutline,
    mdIcon: menuSharp
  },
  {
    title: 'Recherche',
    url: '/Recherche',
    iosIcon: searchOutline,
    mdIcon: searchCircleSharp
  },
  {
    title: 'Ajouter',
    url: '/Ajout',
    iosIcon: addOutline,
    mdIcon: addSharp
  },
  {
    title: 'Liste des favories',
    url: '/liste',
    iosIcon: listOutline,
    mdIcon: listSharp
  },
  {
    title: 'Log out',
    url: '/logout',
    iosIcon: listOutline,
    mdIcon: listSharp
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
  const location = useLocation();
  const history = useHistory();
  const fucntionsimple = () => {
    console.log("teste de rep");
    
  }

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent style={{backgroundColor: "red"}}>
        <IonList id="inbox-list"  >
          <IonListHeader>Menu</IonListHeader>
          {/* <IonNote>hi@ionicframework.com</IonNote> */}
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
          
          <IonItem>
            <IonIcon aria-hidden="true" slot="start" icon="plus"  />
            <div className="content">
              <div className="accordion" id="accordionExample"></div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse3"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Voir la liste
                        </button>
                    </h2>
                    <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <ul 
                              className="list-group list-group-unbordered mb-3"
                              style={{
                               
                                backgroundColor:'transparent',
                                border: 'transparent',
                              }}>
                                {ajoute.map((data) => (
                                  <IonButton routerLink={data.url}>
                                    <li
                                        className="list-group-item"
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            backgroundColor:'transparent',
                                            border: 'transparent',
                                        }}
                                    >
                                        <b>{data.titre}</b>
                                    </li>
                                  </IonButton>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
