import { Routes } from '@angular/router';
import { App } from './app';
import { VejaRegras } from './features/veja-regras/veja-regras';
import { BemVindo } from './features/bem-vindo/bem-vindo';
import { EscolherJogo } from './features/escolher-jogo/escolher-jogo';
import { Finalizar } from './features/finalizar/finalizar';

export const routes: Routes = [
    {path: '', redirectTo: 'bem-vindo', pathMatch: 'full'},
    {path: 'bem-vindo', component: BemVindo},
    {path: 'regras', component: VejaRegras}, 
    {path: 'escolher-numeros', component: EscolherJogo},
    {path: 'finalizar', component: Finalizar}
];
