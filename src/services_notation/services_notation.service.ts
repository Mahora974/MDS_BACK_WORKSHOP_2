import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Services_notationService {
  constructor(private readonly http: HttpService) {}

  getServicesNotation(params: any = {}) { 
    return this.http.get(`/services_notation`); 
  }

  postServicesNotation(params: any = {}) { 
    return this.http.post(`/services_notation`); 
  }

  getServicesNotationCle(params: any = {}) { 
    return this.http.get(`/services_notation/${cle}`); 
  }

  postServicesNotationCle(params: any = {}) { 
    return this.http.post(`/services_notation/${cle}`); 
  }

  deleteServicesNotationCle(params: any = {}) { 
    return this.http.delete(`/services_notation/${cle}`); 
  }

  postServicesNotationSupprimer(params: any = {}) { 
    return this.http.post(`/services_notation/supprimer`); 
  }

  getServicesNotationCleSnPromotionsClePromoModuleNotation(params: any = {}) { 
    return this.http.get(`/services_notation/${cle_sn}/promotions/${cle_promo}/module_notation`); 
  }

  getServicesNotationCleSnPeriodesNotationClePernCoefficient(params: any = {}) { 
    return this.http.get(`/services_notation/${cle_sn}/periodes_notation/${cle_pern}/coefficient`); 
  }

  postServicesNotationCleSnPeriodesNotationClePernCoefficient(params: any = {}) { 
    return this.http.post(`/services_notation/${cle_sn}/periodes_notation/${cle_pern}/coefficient`); 
  }

  getServicesNotationClesSnPeriodesNotationClesPernCoefficients(params: any = {}) { 
    return this.http.get(`/services_notation/${cles_sn}/periodes_notation/${cles_pern}/coefficients`); 
  }

  getServicesNotationCleSnPeriodesHorsCalendrierClePerhcCoefficient(params: any = {}) { 
    return this.http.get(`/services_notation/${cle_sn}/periodes_hors_calendrier/${cle_perhc}/coefficient`); 
  }

  postServicesNotationCleSnPeriodesHorsCalendrierClePerhcCoefficient(params: any = {}) { 
    return this.http.post(`/services_notation/${cle_sn}/periodes_hors_calendrier/${cle_perhc}/coefficient`); 
  }

  getServicesNotationClesSnPeriodesHorsCalendrierClesPerhcCoefficients(params: any = {}) { 
    return this.http.get(`/services_notation/${cles_sn}/periodes_hors_calendrier/${cles_perhc}/coefficients`); 
  }

  getServicesNotationCleSnPeriodesNotationClePernBonusMalusActif(params: any = {}) { 
    return this.http.get(`/services_notation/${cle_sn}/periodes_notation/${cle_pern}/bonus_malus_actif`); 
  }

  postServicesNotationCleSnPeriodesNotationClePernBonusMalusActif(params: any = {}) { 
    return this.http.post(`/services_notation/${cle_sn}/periodes_notation/${cle_pern}/bonus_malus_actif`); 
  }

  getServicesNotationCleSnPeriodesHorsCalendrierClePerhcBonusMalusActif(params: any = {}) { 
    return this.http.get(`/services_notation/${cle_sn}/periodes_hors_calendrier/${cle_perhc}/bonus_malus_actif`); 
  }

  postServicesNotationCleSnPeriodesHorsCalendrierClePerhcBonusMalusActif(params: any = {}) { 
    return this.http.post(`/services_notation/${cle_sn}/periodes_hors_calendrier/${cle_perhc}/bonus_malus_actif`); 
  }
}
