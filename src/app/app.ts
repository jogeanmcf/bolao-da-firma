import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BemVindo } from "./features/bem-vindo/bem-vindo";
import { VejaRegras } from './features/veja-regras/veja-regras';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: 'app.html',
  template: `<router-outlet />`,
})
export class App {
}
