import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Modules_notationService {
  constructor(private readonly http: HttpService) {}

  getModulesNotationCle(params: any = {}) { 
    return this.http.get(`/modules_notation/${cle}`); 
  }

  postModulesNotationCle(params: any = {}) { 
    return this.http.post(`/modules_notation/${cle}`); 
  }

  deleteModulesNotationCle(params: any = {}) { 
    return this.http.delete(`/modules_notation/${cle}`); 
  }

  postModulesNotationSupprimer(params: any = {}) { 
    return this.http.post(`/modules_notation/supprimer`); 
  }

  getModulesNotationCleModPeriodesNotationClePernCoefficient(params: any = {}) { 
    return this.http.get(`/modules_notation/${cle_mod}/periodes_notation/${cle_pern}/coefficient`); 
  }

  postModulesNotationCleModPeriodesNotationClePernCoefficient(params: any = {}) { 
    return this.http.post(`/modules_notation/${cle_mod}/periodes_notation/${cle_pern}/coefficient`); 
  }

  getModulesNotationClesModPeriodesNotationClesPernCoefficients(params: any = {}) { 
    return this.http.get(`/modules_notation/${cles_mod}/periodes_notation/${cles_pern}/coefficients`); 
  }

  getModulesNotationCleModPeriodesHorsCalendrierClePerhcCoefficient(params: any = {}) { 
    return this.http.get(`/modules_notation/${cle_mod}/periodes_hors_calendrier/${cle_perhc}/coefficient`); 
  }

  postModulesNotationCleModPeriodesHorsCalendrierClePerhcCoefficient(params: any = {}) { 
    return this.http.post(`/modules_notation/${cle_mod}/periodes_hors_calendrier/${cle_perhc}/coefficient`); 
  }

  getModulesNotationClesModPeriodesHorsCalendrierClesPerhcCoefficients(params: any = {}) { 
    return this.http.get(`/modules_notation/${cles_mod}/periodes_hors_calendrier/${cles_perhc}/coefficients`); 
  }
}
