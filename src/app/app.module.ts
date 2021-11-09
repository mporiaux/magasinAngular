import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewclientComponent } from './components/newclient/newclient.component';
import { EditclientComponent } from './components/editclient/editclient.component';
import { NewcomfactComponent } from './components/newcomfact/newcomfact.component';
import { EditcommandeComponent } from './components/editcommande/editcommande.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ClientsComponent,
    CommandesComponent,
    HomeComponent,
    NewclientComponent,
    EditclientComponent,
    NewcomfactComponent,
    EditcommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
