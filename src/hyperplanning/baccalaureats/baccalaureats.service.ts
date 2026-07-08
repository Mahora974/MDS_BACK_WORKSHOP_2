import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class BaccalaureatsService {
  constructor(private readonly http: HttpService) {}

  getBaccalaureats(params: any = {}) { 
    return this.http.get(`/baccalaureats`); 
  }

  getBaccalaureatsCode(params: any = {}) { 
    return this.http.get(`/baccalaureats/${code}`); 
  }
}
