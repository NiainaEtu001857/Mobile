import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AnnonceC, { AnnonceCModel } from '../components/AnnonceComponent';
import { useHistory } from 'react-router';
import { AnnonceModel } from '../data/AnnonceModel';

const Annonces: React.FC = () => {
    const name = "Listes Annonces";
      const [annonces, setAnnonces] = useState<AnnonceModel[]>();
        const history = useHistory();

        useEffect(() => {
            const fetchModel = async () => {
                try {
                    const token = sessionStorage.getItem('token');
                    const response = await fetch('http://localhost:8080/api/v1/annonces/utilisateur', {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    });
            
                    if (response.ok) {
                        const responseData = await response.json();
                       console.log(responseData.data);
                        // setModels(responseData.data);
                        setAnnonces(responseData.data);
                        // console.log(categories);
                    } else {
                        console.error('Error fetching annonces:', response.status);
                    }
                } catch (error) {
                    console.error('Error during fetch:', error);
                }
              };

              fetchModel();
        }, []);

    // const data1: AnnonceModel = { id_annonce: 1 , Nom: "Mercede 123" , Description: "Voiture de transport" , Prix_vente: 12000 , status: "nom vendu" , Models: "5210" , Marque: "Mercedes" };

    // const data: AnnonceModel[] = [
    //     { id_annonce: 1 , Nom: "Mercede 123" , Description: "Voiture de transport" , Prix_vente: 12000 , status: "nom vendu" , Models: "5210" , Marque: "Mercedes" },
    //     { id_annonce: 2 , Nom: "Mercede 303" , Description: "Voiture de Simple" , Prix_vente: 14000 , status: "nom vendu" , Models: "456" , Marque: "Mercedes" },
    //     { id_annonce: 3 , Nom: "Mazda 452" , Description: "Voiture de Simple" , Prix_vente: 12000 , status: "nom vendu" , Models: "w758" , Marque: "Mazda" },
    //     { id_annonce: 4 , Nom: "Mazda 7548" , Description: "Voiture de Transport civile" , Prix_vente: 19000 , status: "nom vendu" , Models: "2015" , Marque: "Mazda" },
    //     { id_annonce: 5 , Nom: "BMW 360" , Description: "Voiture de Lux" , Prix_vente: 20000 , status: "nom vendu" , Models: "1200" , Marque: "BMW" },
    //     { id_annonce: 6 , Nom: "BMW 123" , Description: "Voiture de personnel" , Prix_vente: 110000 , status: "nom vendu" , Models: "222" , Marque: "BMW" },
    //     { id_annonce: 7 , Nom: "Ford 123" , Description: "Voiture de Familiale" , Prix_vente: 50000 , status: "nom vendu" , Models: "xr" , Marque: "Ford" },
    //     { id_annonce: 8 , Nom: "Ford x" , Description: "Voiture de transport" , Prix_vente: 30000 , status: "nom vendu" , Models: "xs+" , Marque: "Ford" },
    //     { id_annonce: 9 , Nom: "Audi wsr" , Description: "Voiture de familial" , Prix_vente: 78000 , status: "nom vendu" , Models: "89" , Marque: "Audi" },
    //     { id_annonce: 10 , Nom: "Audi kd" , Description: "Voiture de course" , Prix_vente: 140000 , status: "nom vendu" , Models: "plus prenium" , Marque: "Audi" },      
    // ];
    return(
        <IonPage>
            <IonHeader style={{backgroundColor: "red"}} >
                <IonToolbar >
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    {/* <div id="carouselExampleAutoplaying" className="carousel slide pointer-event" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            
                            <div className="carousel-item">
                            <IonCard>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="40%" y="25%" fill="#555" dy=".3em">First slide</text></svg>
                                <IonCardHeader>
                                    <IonCardTitle>Card Title</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    Here's a small text description for the card content. Nothing more, nothing less.
                                    <br />
                                    <IonButton color="danger">Voir +</IonButton>
                                </IonCardContent>
                            </IonCard> 
                            </div>
                            <div className="carousel-item active">
                            <IonCard >
                                <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="40%" y="25%" fill="#444" dy=".3em">Second slide</text></svg>
                                <IonCardHeader>
                                    <IonCardTitle>Card Title</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    Here's a small text description for the card content. Nothing more, nothing less.
                                    <IonButton color="danger">Voir +</IonButton>
                                </IonCardContent>
                            </IonCard>
                                
                            </div>
                            <div className="carousel-item">
                            <IonCard >
                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="40%" y="25%" fill="#333" dy=".3em">Third slide</text></svg>
                                <IonCardHeader>
                                    <IonCardTitle>Card Title</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    Here's a small text description for the card content. Nothing more, nothing less.
                                    <IonButton color="danger">Voir +</IonButton>
                                </IonCardContent>
                            </IonCard>
                                
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div> */}
                </IonCard>
                
                <AnnonceC data={annonces} />
                {/* <IonInfiniteScroll>
                    <IonInfiniteScrollContent loadingText="Please wait..." loadingSpinner="bubbles"></IonInfiniteScrollContent>
            </IonInfiniteScroll> */}
            </IonContent>
        </IonPage>
           
       
    );
}
export default Annonces;