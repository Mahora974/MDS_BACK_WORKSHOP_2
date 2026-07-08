import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Parametres_baseService {
  constructor(private readonly http: HttpService) {}

  getParametresBase(params: any = {}) { 
    return this.http.get(`/parametres_base`); 
  }

  postParametresBase(params: any = {}) { 
    return this.http.post(`/parametres_base`); 
  }
}
