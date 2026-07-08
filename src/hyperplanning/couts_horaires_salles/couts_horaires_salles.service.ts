import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Couts_horaires_sallesService {
  constructor(private readonly http: HttpService) {}

  getCoutsHorairesSalles(params: any = {}) { 
    return this.http.get(`/couts_horaires_salles`); 
  }

  postCoutsHorairesSalles(params: any = {}) { 
    return this.http.post(`/couts_horaires_salles`); 
  }

  getCoutsHorairesSallesCle(params: any = {}) { 
    return this.http.get(`/couts_horaires_salles/${cle}`); 
  }

  postCoutsHorairesSallesCle(params: any = {}) { 
    return this.http.post(`/couts_horaires_salles/${cle}`); 
  }

  deleteCoutsHorairesSallesCle(params: any = {}) { 
    return this.http.delete(`/couts_horaires_salles/${cle}`); 
  }

  postCoutsHorairesSallesSupprimer(params: any = {}) { 
    return this.http.post(`/couts_horaires_salles/supprimer`); 
  }
}
