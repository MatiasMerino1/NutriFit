import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class IMCPage {

  weight!: number;
  height!: number;
  imc!: number;

  constructor() { }

  calculateIMC() {
    if (this.weight && this.height) {
      let heightInMeters = this.height / 100;
      this.imc = this.weight / (heightInMeters * heightInMeters);
    }
  }
}
