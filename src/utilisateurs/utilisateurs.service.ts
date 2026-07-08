import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class UtilisateursService {
  constructor(private readonly http: HttpService) {}

  getUtilisateurs(params: any = {}) { 
    return this.http.get(`/utilisateurs`); 
  }

  postUtilisateurs(params: any = {}) { 
    return this.http.post(`/utilisateurs`); 
  }

  getUtilisateursCle(params: any = {}) { 
    return this.http.get(`/utilisateurs/${cle}`); 
  }

  postUtilisateursCle(params: any = {}) { 
    return this.http.post(`/utilisateurs/${cle}`); 
  }

  deleteUtilisateursCle(params: any = {}) { 
    return this.http.delete(`/utilisateurs/${cle}`); 
  }

  postUtilisateursSupprimer(params: any = {}) { 
    return this.http.post(`/utilisateurs/supprimer`); 
  }
}
