import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Heroe } from '../../core/models/heroe.model';
import { HeroesService } from '../../core/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  /* heroe: Heroe = {
    nombre: '',
    casa: 'Marvel',
    bio: ''
  }; */
   heroe: Heroe = {} as Heroe;
   heroeForm: FormGroup;
   errors: Object = {};
   isSubmitting = false;
   id: string;
   nuevo = false;
  constructor(  private hereoService: HeroesService,
                private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
  ) {
    this.heroeForm = this.fb.group({
      nombre: '',
      casa: 'Marvel',
      bio: ''
    });

  }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
       if (data.id) {
         this.id = data.id === 'nuevo' ? null : data.id ;
        // this.heroe.key$ = this.id;
         console.log(this.id);
         if (this.id !== 'nuevo' && this.id !== null ) {
          this.hereoService.getHeroe( this.id).subscribe( x => {
            console.log(x);
            this.heroe = x;
            // setea el heroe al formualrio
             this.heroeForm.setValue(this.heroe);
          });
         }
        // this.heroe = data;
        // this.heroeForm.patchValue(data.heroe);
       }
     });

  }
  guardar() {
    this.updateHeroe(this.heroeForm.value);
    this.hereoService.save(this.heroe, this.id).subscribe(
      data => {
            // this.router.navigateByUrl('/heroe/' + data.name);
           console.log('data service', data);
            // Verifica si existe el data ya que al hacer un put no devuelve el id si no el objeto completo solo para firebase
            if (data.name) {
              console.log('navegando');
              this.router.navigate(['/heroe', data.name]);
            }
          },
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  updateHeroe(values: Object) {
    Object.assign(this.heroe, values);
  }
  agregarNuevoHeroe() {
    this.router.navigate(['/heroe', 'nuevo']);
    this.heroeForm.reset({
      casa: 'Marvel'
    });


  }


}
