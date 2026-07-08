import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class AlternancesService {
  constructor(private readonly http: HttpService) {}

  getAlternances(params: any = {}) { 
    return this.http.get(`/alternances`); 
  }

  postAlternances(params: any = {}) { 
    return this.http.post(`/alternances`); 
  }

  getAlternancesCle(params: any = {}) { 
    return this.http.get(`/alternances/${cle}`); 
  }

  postAlternancesCle(params: any = {}) { 
    return this.http.post(`/alternances/${cle}`); 
  }

  deleteAlternancesCle(params: any = {}) { 
    return this.http.delete(`/alternances/${cle}`); 
  }

  postAlternancesSupprimer(params: any = {}) { 
    return this.http.post(`/alternances/supprimer`); 
  }

  getAlternancesCleAltFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/alternances/${cle_alt}/familles/${cle_fam}/rubriques`); 
  }

  postAlternancesCleAltFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/alternances/${cle_alt}/familles/${cle_fam}/rubriques`); 
  }
}
