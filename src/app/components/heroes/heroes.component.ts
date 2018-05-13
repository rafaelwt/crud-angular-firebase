import { Component, OnInit } from '@angular/core';
import { HeroesService} from '../../core/services/heroes.service';
import { Heroe } from '../../core/models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: any[];
  loading = true;
  constructor( private heroeService: HeroesService) {

      this.heroes =  [];

      this.heroeService.getHeroes().subscribe(x => {

            if (x) {  // para cuando este vacio no de error
              console.log(this.heroes);
              setTimeout( () => {
                this.heroes = Object.keys(x).map((a, i) => {
                  return { key$: a, nombre: x[a].nombre , casa: x[a].casa, bio: x[a].bio};
                });
                this.loading = false;
                }, 3000);
            }
           // this.heroes = x ;
           // this.loading = false;

      });
   }

  ngOnInit() {
  }
  borrarHeroe(key$: string, i: number) {
    this.heroeService.getDelete (key$).subscribe(x => {
      if (x) {
        console.error(x);
      } else {
        // delete this.heroes[key$];
        this.heroes.splice(i, 1);
      }
    }); // retorna el null
  }

}
