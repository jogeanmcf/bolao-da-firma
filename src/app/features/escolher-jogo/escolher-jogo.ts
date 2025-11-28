import { Component } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { StateService } from "../../core/services/state.service";
import { GoogleSheetsService } from "../../core/services/google-sheets.service";

@Component({
  selector: 'app-escolher-jogo',
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-linear-to-b from-green-700 to-green-800 px-4 py-8 relative">
      @if(isLoading) {
        <div class="absolute inset-0 z-50 bg-black/20 cursor-wait"></div>
      }
      <div class="max-w-4xl mx-auto mb-8">
        <div>
          <button 
            routerLink="/regras"
            class="inline-flex hover:text-green-200 gap-2 text-white"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <span>Veja as regras</span>
          </button>
          <h1 class="text-4xl font-bold text-white">Escolha seus números</h1>
        </div>
      </div>


      <div class="flex flex-col gab-4 px-4 py-8 gap-4 bg-white max-w-4xl mx-auto rounded-xl ">
            <!-- Jogo 1 -->
            <div class="p-4 bg-linear-90 from-green-50 to-white rounded-xl border-2 border-green-600 shadow-lg">
              <h2 class="text-green-600 font-bold text-2xl">Jogo #1</h2>
              <div class="flex flex-col gap-4">
                <div class="inline-flex gap-2">
                  <input type="radio" id="jogo-1-aleatorio" (click)="toggleChoicesOne(true)"
                    name="jogo1"
                    value="Jogo aleatório"
                  />
                  <label for="jogo-1-aleatorio">Pode ser surpresinha</label>
                </div>
                <div class="inline-flex gap-2">
                  <input type="radio" id="jogo-1-escolher" (click)="toggleChoicesOne(false)"
                    name="jogo1"
                    value="Quero escolher meus númereos"
                  />
                  <label for="jogo-1-escolher">Quero escolher meus númereos</label>
                </div>
              </div>
              <div class="mx-auto mt-4">
              @if (!ticketOneIsRandom && ticketOneIsRandom!= null) {
                <div class="flex flex-wrap justify-center gap-2">
                  @for(number of numbers; track number){
                    <button
                      (click)="getChoicesOne(number)"
                      [attr.aria-disabled]="choicesOne.length >= 7 && !choicesOne.includes(number)"
                      [class.opacity-50]="choicesOne.length >= 7 && !choicesOne.includes(number)"
                      [class]="choicesOne.includes(number) ? 'bg-green-600 text-white' : 'bg-green-200 text-green-600'"
                      class="flex h-10 w-10 items-center justify-center rounded-full transition"
                    >
                      <span class="font-bold">{{number}}</span>
                    </button>
                  }
                </div>

              }
              </div>
            
            </div>

            <!-- Jogo 2 -->
            <div class="p-4 bg-linear-90 from-green-50 to-white rounded-xl border-2 border-green-600 shadow-lg">
              <h2 class="text-green-600 font-bold text-2xl">Jogo #2</h2>
              <div class="flex flex-col gap-4">
                <div class="inline-flex gap-2">
                  <input type="radio" id="jogo-2-aleatorio" (click)="toggleChoicesTwo(true)"
                    name="jogo2"
                    value="Jogo aleatório"
                  />
                  <label for="jogo-2-aleatorio">Pode ser surpresinha</label>
                </div>
                <div class="inline-flex gap-2">
                  <input type="radio" id="jogo-2-escolher" (click)="toggleChoicesTwo(false)"
                    name="jogo2"
                    value="Quero escolher meus númereos"
                  />
                  <label for="jogo-2-escolher">Quero escolher meus númereos</label>
                </div>
              </div>
              <div class="mx-auto mt-4">
              @if (!ticketTwoIsRandom && ticketTwoIsRandom != null) {
                <div class="flex flex-wrap justify-center gap-2">
                  @for(number of numbers; track number){
                    <button
                      (click)="getChoicesTwo(number)"
                      [attr.aria-disabled]="choicesTwo.length >= 7 && !choicesTwo.includes(number)"
                      [class.opacity-50]="choicesTwo.length >= 7 && !choicesTwo.includes(number)"
                      [class]="choicesTwo.includes(number) ? 'bg-green-600 text-white' : 'bg-green-200 text-green-600'"
                      class="flex h-10 w-10 items-center justify-center rounded-full transition"
                    >
                      <span class="font-bold">{{number}}</span>
                    </button>
                  }
                </div>

              }
              </div>
            
            </div>
      </div>
      <!-- CTA Button -->
        <div class="max-w-4xl mx-auto mt-8">
          <button
            (click)="submit()"
            [disabled]="
            isLoading ||
            !(
              (ticketOneIsRandom || choicesOne.length == 7) && 
              (ticketTwoIsRandom || choicesTwo.length == 7)
            )"
            class="inline-flex items-center justify-center w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            [class.opacity-50]="!(
              (ticketOneIsRandom || choicesOne.length == 7) && 
              (ticketTwoIsRandom || choicesTwo.length == 7)
            )"
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
  numbers: number[] = Array.from({ length: 60 }, (_, i) => i + 1);

  ticketOneIsRandom: boolean | null = null;
  choicesOne: number[] = []

  toggleChoicesOne(isRandom: boolean): void {
    this.choicesOne = []
    this.ticketOneIsRandom = isRandom
  }

  getChoicesOne(number: number): void {
    if (!this.choicesOne.includes(number) && this.choicesOne.length >= 7) {
      return;
    }
    if (this.choicesOne.includes(number)) {
      this.choicesOne = this.choicesOne.filter(d => d != number)
    } else {
      this.choicesOne.push(number)
    }
  }

  ticketTwoIsRandom: boolean | null = null;
  choicesTwo: number[] = []

  toggleChoicesTwo(isRandom: boolean): void {
    this.choicesTwo = []
    this.ticketTwoIsRandom = isRandom
  }

  getChoicesTwo(number: number): void {
    if (!this.choicesTwo.includes(number) && this.choicesTwo.length >= 7) {
      return;
    }
    if (this.choicesTwo.includes(number)) {
      this.choicesTwo = this.choicesTwo.filter(d => d != number)
    } else {
      this.choicesTwo.push(number)
    }
  }
  constructor(
    private stateService: StateService,
    private googleSheetsService: GoogleSheetsService,
    private router: Router
  ) { }

  isLoading = false;

  submit() {
    this.isLoading = true;
    const formatGame = (isRandom: boolean | null, choices: number[]) => {
      const result: any = {};
      // Sort choices to ensure they are in order, if desired. 
      // The user example didn't explicitly say sorted, but usually lottery numbers are.
      // However, to keep it simple and stick to the request, I'll just map them.
      // Actually, let's sort them for better UX/consistency if they aren't already.
      // The current logic pushes them as clicked.
      const sortedChoices = [...choices].sort((a, b) => a - b);

      for (let i = 1; i <= 7; i++) {
        // If random, value is 0.
        // If not random, take the choice. If choice doesn't exist (shouldn't happen if validated), use 0.
        result[`dezena${i}`] = (isRandom) ? 0 : (sortedChoices[i - 1] || 0);
      }
      return result;
    };

    const payload = {
      nome: this.stateService.getUsername(),
      jogo1: formatGame(this.ticketOneIsRandom, this.choicesOne),
      jogo2: formatGame(this.ticketTwoIsRandom, this.choicesTwo)
    };

    console.log('Submitting data:', payload);

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
