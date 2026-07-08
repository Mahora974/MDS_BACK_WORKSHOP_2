import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactsService {
  constructor(private readonly http: HttpService) {}

  getContacts(params: any = {}) { 
    return this.http.get(`/contacts`); 
  }

  postContacts(params: any = {}) { 
    return this.http.post(`/contacts`); 
  }

  getContactsCle(params: any = {}) { 
    return this.http.get(`/contacts/${cle}`); 
  }

  postContactsCle(params: any = {}) { 
    return this.http.post(`/contacts/${cle}`); 
  }

  deleteContactsCle(params: any = {}) { 
    return this.http.delete(`/contacts/${cle}`); 
  }

  postContactsSupprimer(params: any = {}) { 
    return this.http.post(`/contacts/supprimer`); 
  }

  getContactsCleContFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/contacts/${cle_cont}/familles/${cle_fam}/rubriques`); 
  }

  postContactsCleContFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/contacts/${cle_cont}/familles/${cle_fam}/rubriques`); 
  }
}
