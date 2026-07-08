import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class PromotionsService {
  constructor(private readonly http: HttpService) {}

  getPromotions(params: any = {}) { 
    return this.http.get(`/promotions`); 
  }

  postPromotions(params: any = {}) { 
    return this.http.post(`/promotions`); 
  }

  getPromotionsCle(params: any = {}) { 
    return this.http.get(`/promotions/${cle}`); 
  }

  postPromotionsCle(params: any = {}) { 
    return this.http.post(`/promotions/${cle}`); 
  }

  deletePromotionsCle(params: any = {}) { 
    return this.http.delete(`/promotions/${cle}`); 
  }

  postPromotionsSupprimer(params: any = {}) { 
    return this.http.post(`/promotions/supprimer`); 
  }

  getPromotionsCleEtudiants(params: any = {}) { 
    return this.http.get(`/promotions/${cle}/etudiants`); 
  }

  getPromotionsCleCours(params: any = {}) { 
    return this.http.get(`/promotions/${cle}/cours`); 
  }

  getPromotionsClePromoCoursCleCoursDomaine(params: any = {}) { 
    return this.http.get(`/promotions/${cle_promo}/cours/${cle_cours}/domaine`); 
  }

  postPromotionsClePromoCoursCleCoursDomaine(params: any = {}) { 
    return this.http.post(`/promotions/${cle_promo}/cours/${cle_cours}/domaine`); 
  }

  getPromotionsCleIndisponibilites(params: any = {}) { 
    return this.http.get(`/promotions/${cle}/indisponibilites`); 
  }

  getPromotionsCleVoeux(params: any = {}) { 
    return this.http.get(`/promotions/${cle}/voeux`); 
  }

  getPromotionsCleCout(params: any = {}) { 
    return this.http.get(`/promotions/${cle}/cout`); 
  }

  getPromotionsCout(params: any = {}) { 
    return this.http.get(`/promotions/cout`); 
  }

  getPromotionsCleDureeCours(params: any = {}) { 
    return this.http.get(`/promotions/${cle}/duree_cours`); 
  }

  getPromotionsDureeCours(params: any = {}) { 
    return this.http.get(`/promotions/duree_cours`); 
  }

  getPromotionsCleDureeDisponible(params: any = {}) { 
    return this.http.get(`/promotions/${cle}/duree_disponible`); 
  }

  getPromotionsDureeDisponible(params: any = {}) { 
    return this.http.get(`/promotions/duree_disponible`); 
  }

  getPromotionsClePromoMatieresCleMatMatierePersonnalisee(params: any = {}) { 
    return this.http.get(`/promotions/${cle_promo}/matieres/${cle_mat}/matiere_personnalisee`); 
  }

  postPromotionsClePromoMatieresCleMatMatierePersonnalisee(params: any = {}) { 
    return this.http.post(`/promotions/${cle_promo}/matieres/${cle_mat}/matiere_personnalisee`); 
  }

  getPromotionsClesPromoMatieresClesMatMatieresPersonnalisees(params: any = {}) { 
    return this.http.get(`/promotions/${cles_promo}/matieres/${cles_mat}/matieres_personnalisees`); 
  }

  getPromotionsClePromoFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/promotions/${cle_promo}/familles/${cle_fam}/rubriques`); 
  }

  postPromotionsClePromoFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/promotions/${cle_promo}/familles/${cle_fam}/rubriques`); 
  }
}
