import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Periodes_hors_calendrierService {
  constructor(private readonly http: HttpService) {}

  getPeriodesHorsCalendrier(params: any = {}) { 
    return this.http.get(`/periodes_hors_calendrier`); 
  }

  postPeriodesHorsCalendrier(params: any = {}) { 
    return this.http.post(`/periodes_hors_calendrier`); 
  }

  getPeriodesHorsCalendrierCle(params: any = {}) { 
    return this.http.get(`/periodes_hors_calendrier/${cle}`); 
  }

  postPeriodesHorsCalendrierCle(params: any = {}) { 
    return this.http.post(`/periodes_hors_calendrier/${cle}`); 
  }

  deletePeriodesHorsCalendrierCle(params: any = {}) { 
    return this.http.delete(`/periodes_hors_calendrier/${cle}`); 
  }

  postPeriodesHorsCalendrierSupprimer(params: any = {}) { 
    return this.http.post(`/periodes_hors_calendrier/supprimer`); 
  }

  getPeriodesHorsCalendrierClePeriodeFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/periodes_hors_calendrier/${cle_periode}/familles/${cle_fam}/rubriques`); 
  }

  postPeriodesHorsCalendrierClePeriodeFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/periodes_hors_calendrier/${cle_periode}/familles/${cle_fam}/rubriques`); 
  }
}
