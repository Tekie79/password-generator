import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  letters = false;
  numbers = false;
  symbols = false;
  password = '';

  onGetLength = (event: any) => {
    this.length = +event.target.value;
  };

  onUseLetters = () => {
    this.letters = !this.letters;
  };

  onUseNumbers = () => {
    this.numbers = !this.numbers;
  };
  onUseSymbols = () => {
    this.symbols = !this.symbols;
  };

  onButtonClick = () => {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%&*+';
    let validChar = '';
    if (this.letters) {
      validChar += letters;
    }
    if (this.numbers) {
      validChar += numbers;
    }
    if (this.symbols) {
      validChar += symbols;
    }

    let generatedPassowrd = '';

    for (let i = 0; i < this.length; i++) {
      const randomIndex = Math.floor(Math.random() * validChar.length);
      generatedPassowrd += validChar[randomIndex];
    }
    this.password = generatedPassowrd;
  };
}
