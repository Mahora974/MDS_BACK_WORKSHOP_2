import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class TDOptionsService {
  constructor(private readonly http: HttpService) {}

  getTdoptions(params: any = {}) { 
    return this.http.get(`/tdoptions`); 
  }

  postTdoptions(params: any = {}) { 
    return this.http.post(`/tdoptions`); 
  }

  getTdoptionsCle(params: any = {}) { 
    return this.http.get(`/tdoptions/${cle}`); 
  }

  postTdoptionsCle(params: any = {}) { 
    return this.http.post(`/tdoptions/${cle}`); 
  }

  deleteTdoptionsCle(params: any = {}) { 
    return this.http.delete(`/tdoptions/${cle}`); 
  }

  postTdoptionsSupprimer(params: any = {}) { 
    return this.http.post(`/tdoptions/supprimer`); 
  }

  getTdoptionsCleEtudiants(params: any = {}) { 
    return this.http.get(`/tdoptions/${cle}/etudiants`); 
  }

  getTdoptionsCleCours(params: any = {}) { 
    return this.http.get(`/tdoptions/${cle}/cours`); 
  }

  getTdoptionsCleTDOptCoursCleCoursDomaine(params: any = {}) { 
    return this.http.get(`/tdoptions/${cle_TDOpt}/cours/${cle_cours}/domaine`); 
  }

  postTdoptionsCleTDOptCoursCleCoursDomaine(params: any = {}) { 
    return this.http.post(`/tdoptions/${cle_TDOpt}/cours/${cle_cours}/domaine`); 
  }

  getTdoptionsCleIndisponibilites(params: any = {}) { 
    return this.http.get(`/tdoptions/${cle}/indisponibilites`); 
  }

  getTdoptionsCleVoeux(params: any = {}) { 
    return this.http.get(`/tdoptions/${cle}/voeux`); 
  }

  getTdoptionsCleCout(params: any = {}) { 
    return this.http.get(`/tdoptions/${cle}/cout`); 
  }

  getTdoptionsCout(params: any = {}) { 
    return this.http.get(`/tdoptions/cout`); 
  }

  getTdoptionsCleDureeCours(params: any = {}) { 
    return this.http.get(`/tdoptions/${cle}/duree_cours`); 
  }

  getTdoptionsDureeCours(params: any = {}) { 
    return this.http.get(`/tdoptions/duree_cours`); 
  }

  getTdoptionsCleDureeDisponible(params: any = {}) { 
    return this.http.get(`/tdoptions/${cle}/duree_disponible`); 
  }

  getTdoptionsDureeDisponible(params: any = {}) { 
    return this.http.get(`/tdoptions/duree_disponible`); 
  }

  getTdoptionsCleTdoptMatieresCleMatMatierePersonnalisee(params: any = {}) { 
    return this.http.get(`/tdoptions/${cle_tdopt}/matieres/${cle_mat}/matiere_personnalisee`); 
  }

  postTdoptionsCleTdoptMatieresCleMatMatierePersonnalisee(params: any = {}) { 
    return this.http.post(`/tdoptions/${cle_tdopt}/matieres/${cle_mat}/matiere_personnalisee`); 
  }

  getTdoptionsClesTdoptMatieresClesMatMatieresPersonnalisees(params: any = {}) { 
    return this.http.get(`/tdoptions/${cles_tdopt}/matieres/${cles_mat}/matieres_personnalisees`); 
  }

  getTdoptionsCleTdoptFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/tdoptions/${cle_tdopt}/familles/${cle_fam}/rubriques`); 
  }

  postTdoptionsCleTdoptFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/tdoptions/${cle_tdopt}/familles/${cle_fam}/rubriques`); 
  }
}
