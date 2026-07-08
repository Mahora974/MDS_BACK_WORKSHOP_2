import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class DechargesService {
  constructor(private readonly http: HttpService) {}

  getDecharges(params: any = {}) { 
    return this.http.get(`/decharges`); 
  }

  postDecharges(params: any = {}) { 
    return this.http.post(`/decharges`); 
  }

  getDechargesCle(params: any = {}) { 
    return this.http.get(`/decharges/${cle}`); 
  }

  postDechargesCle(params: any = {}) { 
    return this.http.post(`/decharges/${cle}`); 
  }

  deleteDechargesCle(params: any = {}) { 
    return this.http.delete(`/decharges/${cle}`); 
  }

  postDechargesSupprimer(params: any = {}) { 
    return this.http.post(`/decharges/supprimer`); 
  }
}
