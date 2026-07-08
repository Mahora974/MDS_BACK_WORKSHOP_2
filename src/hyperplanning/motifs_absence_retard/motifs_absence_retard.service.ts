import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Motifs_absence_retardService {
  constructor(private readonly http: HttpService) {}

  getMotifsAbsenceRetard(params: any = {}) { 
    return this.http.get(`/motifs_absence_retard`); 
  }

  getMotifsAbsenceRetardLibelle(params: any = {}) { 
    return this.http.get(`/motifs_absence_retard/${libelle}`); 
  }

  postMotifsAbsenceRetardLibelle(params: any = {}) { 
    return this.http.post(`/motifs_absence_retard/${libelle}`); 
  }

  deleteMotifsAbsenceRetardLibelle(params: any = {}) { 
    return this.http.delete(`/motifs_absence_retard/${libelle}`); 
  }
}
