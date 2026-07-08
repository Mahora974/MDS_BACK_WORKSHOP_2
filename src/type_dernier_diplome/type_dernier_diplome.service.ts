import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Type_dernier_diplomeService {
  constructor(private readonly http: HttpService) {}

  getTypeDernierDiplome(params: any = {}) { 
    return this.http.get(`/type_dernier_diplome`); 
  }

  getTypeDernierDiplomeCode(params: any = {}) { 
    return this.http.get(`/type_dernier_diplome/${code}`); 
  }
}
