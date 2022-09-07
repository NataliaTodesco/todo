import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {
  @Input() _tareas: Array<any>;
  @Output() marcar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  marcarCompleto(i: number){
    this.marcar.emit(i);
  }

  eliminarTarea(index: number) {
    this.eliminar.emit(index);
  }
}
