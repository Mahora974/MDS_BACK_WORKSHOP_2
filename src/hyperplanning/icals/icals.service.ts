import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class IcalsService {
  constructor(private readonly http: HttpService) {}

  postIcalMatieres(params: any = {}) { 
    return this.http.post(`/ical/matieres`); 
  }

  postIcalMatieresCle(params: any = {}) { 
    return this.http.post(`/ical/matieres/${cle}`); 
  }

  postIcalEnseignants(params: any = {}) { 
    return this.http.post(`/ical/enseignants`); 
  }

  postIcalEnseignantsCle(params: any = {}) { 
    return this.http.post(`/ical/enseignants/${cle}`); 
  }

  postIcalEtudiants(params: any = {}) { 
    return this.http.post(`/ical/etudiants`); 
  }

  postIcalEtudiantsCle(params: any = {}) { 
    return this.http.post(`/ical/etudiants/${cle}`); 
  }

  postIcalPromotions(params: any = {}) { 
    return this.http.post(`/ical/promotions`); 
  }

  postIcalPromotionsCle(params: any = {}) { 
    return this.http.post(`/ical/promotions/${cle}`); 
  }

  postIcalTdoptions(params: any = {}) { 
    return this.http.post(`/ical/tdoptions`); 
  }

  postIcalTdoptionsCle(params: any = {}) { 
    return this.http.post(`/ical/tdoptions/${cle}`); 
  }

  postIcalSalles(params: any = {}) { 
    return this.http.post(`/ical/salles`); 
  }

  postIcalSallesCle(params: any = {}) { 
    return this.http.post(`/ical/salles/${cle}`); 
  }
}
