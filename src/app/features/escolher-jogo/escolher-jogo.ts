import { Component } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { StateService } from "../../core/services/state.service";
import { GoogleSheetsService } from "../../core/services/google-sheets.service";

@Component({
  selector: 'app-escolher-jogo',
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-linear-to-b from-quina-700 to-quina-800 px-4 py-8 relative">
      @if(isLoading) {
        <div class="absolute inset-0 z-50 bg-black/20 cursor-wait"></div>
      }
      <div class="max-w-4xl mx-auto mb-8">
        <div>
          <button 
            routerLink="/regras"
            class="inline-flex hover:text-quina-200 gap-2 text-white"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <span>Veja as regras</span>
          </button>
          <h1 class="text-4xl font-bold text-white">Escolha seus números</h1>
        </div>
      </div>


      <div class="flex flex-col gap-4 p-6 bg-white max-w-4xl mx-auto rounded-2xl shadow-xl">
        <h2 class="text-xl font-bold text-gray-800 mb-2">Como deseja jogar?</h2>
        
        <!-- Opção 1: Surpresinha -->
        <label 
          class="flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer select-none"
          [class.border-quina-600]="wannaChooseNumbers === false"
          [class.bg-quina-50]="wannaChooseNumbers === false"
          [class.border-gray-200]="wannaChooseNumbers !== false"
          [class.hover:border-quina-300]="wannaChooseNumbers !== false"
        >
          <input 
            type="radio" 
            name="wannaChooseNumbers"
            [checked]="wannaChooseNumbers === false"
            (change)="toggleWannaChooseNumbers(false)"
            class="sr-only"
          />
          <!-- Radio Indicator -->
          <div class="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0"
               [class.border-quina-600]="wannaChooseNumbers === false"
               [class.border-gray-300]="wannaChooseNumbers !== false">
            <div class="w-3 h-3 rounded-full bg-quina-600 transition-all transform scale-0"
                 [class.scale-100]="wannaChooseNumbers === false"></div>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-gray-900 text-lg">Pode ser surpresinha</span>
          </div>
        </label>

        <!-- Opção 2: Escolher Números -->
        <label 
          class="flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer select-none"
          [class.border-quina-600]="wannaChooseNumbers === true"
          [class.bg-quina-50]="wannaChooseNumbers === true"
          [class.border-gray-200]="wannaChooseNumbers !== true"
          [class.hover:border-quina-300]="wannaChooseNumbers !== true"
        >
          <input 
            type="radio" 
            name="wannaChooseNumbers"
            [checked]="wannaChooseNumbers === true"
            (change)="toggleWannaChooseNumbers(true)"
            class="sr-only"
          />
          <!-- Radio Indicator -->
          <div class="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0"
               [class.border-quina-600]="wannaChooseNumbers === true"
               [class.border-gray-300]="wannaChooseNumbers !== true">
            <div class="w-3 h-3 rounded-full bg-quina-600 transition-all transform scale-0"
                 [class.scale-100]="wannaChooseNumbers === true"></div>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-gray-900 text-lg">Quero escolher os números</span>
            @if(wannaChooseNumbers){
              <span class="text-sm text-gray-500">⚠️ Até o dia do registro das apostas procure o Jogean para informar seus números da sorte, isso deve ser feito até o dia 23/jun.</span>
            }
          </div>
        </label>
      </div>

      <!-- CTA Button -->
      <div class="max-w-4xl mx-auto mt-8">
        <button
          [disabled]="isLoading || wannaChooseNumbers === null"
          (click)="submit()"
          class="inline-flex items-center justify-center w-full bg-quina-600 text-white font-bold py-4 rounded-xl hover:bg-quina-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          @if(isLoading) {
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processando...
          } @else {
            Fazer pagamento
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          }
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class EscolherJogo {
  wannaChooseNumbers: boolean | null = null;
  constructor(
    private stateService: StateService,
    private googleSheetsService: GoogleSheetsService,
    private router: Router
  ) { }

  isLoading = false;
  toggleWannaChooseNumbers(event: boolean) {
    this.wannaChooseNumbers = event;
  }
  submit() {
    this.isLoading = true;

    const payload = {
      nome: this.stateService.getUsername(),
      wannaChooseNumbers: this.wannaChooseNumbers,
    };

    this.googleSheetsService.submitEntry(payload).subscribe({
      next: (response) => {
        console.log('Success!', response);
        this.isLoading = false;
        this.router.navigate(['/finalizar']);
      },
      error: (error) => {
        console.error('Error!', error);
        this.isLoading = false;
        alert('Ocorreu um erro ao enviar os dados. Tente novamente.');
      }
    });
  }
}
