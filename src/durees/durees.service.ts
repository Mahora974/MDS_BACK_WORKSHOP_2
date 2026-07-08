import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class DureesService {
  constructor(private readonly http: HttpService) {}

  getDureeDuree(params: any = {}) { 
    return this.http.get(`/duree/${duree}`); 
  }

  getDureeMinutesDureeEnMinutes(params: any = {}) { 
    return this.http.get(`/duree/minutes/${duree_en_minutes}`); 
  }

  getDureeHeuresNombreHeuresMinutesNombreMinutes(params: any = {}) { 
    return this.http.get(`/duree/heures/${nombre_heures}/minutes/${nombre_minutes}`); 
  }
}
