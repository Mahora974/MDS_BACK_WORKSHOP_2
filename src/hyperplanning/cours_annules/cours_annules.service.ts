import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Cours_annulesService {
  constructor(private readonly http: HttpService) {}

  getCoursAnnules(params: any = {}) { 
    return this.http.get(`/cours_annules`); 
  }

  postCoursAnnules(params: any = {}) { 
    return this.http.post(`/cours_annules`); 
  }

  getCoursAnnulesCle(params: any = {}) { 
    return this.http.get(`/cours_annules/${cle}`); 
  }

  postCoursAnnulesCle(params: any = {}) { 
    return this.http.post(`/cours_annules/${cle}`); 
  }

  deleteCoursAnnulesCle(params: any = {}) { 
    return this.http.delete(`/cours_annules/${cle}`); 
  }

  postCoursAnnulesSupprimer(params: any = {}) { 
    return this.http.post(`/cours_annules/supprimer`); 
  }

  getCoursAnnulesCleDetailSeancesPlacees(params: any = {}) { 
    return this.http.get(`/cours_annules/${cle}/detail_seances_placees`); 
  }
}
