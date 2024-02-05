export interface Marque {
    id_marque:number;
    marque:string;
}

export interface Categorie {
    idCategorie:number;
    categorie:string;
}

export interface Models {
    id_model:number;
    marque_id:number;
    categorie_id:number;
    model:string;
}

export interface Carburant {
    idCarburant: number;
    carburant: string;
}

export interface AnneeSortie {
    id_anneesortie: number,
    model_id: number,
    annee:number
}