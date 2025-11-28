import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  imports: [],
  template: `
    <div class="min-h-screen flex flex-col z-0">
      <div class="flex-1 bg-green-600"></div>
      <div class="flex-1 bg-gray-100"></div>
    </div>
  `
})
export class Background {

}
