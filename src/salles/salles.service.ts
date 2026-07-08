import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class SallesService {
  constructor(private readonly http: HttpService) {}

  getSalles(params: any = {}) { 
    return this.http.get(`/salles`); 
  }

  postSalles(params: any = {}) { 
    return this.http.post(`/salles`); 
  }

  getSallesCle(params: any = {}) { 
    return this.http.get(`/salles/${cle}`); 
  }

  postSallesCle(params: any = {}) { 
    return this.http.post(`/salles/${cle}`); 
  }

  deleteSallesCle(params: any = {}) { 
    return this.http.delete(`/salles/${cle}`); 
  }

  postSallesSupprimer(params: any = {}) { 
    return this.http.post(`/salles/supprimer`); 
  }

  getSallesCleCours(params: any = {}) { 
    return this.http.get(`/salles/${cle}/cours`); 
  }

  getSallesCleSalleCoursCleCoursDomaine(params: any = {}) { 
    return this.http.get(`/salles/${cle_salle}/cours/${cle_cours}/domaine`); 
  }

  postSallesCleSalleCoursCleCoursDomaine(params: any = {}) { 
    return this.http.post(`/salles/${cle_salle}/cours/${cle_cours}/domaine`); 
  }

  getSallesCleIndisponibilites(params: any = {}) { 
    return this.http.get(`/salles/${cle}/indisponibilites`); 
  }

  getSallesCleVoeux(params: any = {}) { 
    return this.http.get(`/salles/${cle}/voeux`); 
  }

  getSallesCleCout(params: any = {}) { 
    return this.http.get(`/salles/${cle}/cout`); 
  }

  getSallesCout(params: any = {}) { 
    return this.http.get(`/salles/cout`); 
  }

  getSallesCleDureeCours(params: any = {}) { 
    return this.http.get(`/salles/${cle}/duree_cours`); 
  }

  getSallesDureeCours(params: any = {}) { 
    return this.http.get(`/salles/duree_cours`); 
  }

  getSallesCleDureeDisponible(params: any = {}) { 
    return this.http.get(`/salles/${cle}/duree_disponible`); 
  }

  getSallesDureeDisponible(params: any = {}) { 
    return this.http.get(`/salles/duree_disponible`); 
  }

  getSallesCleSalleFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/salles/${cle_salle}/familles/${cle_fam}/rubriques`); 
  }

  postSallesCleSalleFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/salles/${cle_salle}/familles/${cle_fam}/rubriques`); 
  }
}
