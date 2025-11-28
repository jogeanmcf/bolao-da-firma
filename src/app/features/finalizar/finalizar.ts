
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-finalizar',
  standalone: true,
  imports: [],
  template: `
    <div class="min-h-screen bg-linear-to-b from-green-700 to-green-800 p-6 flex items-center">
      <div class="p-8 flex flex-col gap-4 max-w-3xl w-full mx-auto bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden">
        <h1 class="text-2xl font-bold text-green-700">É hora do PIX</h1>
        <p class="text-gray-600">Agora é só fazer o PIX e contar com a sorte! 🍀</p>
        <p class="text-md text-gray-500 mt-2 text-center">Valor: <span class="font-medium text-gray-700">R$ 84,00</span></p>
        <div class="flex flex-col gap-6 justify-around items-center md:flex-row">
          <div class="flex flex-col items-center md:items-start gap-4">
            

            <img src="assets/pix-106.svg" alt="PIX" class="w-32 h-32"/>

            <div class="mt-2 flex gap-3">
              <button
                type="button"
                (click)="copyCode()"
                aria-live="polite"
                class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg shadow transition"
              >
              @if(copied){
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="font-semibold">Copiado!</span>
              } @else {
                 <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16h8a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 20H6a2 2 0 01-2-2V8"/>
                 </svg>
                 <span>Copiar código</span>
               }


              </button>

              
            </div>
          </div>

          <div class="flex flex-col items-center gap-4">
            <span class="text-sm text-gray-500">Ou escaneie o QR code</span>
            <img src="assets/qr-code.jpeg" alt="QR code" class="w-56 h-56 rounded-lg shadow-md object-cover"/>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Finalizar implements OnInit, OnDestroy{
  copied = false;
  private popStateHandler = (ev: PopStateEvent) => {
    // when user hits browser back from this component, redirect to /bem-vindo
    this.router.navigate(['bem-vindo']);
  };

  constructor(private router: Router) {}
  copyCode(): void {
    const code = '00020126600014br.gov.bcb.pix0114+55619932541510220Bolao Mega da Virada520400005303986540584.005802BR5925JOGEAN MATHEUS CARVALHO F6008BRASILIA62290525nAsIBqvoHPmZzLwVSTjHrnBr563043B2E';
    this.copied = true
    // preferred modern API
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(code).then(() => this.flashCopied(), () => this.fallbackCopy(code));
      return;
    }

    // fallback
    this.fallbackCopy(code);
  }

  private fallbackCopy(text: string): void {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.flashCopied();
    } catch {
      // ignore failure
    }
  }

  private flashCopied(): void {
    this.copied = true;
    setTimeout(() => (this.copied = false), 1500);
  }

  ngOnInit(): void {
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', this.popStateHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('popstate', this.popStateHandler);
  }
 }
