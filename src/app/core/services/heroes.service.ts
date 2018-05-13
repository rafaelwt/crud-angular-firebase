import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Heroe } from '../models/heroe.model';
import { map } from 'rxjs/operators/map';

@Injectable()
export class HeroesService {

  constructor(private apiService: ApiService) { }
 //  api_url: 'https://heroesapp-8c52a.firebaseio.com/heroes.json'
//             https://heroesapp-8c52a.firebaseio.com/heroes/-LBsR4puQwQ18cMtIi8Q
 // save(heroe): Observable<Heroe> { Si se va devolver un objetos del mismo tipo que se inserto
 save(heroe, id: string): Observable<any> { // debido a que se usa firebase se devuele un tipo any
    // If we're updating an existing hero
   // if (heroe.key$) {
     console.log('save service', heroe, id);
    if (id) {
      return this.apiService.put(`/heroes/${id}.json`, heroe)
        .pipe(map(data => data));

    // Otherwise, create a new hero
    } else {
     // return this.apiService.post('', {heroe: heroe}) si va enviar un objeto para una web api o rest
     return this.apiService.post('/heroes.json', heroe) // solo si es en firebase se manda directamente el objeto
      // .pipe(map(data => data.heroe));
      .pipe(map(data => data));
    }
  }

  getHeroe(key$: string): Observable<any> {
    return this.apiService.get(`/heroes/${key$}.json` )
      .pipe(map((data: {hero: Heroe}) => data));
  }

  getHeroes(): Observable<any> {
    return this.apiService.get(`/heroes.json` )
      .pipe(map((data => data)));
  }
  getDelete(key$: string) {
    return this.apiService.delete(`/heroes/${ key$ }.json` )
    .pipe(map((data: {hero: Heroe}) => data));
  }



}
