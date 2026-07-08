import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Periodes_notationService {
  constructor(private readonly http: HttpService) {}

  getPeriodesNotation(params: any = {}) { 
    return this.http.get(`/periodes_notation`); 
  }

  postPeriodesNotation(params: any = {}) { 
    return this.http.post(`/periodes_notation`); 
  }

  getPeriodesNotationCle(params: any = {}) { 
    return this.http.get(`/periodes_notation/${cle}`); 
  }

  postPeriodesNotationCle(params: any = {}) { 
    return this.http.post(`/periodes_notation/${cle}`); 
  }

  deletePeriodesNotationCle(params: any = {}) { 
    return this.http.delete(`/periodes_notation/${cle}`); 
  }

  postPeriodesNotationSupprimer(params: any = {}) { 
    return this.http.post(`/periodes_notation/supprimer`); 
  }
}
