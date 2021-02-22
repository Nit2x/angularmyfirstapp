import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h2>Hello My Friend {{name}}!</h2>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
