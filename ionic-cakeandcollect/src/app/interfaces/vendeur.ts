export interface Vendeur {
        id?: number;
        nom?: string;
        prenom?: string;
        siret?: string;
        email?: string;
        mdp?: string;
        particulier?: boolean;
        actif?: boolean;
        rue?: string;
        code_postal?: string;
        ville?: string;
        code_promo?: string;
}
