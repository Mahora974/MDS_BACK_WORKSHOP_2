import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class RetardsService {
  constructor(private readonly http: HttpService) {}

  getRetards(params: any = {}) { 
    return this.http.get(`/retards`); 
  }

  postRetards(params: any = {}) { 
    return this.http.post(`/retards`); 
  }

  getRetardsCle(params: any = {}) { 
    return this.http.get(`/retards/${cle}`); 
  }

  deleteRetardsCle(params: any = {}) { 
    return this.http.delete(`/retards/${cle}`); 
  }

  postRetardsSupprimer(params: any = {}) { 
    return this.http.post(`/retards/supprimer`); 
  }
}
