import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class Baccalaureat_specialitesService {
  constructor(private readonly http: HttpService) {}

  getBaccalaureatSpecialites(params: any = {}) { 
    return this.http.get(`/baccalaureat_specialites`); 
  }

  getBaccalaureatSpecialitesCode(params: any = {}) { 
    return this.http.get(`/baccalaureat_specialites/${code}`); 
  }
}
