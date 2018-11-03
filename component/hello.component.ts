import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<span>Hello {{name}}!</span>`,
  styles: [`span{ font-family: Lato;font-size: x-large; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
