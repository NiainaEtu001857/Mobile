import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonIcon, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import { AnnonceModel } from '../data/AnnonceModel';
import { add } from 'ionicons/icons';
import './AnnonceComponent.css';

export interface AnnonceCModel {
    data?: AnnonceModel[];
}

const AnnonceC: React.FC<AnnonceCModel> = ({data}) => {
    const divStyle = {
        marginTop: '200px',
      };
      const cs = {
        // max-width: '540px',
        CSSMathMax: '540px',
      };

      return (
        <IonContent style={{marginLeft: '2%'}}>
                {data?.map((annonce) => (
                    <IonCard style={{width: '44%' , float: 'left' , }} key={annonce.annonce_id} routerLink={`/detail/${annonce.annonce_id}`}>
                        <div className="image-container">
                            <img height={'10%'} alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                            <IonLabel className="overlay-prix">{annonce.prix_vente} $</IonLabel>
                            <IonLabel className="overlay-text" >{annonce.detailvoiture.marque}</IonLabel>
                        </div>
                        
                        <IonCardContent>
                            <IonLabel>{annonce.description}</IonLabel>
                        </IonCardContent>
                    </IonCard>
                ))}
        </IonContent>
      );
}
export default AnnonceC;