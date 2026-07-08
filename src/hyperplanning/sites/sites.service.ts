import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class SitesService {
  constructor(private readonly http: HttpService) {}

  getSites(params: any = {}) { 
    return this.http.get(`/sites`); 
  }

  getSitesNom(params: any = {}) { 
    return this.http.get(`/sites/${nom}`); 
  }

  postSitesNom(params: any = {}) { 
    return this.http.post(`/sites/${nom}`); 
  }
}
