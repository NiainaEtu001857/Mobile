import {
    IonAlert,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonInput,
    IonPage,
  } from "@ionic/react";
  import React, { useEffect, useState } from "react";
  import { useHistory, useParams } from "react-router";
  import { Categorie, Marque } from "../../data/DetailVoitureModel";
  
  const ModifCategorie: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [Libelle, setLibelle] = useState<string>("");
    const [marque, setMarque] = useState<Categorie | undefined>();
    const history = useHistory();
    const params = useParams<{ id: string }>();
  
    const handleModif = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://wscloudfinal-production.up.railway.app/api/v1/categories/${params.id}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "idcategorie": params.id,
            "categorie": Libelle,
          }),
        });
  
        if (response.ok) {
          await response.json(); // If there's response data to handle
          history.push("/Ajouter/Categories");
        } else {
          setShowAlert(true);
        }
      } catch (error) {
        console.error('Error during modification:', error);
      }
    };
  
    useEffect(() => {
      const fetchAnnonces = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await fetch(`https://wscloudfinal-production.up.railway.app/api/v1/categories/${params.id}`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
  
          if (response.ok) {
            const responseData = await response.json();
            setMarque(responseData.data);
          } else {
            console.error('Error fetching marque:', response.status);
          }
        } catch (error) {
          console.error('Error during fetch:', error);
        }
      };
  
      fetchAnnonces();
    }, [params.id]);
  
    return (
      <IonPage>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Modifier Categorie</IonCardTitle>
            <IonCardSubtitle>Voici la categorie : {marque?.categorie}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonInput
              label="Categorie"
              labelPlacement="floating"
              fill="outline"
              placeholder=""
              value={Libelle}
              onIonChange={(e) => setLibelle(e.detail.value!)}
            ></IonInput>
            <br />
            <IonButton fill="outline" routerLink="/Ajouter/Categories">
              Annuler
            </IonButton>
            <IonButton color="success" onClick={handleModif} fill="outline">
              Valider
            </IonButton>
          </IonCardContent>
        </IonCard>
  
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Erreur"
          subHeader="Erreur lors de la modification"
          message="Une erreur s'est produite lors de la modification. Veuillez réessayer."
          buttons={['OK']}
        />
      </IonPage>
    );
  };
  
  export default ModifCategorie;
  