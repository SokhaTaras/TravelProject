import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./components/login/login.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
