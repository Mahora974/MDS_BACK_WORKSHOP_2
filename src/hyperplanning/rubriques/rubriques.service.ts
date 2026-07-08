import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class RubriquesService {
  constructor(private readonly http: HttpService) {}

  getRubriques(params: any = {}) { 
    return this.http.get(`/rubriques`); 
  }

  postRubriques(params: any = {}) { 
    return this.http.post(`/rubriques`); 
  }

  getRubriquesCle(params: any = {}) { 
    return this.http.get(`/rubriques/${cle}`); 
  }

  postRubriquesCle(params: any = {}) { 
    return this.http.post(`/rubriques/${cle}`); 
  }

  deleteRubriquesCle(params: any = {}) { 
    return this.http.delete(`/rubriques/${cle}`); 
  }

  postRubriquesSupprimer(params: any = {}) { 
    return this.http.post(`/rubriques/supprimer`); 
  }
}
