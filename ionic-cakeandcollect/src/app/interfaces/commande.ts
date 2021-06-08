/* eslint-disable @typescript-eslint/naming-convention */
export interface Categorie {
    id?: number;
    clientId?: number;
    titre?: string;
    actif?: boolean;
    quantite?: number;
    prix_vente?: number;
    date_commande?: Date;
    date_recuperation?: Date;
}
