/* eslint-disable @typescript-eslint/naming-convention */
export interface Client {
    id?: number;
    nom?: string;
    prenom?: string;
    email?: string;
    mdp?: string;
    img?: string;
    actif?: boolean;
    tel?: string;
    rue?: string;
    code_postal?: number;
    ville?: string;
    note_vendeur?: string;
    avis_commande?: string;
}
