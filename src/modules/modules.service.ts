import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class ModulesService {
  constructor(private readonly http: HttpService) {}

  getModules(params: any = {}) { 
    return this.http.get(`/modules`); 
  }

  postModules(params: any = {}) { 
    return this.http.post(`/modules`); 
  }

  getModulesCle(params: any = {}) { 
    return this.http.get(`/modules/${cle}`); 
  }

  postModulesCle(params: any = {}) { 
    return this.http.post(`/modules/${cle}`); 
  }

  deleteModulesCle(params: any = {}) { 
    return this.http.delete(`/modules/${cle}`); 
  }

  postModulesSupprimer(params: any = {}) { 
    return this.http.post(`/modules/supprimer`); 
  }

  getModulesCleModFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/modules/${cle_mod}/familles/${cle_fam}/rubriques`); 
  }

  postModulesCleModFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/modules/${cle_mod}/familles/${cle_fam}/rubriques`); 
  }
}
