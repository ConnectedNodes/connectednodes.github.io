import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCompComponent } from './components/main-comp/main-comp.component';
import { PrivacyPolicyComponent } from './components/main-comp/privacy-policy/privacy-policy.component';
import { MainPageComponent } from './components/main-comp/main-page/main-page.component';


const routes: Routes = [
  { path: 'connectednodes/home', component: MainPageComponent },
  { path: 'connectednodes/privacy-policy', component: PrivacyPolicyComponent},
 { path: '',   redirectTo: '/connectednodes/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
