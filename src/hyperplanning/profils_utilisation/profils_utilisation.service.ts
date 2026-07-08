import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Profils_utilisationService {
  constructor(private readonly http: HttpService) {}

  getProfilsUtilisation(params: any = {}) { 
    return this.http.get(`/profils_utilisation`); 
  }

  getProfilsUtilisationCle(params: any = {}) { 
    return this.http.get(`/profils_utilisation/${cle}`); 
  }
}
