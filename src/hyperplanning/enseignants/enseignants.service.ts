import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class EnseignantsService {
  constructor(private readonly http: HttpService) {}

  getEnseignants(params: any = {}) { 
    return this.http.get(`/enseignants`); 
  }

  postEnseignants(params: any = {}) { 
    return this.http.post(`/enseignants`); 
  }

  getEnseignantsCle(params: any = {}) { 
    return this.http.get(`/enseignants/${cle}`); 
  }

  postEnseignantsCle(params: any = {}) { 
    return this.http.post(`/enseignants/${cle}`); 
  }

  deleteEnseignantsCle(params: any = {}) { 
    return this.http.delete(`/enseignants/${cle}`); 
  }

  postEnseignantsSupprimer(params: any = {}) { 
    return this.http.post(`/enseignants/supprimer`); 
  }

  getEnseignantsClePhotoFormat(params: any = {}) { 
    return this.http.get(`/enseignants/${cle}/photo/${format}`); 
  }

  postEnseignantsClePhoto(params: any = {}) { 
    return this.http.post(`/enseignants/${cle}/photo`); 
  }

  deleteEnseignantsClePhoto(params: any = {}) { 
    return this.http.delete(`/enseignants/${cle}/photo`); 
  }

  getEnseignantsCleCours(params: any = {}) { 
    return this.http.get(`/enseignants/${cle}/cours`); 
  }

  getEnseignantsCleEnsCoursCleCoursDomaine(params: any = {}) { 
    return this.http.get(`/enseignants/${cle_ens}/cours/${cle_cours}/domaine`); 
  }

  postEnseignantsCleEnsCoursCleCoursDomaine(params: any = {}) { 
    return this.http.post(`/enseignants/${cle_ens}/cours/${cle_cours}/domaine`); 
  }

  getEnseignantsCleIndisponibilites(params: any = {}) { 
    return this.http.get(`/enseignants/${cle}/indisponibilites`); 
  }

  getEnseignantsCleVoeux(params: any = {}) { 
    return this.http.get(`/enseignants/${cle}/voeux`); 
  }

  getEnseignantsCleCout(params: any = {}) { 
    return this.http.get(`/enseignants/${cle}/cout`); 
  }

  getEnseignantsCout(params: any = {}) { 
    return this.http.get(`/enseignants/cout`); 
  }

  getEnseignantsCleDureeCours(params: any = {}) { 
    return this.http.get(`/enseignants/${cle}/duree_cours`); 
  }

  getEnseignantsDureeCours(params: any = {}) { 
    return this.http.get(`/enseignants/duree_cours`); 
  }

  getEnseignantsCleDureeDisponible(params: any = {}) { 
    return this.http.get(`/enseignants/${cle}/duree_disponible`); 
  }

  getEnseignantsDureeDisponible(params: any = {}) { 
    return this.http.get(`/enseignants/duree_disponible`); 
  }

  getEnseignantsCleDureePondereeCours(params: any = {}) { 
    return this.http.get(`/enseignants/${cle}/duree_ponderee_cours`); 
  }

  getEnseignantsDureePondereeCours(params: any = {}) { 
    return this.http.get(`/enseignants/duree_ponderee_cours`); 
  }

  getEnseignantsCleT1(params: any = {}) { 
    return this.http.get(`/enseignants/${cle}/t1`); 
  }

  getEnseignantsT1(params: any = {}) { 
    return this.http.get(`/enseignants/t1`); 
  }

  getEnseignantsCleT2Conv(params: any = {}) { 
    return this.http.get(`/enseignants/${cle}/t2_conv`); 
  }

  getEnseignantsT2Conv(params: any = {}) { 
    return this.http.get(`/enseignants/t2_conv`); 
  }

  getEnseignantsCleT2Real(params: any = {}) { 
    return this.http.get(`/enseignants/${cle}/t2_real`); 
  }

  getEnseignantsT2Real(params: any = {}) { 
    return this.http.get(`/enseignants/t2_real`); 
  }

  getEnseignantsCleT3(params: any = {}) { 
    return this.http.get(`/enseignants/${cle}/t3`); 
  }

  getEnseignantsT3(params: any = {}) { 
    return this.http.get(`/enseignants/t3`); 
  }

  getEnseignantsCleDecharges(params: any = {}) { 
    return this.http.get(`/enseignants/${cle}/decharges`); 
  }

  getEnseignantsDecharges(params: any = {}) { 
    return this.http.get(`/enseignants/decharges`); 
  }

  getEnseignantsCleEnsPromotionsClePromoCoutHoraire(params: any = {}) { 
    return this.http.get(`/enseignants/${cle_ens}/promotions/${cle_promo}/cout_horaire`); 
  }

  postEnseignantsCleEnsPromotionsClePromoCoutHoraire(params: any = {}) { 
    return this.http.post(`/enseignants/${cle_ens}/promotions/${cle_promo}/cout_horaire`); 
  }

  getEnseignantsCleEnsTdoptionsCleTdoptCoutHoraire(params: any = {}) { 
    return this.http.get(`/enseignants/${cle_ens}/tdoptions/${cle_tdopt}/cout_horaire`); 
  }

  postEnseignantsCleEnsTdoptionsCleTdoptCoutHoraire(params: any = {}) { 
    return this.http.post(`/enseignants/${cle_ens}/tdoptions/${cle_tdopt}/cout_horaire`); 
  }

  getEnseignantsCleEnsFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/enseignants/${cle_ens}/familles/${cle_fam}/rubriques`); 
  }

  postEnseignantsCleEnsFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/enseignants/${cle_ens}/familles/${cle_fam}/rubriques`); 
  }
}
