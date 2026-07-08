import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class EntreprisesService {
  constructor(private readonly http: HttpService) {}

  getEntreprises(params: any = {}) { 
    return this.http.get(`/entreprises`); 
  }

  postEntreprises(params: any = {}) { 
    return this.http.post(`/entreprises`); 
  }

  getEntreprisesCle(params: any = {}) { 
    return this.http.get(`/entreprises/${cle}`); 
  }

  postEntreprisesCle(params: any = {}) { 
    return this.http.post(`/entreprises/${cle}`); 
  }

  deleteEntreprisesCle(params: any = {}) { 
    return this.http.delete(`/entreprises/${cle}`); 
  }

  postEntreprisesSupprimer(params: any = {}) { 
    return this.http.post(`/entreprises/supprimer`); 
  }

  getEntreprisesCleEntFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/entreprises/${cle_ent}/familles/${cle_fam}/rubriques`); 
  }

  postEntreprisesCleEntFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/entreprises/${cle_ent}/familles/${cle_fam}/rubriques`); 
  }
}
