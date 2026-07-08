import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class VersionService {
  constructor(private readonly http: HttpService) {}

  getVersion(params: any = {}) { 
    return this.http.get(`/version`); 
  }
}
