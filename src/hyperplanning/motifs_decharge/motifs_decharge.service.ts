import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Motifs_dechargeService {
  constructor(private readonly http: HttpService) {}

  getMotifsDecharge(params: any = {}) { 
    return this.http.get(`/motifs_decharge`); 
  }

  deleteMotifsDechargeLibelle(params: any = {}) { 
    return this.http.delete(`/motifs_decharge/${libelle}`); 
  }
}
