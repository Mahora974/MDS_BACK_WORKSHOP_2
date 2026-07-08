import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class AbsencesService {
  constructor(private readonly http: HttpService) {}

  getAbsences(params: any = {}) { 
    return this.http.get(`/absences`); 
  }

  getAbsencesCle(params: any = {}) { 
    return this.http.get(`/absences/${cle}`); 
  }

  getAbsencesCleHeuresManquees(params: any = {}) { 
    return this.http.get(`/absences/${cle}/heures_manquees`); 
  }

  postAbsencesAjouter(params: any = {}) { 
    return this.http.post(`/absences/ajouter`); 
  }

  postAbsencesEnlever(params: any = {}) { 
    return this.http.post(`/absences/enlever`); 
  }
}
