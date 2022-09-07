import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() tareas: Array<any>;
  @Output() filtro = new EventEmitter<Array<any>>();
  estado: string = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  Filtrar(tipo: string) {
    switch (tipo) {
      case 'active':
        this.filtro.emit(this.tareas.filter(
          (element) => element.completo == false
        ));
        this.estado = 'active';
        break;
      case 'complete':
        this.filtro.emit(this.tareas.filter(
          (element) => element.completo == true
        ));
        this.estado = 'complete';
        break;
      default:
        this.filtro.emit(this.tareas);
        this.estado = 'all';
        break;
    }
  }
}
