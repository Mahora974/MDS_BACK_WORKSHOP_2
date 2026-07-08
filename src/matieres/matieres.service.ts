import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class MatieresService {
  constructor(private readonly http: HttpService) {}

  getMatieres(params: any = {}) { 
    return this.http.get(`/matieres`); 
  }

  postMatieres(params: any = {}) { 
    return this.http.post(`/matieres`); 
  }

  getMatieresCle(params: any = {}) { 
    return this.http.get(`/matieres/${cle}`); 
  }

  postMatieresCle(params: any = {}) { 
    return this.http.post(`/matieres/${cle}`); 
  }

  deleteMatieresCle(params: any = {}) { 
    return this.http.delete(`/matieres/${cle}`); 
  }

  postMatieresSupprimer(params: any = {}) { 
    return this.http.post(`/matieres/supprimer`); 
  }

  getMatieresCleMatFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/matieres/${cle_mat}/familles/${cle_fam}/rubriques`); 
  }

  postMatieresCleMatFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/matieres/${cle_mat}/familles/${cle_fam}/rubriques`); 
  }
}
