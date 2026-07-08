import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class DispensesService {
  constructor(private readonly http: HttpService) {}

  getDispenses(params: any = {}) { 
    return this.http.get(`/dispenses`); 
  }

  postDispenses(params: any = {}) { 
    return this.http.post(`/dispenses`); 
  }

  getDispensesCle(params: any = {}) { 
    return this.http.get(`/dispenses/${cle}`); 
  }

  postDispensesCle(params: any = {}) { 
    return this.http.post(`/dispenses/${cle}`); 
  }

  deleteDispensesCle(params: any = {}) { 
    return this.http.delete(`/dispenses/${cle}`); 
  }

  postDispensesSupprimer(params: any = {}) { 
    return this.http.post(`/dispenses/supprimer`); 
  }
}
