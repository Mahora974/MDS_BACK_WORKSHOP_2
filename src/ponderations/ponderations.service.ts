import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class PonderationsService {
  constructor(private readonly http: HttpService) {}

  getPonderations(params: any = {}) { 
    return this.http.get(`/ponderations`); 
  }

  postPonderations(params: any = {}) { 
    return this.http.post(`/ponderations`); 
  }

  getPonderationsCle(params: any = {}) { 
    return this.http.get(`/ponderations/${cle}`); 
  }

  postPonderationsCle(params: any = {}) { 
    return this.http.post(`/ponderations/${cle}`); 
  }

  deletePonderationsCle(params: any = {}) { 
    return this.http.delete(`/ponderations/${cle}`); 
  }

  postPonderationsSupprimer(params: any = {}) { 
    return this.http.post(`/ponderations/supprimer`); 
  }
}
