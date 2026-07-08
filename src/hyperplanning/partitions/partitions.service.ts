import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class PartitionsService {
  constructor(private readonly http: HttpService) {}

  getPartitions(params: any = {}) { 
    return this.http.get(`/partitions`); 
  }

  postPartitions(params: any = {}) { 
    return this.http.post(`/partitions`); 
  }

  getPartitionsCle(params: any = {}) { 
    return this.http.get(`/partitions/${cle}`); 
  }

  postPartitionsCle(params: any = {}) { 
    return this.http.post(`/partitions/${cle}`); 
  }

  deletePartitionsCle(params: any = {}) { 
    return this.http.delete(`/partitions/${cle}`); 
  }

  postPartitionsSupprimer(params: any = {}) { 
    return this.http.post(`/partitions/supprimer`); 
  }
}
