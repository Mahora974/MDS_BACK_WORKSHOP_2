import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class RegroupementsService {
  constructor(private readonly http: HttpService) {}

  getRegroupements(params: any = {}) { 
    return this.http.get(`/regroupements`); 
  }

  postRegroupements(params: any = {}) { 
    return this.http.post(`/regroupements`); 
  }

  getRegroupementsCle(params: any = {}) { 
    return this.http.get(`/regroupements/${cle}`); 
  }

  postRegroupementsCle(params: any = {}) { 
    return this.http.post(`/regroupements/${cle}`); 
  }

  deleteRegroupementsCle(params: any = {}) { 
    return this.http.delete(`/regroupements/${cle}`); 
  }

  postRegroupementsSupprimer(params: any = {}) { 
    return this.http.post(`/regroupements/supprimer`); 
  }

  getRegroupementsCleCours(params: any = {}) { 
    return this.http.get(`/regroupements/${cle}/cours`); 
  }

  getRegroupementsCleRegroupCoursCleCoursDomaine(params: any = {}) { 
    return this.http.get(`/regroupements/${cle_regroup}/cours/${cle_cours}/domaine`); 
  }

  postRegroupementsCleRegroupCoursCleCoursDomaine(params: any = {}) { 
    return this.http.post(`/regroupements/${cle_regroup}/cours/${cle_cours}/domaine`); 
  }

  getRegroupementsCleCout(params: any = {}) { 
    return this.http.get(`/regroupements/${cle}/cout`); 
  }

  getRegroupementsCout(params: any = {}) { 
    return this.http.get(`/regroupements/cout`); 
  }

  getRegroupementsCleDureeCours(params: any = {}) { 
    return this.http.get(`/regroupements/${cle}/duree_cours`); 
  }

  getRegroupementsDureeCours(params: any = {}) { 
    return this.http.get(`/regroupements/duree_cours`); 
  }

  getRegroupementsCleDureeDisponible(params: any = {}) { 
    return this.http.get(`/regroupements/${cle}/duree_disponible`); 
  }

  getRegroupementsDureeDisponible(params: any = {}) { 
    return this.http.get(`/regroupements/duree_disponible`); 
  }

  getRegroupementsCleRegroupFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/regroupements/${cle_regroup}/familles/${cle_fam}/rubriques`); 
  }

  postRegroupementsCleRegroupFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/regroupements/${cle_regroup}/familles/${cle_fam}/rubriques`); 
  }
}
