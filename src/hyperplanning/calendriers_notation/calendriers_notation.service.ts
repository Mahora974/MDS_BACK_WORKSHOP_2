import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Calendriers_notationService {
  constructor(private readonly http: HttpService) {}

  getCalendriersNotation(params: any = {}) { 
    return this.http.get(`/calendriers_notation`); 
  }

  postCalendriersNotation(params: any = {}) { 
    return this.http.post(`/calendriers_notation`); 
  }

  getCalendriersNotationCle(params: any = {}) { 
    return this.http.get(`/calendriers_notation/${cle}`); 
  }

  postCalendriersNotationCle(params: any = {}) { 
    return this.http.post(`/calendriers_notation/${cle}`); 
  }

  deleteCalendriersNotationCle(params: any = {}) { 
    return this.http.delete(`/calendriers_notation/${cle}`); 
  }

  postCalendriersNotationSupprimer(params: any = {}) { 
    return this.http.post(`/calendriers_notation/supprimer`); 
  }

  getCalendriersNotationCleCalendrierFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/calendriers_notation/${cle_calendrier}/familles/${cle_fam}/rubriques`); 
  }

  postCalendriersNotationCleCalendrierFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/calendriers_notation/${cle_calendrier}/familles/${cle_fam}/rubriques`); 
  }
}
