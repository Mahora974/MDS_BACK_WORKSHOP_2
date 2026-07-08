import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class CoursService {
  constructor(private readonly http: HttpService) {}

  getCours(params: any = {}) { 
    return this.http.get(`/cours`); 
  }

  postCours(params: any = {}) { 
    return this.http.post(`/cours`); 
  }

  getCoursCle(params: any = {}) { 
    return this.http.get(`/cours/${cle}`); 
  }

  postCoursCle(params: any = {}) { 
    return this.http.post(`/cours/${cle}`); 
  }

  deleteCoursCle(params: any = {}) { 
    return this.http.delete(`/cours/${cle}`); 
  }

  postCoursSupprimer(params: any = {}) { 
    return this.http.post(`/cours/supprimer`); 
  }

  getCoursCleCout(params: any = {}) { 
    return this.http.get(`/cours/${cle}/cout`); 
  }

  getCoursCout(params: any = {}) { 
    return this.http.get(`/cours/cout`); 
  }

  getCoursCleSite(params: any = {}) { 
    return this.http.get(`/cours/${cle}/site`); 
  }

  postCoursCleSite(params: any = {}) { 
    return this.http.post(`/cours/${cle}/site`); 
  }

  getCoursSite(params: any = {}) { 
    return this.http.get(`/cours/site`); 
  }

  getCoursCleContenus(params: any = {}) { 
    return this.http.get(`/cours/${cle}/contenus`); 
  }

  postCoursCleContenus(params: any = {}) { 
    return this.http.post(`/cours/${cle}/contenus`); 
  }

  getCoursCleAppelTermine(params: any = {}) { 
    return this.http.get(`/cours/${cle}/appel_termine`); 
  }

  postCoursCleAppelTermine(params: any = {}) { 
    return this.http.post(`/cours/${cle}/appel_termine`); 
  }

  getCoursCleDetailSeancesPlacees(params: any = {}) { 
    return this.http.get(`/cours/${cle}/detail_seances_placees`); 
  }

  getCoursDetailSeancesPlacees(params: any = {}) { 
    return this.http.get(`/cours/detail_seances_placees`); 
  }

  getCoursCleCoursFamillesCleFamRubriques(params: any = {}) { 
    return this.http.get(`/cours/${cle_cours}/familles/${cle_fam}/rubriques`); 
  }

  postCoursCleCoursFamillesCleFamRubriques(params: any = {}) { 
    return this.http.post(`/cours/${cle_cours}/familles/${cle_fam}/rubriques`); 
  }
}
