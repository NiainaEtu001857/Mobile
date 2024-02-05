import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonContent, IonIcon } from "@ionic/react";
import { AnnonceModel } from "../data/AnnonceModel"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { carOutline } from "ionicons/icons";
export interface AnnonceDetail {
    data?:AnnonceModel;
} 

// 
const DetailAnnonceComponent: React.FC<AnnonceDetail> = (data) => {
    return (
        <IonContent>
             <IonCard>
                <div id="carouselExampleAutoplaying" className="carousel slide pointer-event" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="40%" y="25%" fill="#555" dy=".3em">First slide</text></svg>
                        </div>
                        <div className="carousel-item active">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="40%" y="25%" fill="#444" dy=".3em">Second slide</text></svg>
                        </div>
                        <div className="carousel-item">
                        <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="40%" y="25%" fill="#333" dy=".3em">Third slide</text></svg>
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
                </div>
                <IonCardHeader>
                    {/* <IonCardTitle>{data.}</IonCardTitle>
                    <IonCardSubtitle>{annonce.data.Marque}</IonCardSubtitle> */}
                </IonCardHeader>
                <IonCardContent>
                    <div className="content">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <IonIcon icon={carOutline}></IonIcon>{' '}
                                        <h5 style={{ marginLeft: '20%' }}>Voitures</h5>
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse "
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <ul className="list-group list-group-unbordered mb-3">
                                            <li
                                                className="list-group-item"
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <b>Matricule</b>
                                                <span style={{ textAlign: 'right' }}>
                                                    {data.data?.detailvoiture.matricule}
                                                </span>
                                            </li>
                                            <li
                                                className="list-group-item"
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <b>Kilometrage</b>
                                                <span style={{ textAlign: 'right' }}>
                                                    {data.data?.detailvoiture.kilometrage}
                                                </span>
                                            </li>
                                            <li
                                                className="list-group-item"
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <b>Marque :</b>
                                                <span style={{ textAlign: 'right' }}>
                                                    {data.data?.detailvoiture.marque}
                                                </span>
                                            </li>
                                            <li
                                                className="list-group-item"
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <b>Categorie :</b>
                                                <span style={{ textAlign: 'right' }}>
                                                    {data.data?.detailvoiture.categorie}
                                                </span>
                                            </li>
                                            <li
                                                className="list-group-item"
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <b>Annees de sortie :</b>
                                                <span style={{ textAlign: 'right' }}>
                                                    {data.data?.detailvoiture.annee}
                                                </span>
                                            </li>
                                            <li
                                                className="list-group-item"
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <b>Type de carburant :</b>
                                                <span style={{ textAlign: 'right' }}>
                                                    {data.data?.detailvoiture.carburant}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Basic{' '}
                                        <strong style={{ marginLeft: '20%' }}>
                                            Status : <i>{data.data?.status}</i>
                                        </strong>
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong style={{ textDecoration: 'underline' }}>
                                            Description :
                                        </strong>{' '}
                                        {data.data?.description}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <IonIcon ></IonIcon>
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse3"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Proprite
                                    </button>
                                </h2>
                                <div
                                    id="collapse3"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <ul className="list-group list-group-unbordered mb-3">
                                            {data.data?.proprietes.map((propriete, index) => (
                                                <li
                                                    key={index}
                                                    className="list-group-item"
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                    }}
                                                >
                                                    <b>{propriete.titre}</b>
                                                    <span style={{ textAlign: 'right' }}>
                                                        {propriete.description}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </IonCardContent>
            </IonCard>
        </IonContent>
    );  
}

export default DetailAnnonceComponent;