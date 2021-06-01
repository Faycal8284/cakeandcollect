/* eslint-disable @typescript-eslint/naming-convention */
export interface Patisserie {
        id?: number;
        vendeurId?: number;
        categorieId?: number;
        commandeId?: number;
        nom?: string;
        disponible?: boolean;
        descriptions?: string;
        ingredients?: string;
        prix_u?: number;
        stock?: number;
        img?: string;
        img1?: string;
        img2?: string;
        img3?: string;
        quantite?: number;
}
