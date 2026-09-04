import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-apostas-encerradas",
  imports: [CommonModule],
  template: `
    <div class="min-h-screen flex flex-col relative">
      <!-- Background split -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="h-1/2 bg-lotofacil-800"></div>
        <div class="h-1/2 bg-gray-100"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-8">
          <!-- Header -->
          <div class="text-center space-y-2">
            <h1 class="text-3xl font-bold text-lotofacil-600">
              Bolão da Mega da Virada
            </h1>
            <h2 class="text-lg font-semibold text-gray-600">PLT-IAA</h2>
          </div>

          <!-- Message -->
          <div class="text-center space-y-4">
            <div class="p-4 bg-red-50 rounded-xl border border-red-100">
                <h3 class="text-xl font-bold text-red-600 mb-2">Apostas Encerradas</h3>
                <p class="text-gray-600">
                    Não serão mais aceitas apostas para este bolão.
                </p>
            </div>
            <p class="text-sm text-gray-500">
                Boa sorte a todos os participantes!
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class ApostasEncerradas { }
