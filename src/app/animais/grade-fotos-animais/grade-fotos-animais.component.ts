import { AnimaisModule } from './../animais.module';
import { Animal, Animais } from './../animais';
import { Component, Input, OnInit } from '@angular/core';
import { AnimalComponent } from '../animal/animal.component';

@Component({
  selector: 'app-grade-fotos-animais',
  templateUrl: './grade-fotos-animais.component.html',
  styleUrls: ['./grade-fotos-animais.component.css']
})
export class GradeFotosAnimaisComponent implements OnInit {

  @Input() animais !: Animais;
  @Input() animal !: Animal

  constructor() { }

  ngOnInit(): void {
  }

}
