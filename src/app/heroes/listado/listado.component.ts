import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Capitan América'];
  borrado: string = '';

  borrarHeroe() {
    this.borrado = this.heroes.pop() || '';
  }
}
