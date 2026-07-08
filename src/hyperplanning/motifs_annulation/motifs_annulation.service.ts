import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Motifs_annulationService {
  constructor(private readonly http: HttpService) {}

  getMotifsAnnulation(params: any = {}) { 
    return this.http.get(`/motifs_annulation`); 
  }

  getMotifsAnnulationLibelle(params: any = {}) { 
    return this.http.get(`/motifs_annulation/${libelle}`); 
  }

  postMotifsAnnulationLibelle(params: any = {}) { 
    return this.http.post(`/motifs_annulation/${libelle}`); 
  }

  deleteMotifsAnnulationLibelle(params: any = {}) { 
    return this.http.delete(`/motifs_annulation/${libelle}`); 
  }
}
