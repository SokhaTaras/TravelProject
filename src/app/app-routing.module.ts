import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {MainComponent} from "./components/main/main.component";
import {BaseComponent} from "./components/base/base.component";

const routes: Routes = [
  {
  path: '', component: BaseComponent,
    children:[
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'main'
      },
      {
        path: 'main',
        component: MainComponent,
      },
    ]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registration', component: LoginComponent
  },
  {
    path: '**', component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
