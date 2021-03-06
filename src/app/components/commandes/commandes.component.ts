import { Component, OnInit } from '@angular/core';
import {Comfact} from '../../entities/comfact.entities';
import {FormBuilder} from '@angular/forms';
import {ComfactService} from '../../services/comfact.service';
import {formatDate} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  comfact: Comfact|null=null;
  numcommande :number=0;
  constructor(private comfactService: ComfactService, private router:Router) {
  }

  ngOnInit(): void {}

  onSearch() {
    this.comfact=null;
    this.comfactService.getComfact(this.numcommande).subscribe(
      data => {this.comfact=data},err =>{alert("commande introuvable")});
  }

 /* onSearch(value: any) {
      this.comfact=null;
       this.comfactService.getComfact(value.numcommande).subscribe(
      data => {this.comfact=data},err =>{alert("commande introuvable")});
  }*/
}

