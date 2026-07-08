import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class StagesService {
  constructor(private readonly http: HttpService) {}

  getStages(params: any = {}) { 
    return this.http.get(`/stages`); 
  }

  postStages(params: any = {}) { 
    return this.http.post(`/stages`); 
  }

  getStagesCle(params: any = {}) { 
    return this.http.get(`/stages/${cle}`); 
  }

  postStagesCle(params: any = {}) { 
    return this.http.post(`/stages/${cle}`); 
  }

  deleteStagesCle(params: any = {}) { 
    return this.http.delete(`/stages/${cle}`); 
  }

  postStagesSupprimer(params: any = {}) { 
    return this.http.post(`/stages/supprimer`); 
  }

  getStagesCleStaFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/stages/${cle_sta}/familles/${cle_fam}/rubriques`); 
  }

  postStagesCleStaFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/stages/${cle_sta}/familles/${cle_fam}/rubriques`); 
  }
}
