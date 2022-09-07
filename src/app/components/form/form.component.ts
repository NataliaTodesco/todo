import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  error: string = '';
  task: string = '';
  @Output() agregar = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  agregarTarea() {
    if (this.task !== '') {
      this.agregar.emit(this.task)
      this.task = '';
      this.error = '';
    } else this.error = '*Complete el campo "add details"';
  }
}
