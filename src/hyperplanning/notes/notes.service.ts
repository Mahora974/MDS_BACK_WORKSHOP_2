import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class NotesService {
  constructor(private readonly http: HttpService) {}

  getNotes(params: any = {}) { 
    return this.http.get(`/notes`); 
  }
}
