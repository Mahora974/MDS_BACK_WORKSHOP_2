import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class EtudiantsService {
  constructor(private readonly http: HttpService) {}

  getEtudiants(params: any = {}) { 
    return this.http.get(`/etudiants`); 
  }

  postEtudiants(params: any = {}) { 
    return this.http.post(`/etudiants`); 
  }

  getEtudiantsCle(params: any = {}) { 
    return this.http.get(`/etudiants/${cle}`); 
  }

  postEtudiantsCle(params: any = {}) { 
    return this.http.post(`/etudiants/${cle}`); 
  }

  deleteEtudiantsCle(params: any = {}) { 
    return this.http.delete(`/etudiants/${cle}`); 
  }

  postEtudiantsSupprimer(params: any = {}) { 
    return this.http.post(`/etudiants/supprimer`); 
  }

  getEtudiantsClePhotoFormat(params: any = {}) { 
    return this.http.get(`/etudiants/${cle}/photo/${format}`); 
  }

  postEtudiantsClePhoto(params: any = {}) { 
    return this.http.post(`/etudiants/${cle}/photo`); 
  }

  deleteEtudiantsClePhoto(params: any = {}) { 
    return this.http.delete(`/etudiants/${cle}/photo`); 
  }

  getEtudiantsCleRegroupements(params: any = {}) { 
    return this.http.get(`/etudiants/${cle}/regroupements`); 
  }

  getEtudiantsClePromotions(params: any = {}) { 
    return this.http.get(`/etudiants/${cle}/promotions`); 
  }

  postEtudiantsCleEtuPromotionsClePromoAjouter(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/promotions/${cle_promo}/ajouter`); 
  }

  postEtudiantsCleEtuPromotionsClePromoEnlever(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/promotions/${cle_promo}/enlever`); 
  }

  getEtudiantsCleEtuPromotionsClePromoDatesAffectation(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/promotions/${cle_promo}/dates_affectation`); 
  }

  postEtudiantsCleEtuPromotionsClePromoDatesAffectation(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/promotions/${cle_promo}/dates_affectation`); 
  }

  getEtudiantsCleTdoptions(params: any = {}) { 
    return this.http.get(`/etudiants/${cle}/tdoptions`); 
  }

  postEtudiantsCleEtuTdoptionsCleTdoptAjouter(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/tdoptions/${cle_tdopt}/ajouter`); 
  }

  postEtudiantsCleEtuTdoptionsCleTdoptEnlever(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/tdoptions/${cle_tdopt}/enlever`); 
  }

  getEtudiantsCleEtuTdoptionsCleTdoptDatesAffectation(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/tdoptions/${cle_tdopt}/dates_affectation`); 
  }

  postEtudiantsCleEtuTdoptionsCleTdoptDatesAffectation(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/tdoptions/${cle_tdopt}/dates_affectation`); 
  }

  getEtudiantsCleCours(params: any = {}) { 
    return this.http.get(`/etudiants/${cle}/cours`); 
  }

  getEtudiantsCleEtuServicesNotationCleSnPeriodesNotationClePernBonusMalus(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/services_notation/${cle_sn}/periodes_notation/${cle_pern}/bonus_malus`); 
  }

  postEtudiantsCleEtuServicesNotationCleSnPeriodesNotationClePernBonusMalus(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/services_notation/${cle_sn}/periodes_notation/${cle_pern}/bonus_malus`); 
  }

  getEtudiantsCleEtuServicesNotationCleSnPeriodesHorsCalendrierClePerhcBonusMalus(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/services_notation/${cle_sn}/periodes_hors_calendrier/${cle_perhc}/bonus_malus`); 
  }

  postEtudiantsCleEtuServicesNotationCleSnPeriodesHorsCalendrierClePerhcBonusMalus(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/services_notation/${cle_sn}/periodes_hors_calendrier/${cle_perhc}/bonus_malus`); 
  }

  getEtudiantsCleEtuServicesNotationCleSnCalendriersNotationCleCalnAppreciation(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/services_notation/${cle_sn}/calendriers_notation/${cle_caln}/appreciation`); 
  }

  postEtudiantsCleEtuServicesNotationCleSnCalendriersNotationCleCalnAppreciation(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/services_notation/${cle_sn}/calendriers_notation/${cle_caln}/appreciation`); 
  }

  getEtudiantsCleEtuServicesNotationCleSnPeriodesNotationClePernAppreciation(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/services_notation/${cle_sn}/periodes_notation/${cle_pern}/appreciation`); 
  }

  postEtudiantsCleEtuServicesNotationCleSnPeriodesNotationClePernAppreciation(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/services_notation/${cle_sn}/periodes_notation/${cle_pern}/appreciation`); 
  }

  getEtudiantsCleEtuServicesNotationCleSnPeriodesHorsCalendrierClePerhcAppreciation(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/services_notation/${cle_sn}/periodes_hors_calendrier/${cle_perhc}/appreciation`); 
  }

  postEtudiantsCleEtuServicesNotationCleSnPeriodesHorsCalendrierClePerhcAppreciation(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/services_notation/${cle_sn}/periodes_hors_calendrier/${cle_perhc}/appreciation`); 
  }

  getEtudiantsCleEtuPromotionsClePromoPeriodesNotationClePernObservationGenerale(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/promotions/${cle_promo}/periodes_notation/${cle_pern}/observation_generale`); 
  }

  postEtudiantsCleEtuPromotionsClePromoPeriodesNotationClePernObservationGenerale(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/promotions/${cle_promo}/periodes_notation/${cle_pern}/observation_generale`); 
  }

  getEtudiantsCleEtuPromotionsClePromoPeriodesHorsCalendrierClePerhcObservationGenerale(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/promotions/${cle_promo}/periodes_hors_calendrier/${cle_perhc}/observation_generale`); 
  }

  postEtudiantsCleEtuPromotionsClePromoPeriodesHorsCalendrierClePerhcObservationGenerale(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/promotions/${cle_promo}/periodes_hors_calendrier/${cle_perhc}/observation_generale`); 
  }

  getEtudiantsCleEtuPromotionsClePromoPeriodesNotationClePernDecision(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/promotions/${cle_promo}/periodes_notation/${cle_pern}/decision`); 
  }

  postEtudiantsCleEtuPromotionsClePromoPeriodesNotationClePernDecision(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/promotions/${cle_promo}/periodes_notation/${cle_pern}/decision`); 
  }

  getEtudiantsCleEtuPromotionsClePromoPeriodesHorsCalendrierClePerhcDecision(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/promotions/${cle_promo}/periodes_hors_calendrier/${cle_perhc}/decision`); 
  }

  postEtudiantsCleEtuPromotionsClePromoPeriodesHorsCalendrierClePerhcDecision(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/promotions/${cle_promo}/periodes_hors_calendrier/${cle_perhc}/decision`); 
  }

  getEtudiantsCleEtuPeriodesNotationClePernModulesNotationCleModValidationModule(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/periodes_notation/${cle_pern}/modules_notation/${cle_mod}/validation_module`); 
  }

  postEtudiantsCleEtuPeriodesNotationClePernModulesNotationCleModValidationModule(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/periodes_notation/${cle_pern}/modules_notation/${cle_mod}/validation_module`); 
  }

  getEtudiantsCleEtuPeriodesHorsCalendrierClePerhcModulesNotationCleModValidationModule(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/periodes_hors_calendrier/${cle_perhc}/modules_notation/${cle_mod}/validation_module`); 
  }

  postEtudiantsCleEtuPeriodesHorsCalendrierClePerhcModulesNotationCleModValidationModule(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/periodes_hors_calendrier/${cle_perhc}/modules_notation/${cle_mod}/validation_module`); 
  }

  getEtudiantsCleEtuDevoirsCleDevoirNotes(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/devoirs/${cle_devoir}/notes`); 
  }

  postEtudiantsCleEtuDevoirsCleDevoirNotes(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/devoirs/${cle_devoir}/notes`); 
  }

  getEtudiantsCleEtuFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/etudiants/${cle_etu}/familles/${cle_fam}/rubriques`); 
  }

  postEtudiantsCleEtuFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/etudiants/${cle_etu}/familles/${cle_fam}/rubriques`); 
  }
}
