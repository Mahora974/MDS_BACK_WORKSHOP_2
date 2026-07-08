import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class TypesService {
  constructor(private readonly http: HttpService) {}

  getTypes(params: any = {}) { 
    return this.http.get(`/types`); 
  }

  getTypesNom(params: any = {}) { 
    return this.http.get(`/types/${nom}`); 
  }

  postTypesNom(params: any = {}) { 
    return this.http.post(`/types/${nom}`); 
  }

  deleteTypesNom(params: any = {}) { 
    return this.http.delete(`/types/${nom}`); 
  }

  getTypesNomFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/types/${nom}/familles/${cle_fam}/rubriques`); 
  }

  postTypesNomFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/types/${nom}/familles/${cle_fam}/rubriques`); 
  }
}
