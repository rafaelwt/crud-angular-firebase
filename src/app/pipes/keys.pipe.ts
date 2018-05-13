import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    const llaves = [];
    // tslint:disable-next-line:forin
    for (const llave in value) {
      console.log(llave);
    }
    return llaves;
  }

}
