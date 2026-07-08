import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class SemainesService {
  constructor(private readonly http: HttpService) {}

  getSemaines(params: any = {}) { 
    return this.http.get(`/semaines`); 
  }

  getSemainesNumeroSemaine(params: any = {}) { 
    return this.http.get(`/semaines/${numero_semaine}`); 
  }
}
