import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tareas: Array<any> = [];
  _tareas: Array<any> = [];

  agregarTarea(tarea: string) {
      this.tareas.push({
        tarea: tarea,
        completo: false,
      });
      this._tareas = this.tareas;
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
    this._tareas = this.tareas;
  }

  marcarCompleto(index: number) {
    if (this.tareas[index].completo) this.tareas[index].completo = false;
    else this.tareas[index].completo = true;

    this._tareas = this.tareas;
  }

  eliminarTodo() {
    this.tareas = [];
    this._tareas = [];
  }

  Actualizar(array: Array<any>) {
    this._tareas = array;
  }
}
