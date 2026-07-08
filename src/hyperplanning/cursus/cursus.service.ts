import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class CursusService {
  constructor(private readonly http: HttpService) {}

  getCursus(params: any = {}) { 
    return this.http.get(`/cursus`); 
  }

  postCursus(params: any = {}) { 
    return this.http.post(`/cursus`); 
  }

  getCursusCle(params: any = {}) { 
    return this.http.get(`/cursus/${cle}`); 
  }

  postCursusCle(params: any = {}) { 
    return this.http.post(`/cursus/${cle}`); 
  }

  deleteCursusCle(params: any = {}) { 
    return this.http.delete(`/cursus/${cle}`); 
  }

  postCursusSupprimer(params: any = {}) { 
    return this.http.post(`/cursus/supprimer`); 
  }

  getCursusCleCursusFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/cursus/${cle_cursus}/familles/${cle_fam}/rubriques`); 
  }

  postCursusCleCursusFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/cursus/${cle_cursus}/familles/${cle_fam}/rubriques`); 
  }
}
