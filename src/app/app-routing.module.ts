import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientsComponent} from './components/clients/clients.component';
import {CommandesComponent} from './components/commandes/commandes.component';
import {HomeComponent} from './components/home/home.component';
import {NewclientComponent} from './components/newclient/newclient.component';
import {EditclientComponent} from './components/editclient/editclient.component';

const routes: Routes = [
  {path: "clients", component: ClientsComponent},
  {path:"newClient",component:NewclientComponent},
  {path:"editClient/:idclient",component:EditclientComponent},
  {path: "commandes", component: CommandesComponent},
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
