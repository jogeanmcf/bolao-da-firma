import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { StateService } from "../../core/services/state.service";

@Component({
  selector: "app-bem-vindo",
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen flex flex-col relative">
      <!-- Background split -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="h-1/2 bg-green-800"></div>
        <div class="h-1/2 bg-gray-100"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-8">
          <!-- Header -->
          <div class="text-center space-y-2">
            <h1 class="text-3xl font-bold text-green-600">
              Bolão da Mega da Virada
            </h1>
            <h2 class="text-lg font-semibold text-gray-600">PLT-IAA</h2>
          </div>

          <!-- Form -->
          <form class="space-y-6" (ngSubmit)="onSubmit()">
            <!-- Username Input -->
            <div class="space-y-2">
              <label for="username" class="block text-sm font-medium text-gray-700">
                Quero participar
              </label>
              <input
                type="text"
                id="username"
                name="username"
                [(ngModel)]="username"
                placeholder="Digite seu nome ou apelido"
                class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 placeholder-gray-400 focus:border-green-600 focus:outline-none transition-colors"
              />
            </div>
            <button
              [disabled]="this.username == null || this.username == ''"
              [class.opacity-70]="this.username== ''"
              class="inline-flex items-center justify-center w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition-colors shadow-lg"
              (click)="goToRules()"
            >
              <span>Veja as regras</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </form>
          <p class="text-xs text-center text-gray-500">
            Ao participar, você concorda com as regras do bolão
          </p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class BemVindo {
  username: string = '';

  constructor(
    private stateService: StateService,
    private router: Router
  ) { }

  goToRules() {
    this.stateService.setUsername(this.username);
    this.router.navigate(['/regras']);
  }

  onSubmit() {
    if (this.username.trim()) {
      this.stateService.setUsername(this.username);
    }
  }
}
