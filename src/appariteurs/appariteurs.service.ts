import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class AppariteursService {
  constructor(private readonly http: HttpService) {}

  getAppariteurs(params: any = {}) { 
    return this.http.get(`/appariteurs`); 
  }

  postAppariteurs(params: any = {}) { 
    return this.http.post(`/appariteurs`); 
  }

  getAppariteursCle(params: any = {}) { 
    return this.http.get(`/appariteurs/${cle}`); 
  }

  postAppariteursCle(params: any = {}) { 
    return this.http.post(`/appariteurs/${cle}`); 
  }

  deleteAppariteursCle(params: any = {}) { 
    return this.http.delete(`/appariteurs/${cle}`); 
  }

  postAppariteursSupprimer(params: any = {}) { 
    return this.http.post(`/appariteurs/supprimer`); 
  }

  getAppariteursCleAppFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/appariteurs/${cle_app}/familles/${cle_fam}/rubriques`); 
  }

  postAppariteursCleAppFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/appariteurs/${cle_app}/familles/${cle_fam}/rubriques`); 
  }
}
