import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginregComponent } from './loginreg/loginreg.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RatesComponent } from './rates/rates.component';
import { CoachesComponent } from './coaches/coaches.component';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { CongratsComponent } from './congrats/congrats.component';


const routes: Routes = [ 
  { path: 'loginreg',component: LoginregComponent },
  { path: '', pathMatch:'full', redirectTo:'/loginreg' },
  { path: 'welcome',component: WelcomeComponent },
  { path: 'rates',component: RatesComponent },
  { path: 'coaches',component: CoachesComponent },
  { path: 'about',component: AboutComponent },
  { path: 'book',component: BookComponent },
  { path: 'contact',component: ContactComponent },
  { path: 'congrats',component: CongratsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
