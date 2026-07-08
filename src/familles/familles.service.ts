import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class FamillesService {
  constructor(private readonly http: HttpService) {}

  getFamilles(params: any = {}) { 
    return this.http.get(`/familles`); 
  }

  postFamilles(params: any = {}) { 
    return this.http.post(`/familles`); 
  }

  getFamillesCle(params: any = {}) { 
    return this.http.get(`/familles/${cle}`); 
  }

  postFamillesCle(params: any = {}) { 
    return this.http.post(`/familles/${cle}`); 
  }

  deleteFamillesCle(params: any = {}) { 
    return this.http.delete(`/familles/${cle}`); 
  }

  postFamillesSupprimer(params: any = {}) { 
    return this.http.post(`/familles/supprimer`); 
  }

  getFamillesCleRubriques(params: any = {}) { 
    return this.http.get(`/familles/${cle}/rubriques`); 
  }

  postFamillesCleRubriques(params: any = {}) { 
    return this.http.post(`/familles/${cle}/rubriques`); 
  }
}
