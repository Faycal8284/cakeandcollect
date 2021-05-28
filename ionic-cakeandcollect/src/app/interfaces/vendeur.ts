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
        // eslint-disable-next-line @typescript-eslint/naming-convention
        code_promo?: string;
        particulier?: boolean;
        actif?: boolean;
        rue?: string;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        code_postal?: string;
        ville?: string;
}
