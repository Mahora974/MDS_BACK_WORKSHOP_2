import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class DevoirsService {
  constructor(private readonly http: HttpService) {}

  getDevoirs(params: any = {}) { 
    return this.http.get(`/devoirs`); 
  }

  postDevoirs(params: any = {}) { 
    return this.http.post(`/devoirs`); 
  }

  getDevoirsCle(params: any = {}) { 
    return this.http.get(`/devoirs/${cle}`); 
  }

  postDevoirsCle(params: any = {}) { 
    return this.http.post(`/devoirs/${cle}`); 
  }

  deleteDevoirsCle(params: any = {}) { 
    return this.http.delete(`/devoirs/${cle}`); 
  }

  postDevoirsSupprimer(params: any = {}) { 
    return this.http.post(`/devoirs/supprimer`); 
  }

  getDevoirsCleDevPromotionsClePromoPeriodesNotation(params: any = {}) { 
    return this.http.get(`/devoirs/${cle_dev}/promotions/${cle_promo}/periodes_notation`); 
  }

  postDevoirsCleDevPromotionsClePromoPeriodesNotation(params: any = {}) { 
    return this.http.post(`/devoirs/${cle_dev}/promotions/${cle_promo}/periodes_notation`); 
  }

  getDevoirsCleDevTdoptionsCleTDOptPeriodesNotation(params: any = {}) { 
    return this.http.get(`/devoirs/${cle_dev}/tdoptions/${cle_TDOpt}/periodes_notation`); 
  }

  postDevoirsCleDevTdoptionsCleTDOptPeriodesNotation(params: any = {}) { 
    return this.http.post(`/devoirs/${cle_dev}/tdoptions/${cle_TDOpt}/periodes_notation`); 
  }
}
