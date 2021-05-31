/* eslint-disable @typescript-eslint/naming-convention */
export interface Vendeur {
        id?: number;
        nom?: string;
        prenom?: string;
        siret?: string;
        email?: string;
        mdp?: string;
        img?: string;
        categorie?: string;
        note?: number;
        code_promo?: string;
        descriptions?: string;
        particulier?: boolean;
        actif?: boolean;
        rue?: string;
        code_postal?: number;
        ville?: string;
        tel?: string;
}
