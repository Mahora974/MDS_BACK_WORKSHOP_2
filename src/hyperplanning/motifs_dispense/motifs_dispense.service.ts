import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Motifs_dispenseService {
  constructor(private readonly http: HttpService) {}

  getMotifsDispense(params: any = {}) { 
    return this.http.get(`/motifs_dispense`); 
  }

  deleteMotifsDispenseLibelle(params: any = {}) { 
    return this.http.delete(`/motifs_dispense/${libelle}`); 
  }
}
