import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//TODO:  COLOCAR regra do dia do sorteio e que o bilhete será entrege pra quem for presencial


@Component({
  selector: 'app-veja-regras',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-linear-to-b from-purple-700 to-purple-800 py-8 px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
          <button
            routerLink="/bem-vindo"
            class="inline-flex items-center gap-2 text-white hover:text-purple-100 transition-colors mb-6"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <span>Voltar</span>
          </button>
          <h1 class="text-4xl font-bold text-white mb-2">Regras do Bolão</h1>
          <p class="text-purple-100">Leia atentamente antes de participar</p>
        </div>

        <!-- Rules Card -->
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
          

          <div class="px-8 py-8 space-y-6">
            <!-- Rule 1 -->
            <div class="flex gap-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">❓ Como a gente joga?</h3>
                <ul class="list-none space-y-2 mt-2 text-gray-700">
                  <li class="ml-8 flex flex-row justify-start items-baseline">
                    <span class="p-1 w-2 h-2 mr-2 rounded-full bg-purple-700"></span>
                    <div>
                      <span class="font-bold">Aposta:</span> Cada participante terá 2 jogos de 7 números.
                    </div>
                </li>
                  <li class="ml-8 flex flex-row justify-start items-baseline">
                    <span class="p-1 w-2 h-2 mr-2 rounded-full bg-purple-700"></span>
                    <div>
                      <span class="font-bold">Seus números:</span> Você pode escolher seus 7 números ou deixar que o sistema da lotérica gere eles no automático (aquela Surpresinha básica!).
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Rule 2 -->
            <div class="flex gap-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">💰 Quanto custa e como pagar?</h3>
                <ul class="list-none space-y-2 mt-2 text-gray-700">
                  <li class="ml-8 flex flex-row justify-start items-baseline">
                    <span class="p-1 w-2 h-2 mr-2 rounded-full bg-purple-700"></span>
                    <div>
                      <span class="font-bold">Valor da Cota:</span> A participação custa <span class="font-bold">R$ 84,00</span> por pessoa (esse valor cobre o custo exato das suas duas apostas de 7 números).
                    </div>
                  </li>
                  <li class="ml-8 flex flex-row justify-start items-baseline">
                    <span class="p-1 w-2 h-2 mr-2 rounded-full bg-purple-700"></span>
                    <div>
                      <span class="font-bold">Prazo Final:</span> O pagamento deve ser feito antecipado, até o dia 16/dez
                    </div>
                  </li>
                  <li class="ml-8 flex flex-row justify-start items-baseline">
                    <span class="p-1 w-2 h-2 mr-2 rounded-full bg-purple-700"></span>
                    <div>
                      <span class="font-bold">Como Pagar:</span> Mande seu PIX de R$ 84,00 para o nosso Tesoureiro: [Jogean]. <span class="italic">Sem pagamento, sem jogo, ok?</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Rule 3 -->
            <div class="flex gap-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">🗓️ Datas Importantes</h3>
                <ul class="list-none space-y-2 mt-2 text-gray-700">
                  <li class="ml-8 flex flex-row justify-start items-baseline">
                    <span class="p-1 w-2 h-2 mr-2 rounded-full bg-purple-700"></span>
                    <div>
                      <span class="font-bold">Registro dos Jogos</span>: O Jogean vai registrar todas as apostas no dia 17/dez 
                    </div>
                  </li>
                  <li class="ml-8 flex flex-row justify-start items-baseline">
                    <span class="p-1 w-2 h-2 mr-2 rounded-full bg-purple-700"></span>
                    <div>
                    <span class="font-bold">Seu Comprovante</span>: A partir do dia 17/dez, você receberá seu bilhete referente a sua cota oficial da lotérica. Guarde bem o seu!
                    </div>
                  </li>

                </ul>
              </div>
            </div>

            <div>Mais informações no site <a href="https://loterias.caixa.gov.br/Paginas/Mega-Sena.aspx" class="text-blue-600" target="_blank">Loterias Caixa</a></div>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="mt-8">
          <button
            routerLink="/escolher-numeros"
            class="inline-flex items-center justify-center w-full bg-purple-600 text-white font-bold py-4 rounded-xl hover:bg-purple-700 transition-colors shadow-lg"
          >
            Escolher meus números
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class VejaRegras {

}
