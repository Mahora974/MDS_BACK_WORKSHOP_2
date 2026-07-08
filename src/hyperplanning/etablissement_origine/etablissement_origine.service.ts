import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Etablissement_origineService {
  constructor(private readonly http: HttpService) {}

  getEtablissementOrigine(params: any = {}) { 
    return this.http.get(`/etablissement_origine`); 
  }

  postEtablissementOrigine(params: any = {}) { 
    return this.http.post(`/etablissement_origine`); 
  }

  getEtablissementOrigineCle(params: any = {}) { 
    return this.http.get(`/etablissement_origine/${cle}`); 
  }

  postEtablissementOrigineCle(params: any = {}) { 
    return this.http.post(`/etablissement_origine/${cle}`); 
  }

  deleteEtablissementOrigineCle(params: any = {}) { 
    return this.http.delete(`/etablissement_origine/${cle}`); 
  }

  postEtablissementOrigineSupprimer(params: any = {}) { 
    return this.http.post(`/etablissement_origine/supprimer`); 
  }
}
