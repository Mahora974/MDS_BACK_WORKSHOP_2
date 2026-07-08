import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class DepartementsService {
  constructor(private readonly http: HttpService) {}

  getDepartements(params: any = {}) { 
    return this.http.get(`/departements`); 
  }

  getDepartementsCode(params: any = {}) { 
    return this.http.get(`/departements/${code}`); 
  }
}
