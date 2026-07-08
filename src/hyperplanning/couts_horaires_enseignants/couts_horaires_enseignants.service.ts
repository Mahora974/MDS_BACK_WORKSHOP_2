import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Couts_horaires_enseignantsService {
  constructor(private readonly http: HttpService) {}

  getCoutsHorairesEnseignants(params: any = {}) { 
    return this.http.get(`/couts_horaires_enseignants`); 
  }

  postCoutsHorairesEnseignants(params: any = {}) { 
    return this.http.post(`/couts_horaires_enseignants`); 
  }

  getCoutsHorairesEnseignantsCle(params: any = {}) { 
    return this.http.get(`/couts_horaires_enseignants/${cle}`); 
  }

  postCoutsHorairesEnseignantsCle(params: any = {}) { 
    return this.http.post(`/couts_horaires_enseignants/${cle}`); 
  }

  deleteCoutsHorairesEnseignantsCle(params: any = {}) { 
    return this.http.delete(`/couts_horaires_enseignants/${cle}`); 
  }

  postCoutsHorairesEnseignantsSupprimer(params: any = {}) { 
    return this.http.post(`/couts_horaires_enseignants/supprimer`); 
  }
}
