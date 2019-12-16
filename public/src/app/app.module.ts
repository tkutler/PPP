import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginregComponent } from './loginreg/loginreg.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { CoachesComponent } from './coaches/coaches.component';
import { RatesComponent } from './rates/rates.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginregComponent,
    WelcomeComponent,
    AboutComponent,
    CoachesComponent,
    RatesComponent,
    BookComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { } 


