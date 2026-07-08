import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class CouleursService {
  constructor(private readonly http: HttpService) {}

  getCouleurCouleur(params: any = {}) { 
    return this.http.get(`/couleur/${couleur}`); 
  }

  getCouleurRougeRVertGBleuB(params: any = {}) { 
    return this.http.get(`/couleur/rouge/${R}/vert/${G}/bleu/${B}`); 
  }
}
