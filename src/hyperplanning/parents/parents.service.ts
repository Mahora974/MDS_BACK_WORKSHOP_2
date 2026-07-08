import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class ParentsService {
  constructor(private readonly http: HttpService) {}

  getParents(params: any = {}) { 
    return this.http.get(`/parents`); 
  }

  postParents(params: any = {}) { 
    return this.http.post(`/parents`); 
  }

  getParentsCle(params: any = {}) { 
    return this.http.get(`/parents/${cle}`); 
  }

  postParentsCle(params: any = {}) { 
    return this.http.post(`/parents/${cle}`); 
  }

  deleteParentsCle(params: any = {}) { 
    return this.http.delete(`/parents/${cle}`); 
  }

  postParentsSupprimer(params: any = {}) { 
    return this.http.post(`/parents/supprimer`); 
  }
}
