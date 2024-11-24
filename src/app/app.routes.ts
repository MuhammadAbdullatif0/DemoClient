import { Routes } from '@angular/router';
import { AccountComponent } from './features/account/account.component';

export const routes: Routes = [
    {path:'login', component: AccountComponent},
    {path:'', component: AccountComponent}
];
