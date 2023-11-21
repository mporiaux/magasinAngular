import { Component, OnInit } from '@angular/core';
import {Comfact} from '../../entities/comfact.entities';
import {ComfactService} from "../../services/commandes.service";
@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  comfact: Comfact|null=null;
  idcommande :number=0;
  constructor(private comfactService: ComfactService) {
  }
  ngOnInit(): void {}
  onSearch() {
    this.comfact=null;
    this.comfactService.getComfact(this.idcommande).subscribe(
    {next : data => this.comfact=data,
      error : error=>alert("commande introuvable")
    })
  }
  /* onSearch(value: any) {
   this.comfact=null;
   this.comfactService.getComfact(value.idcommande).subscribe(
   data => {this.comfact=data},err =>{alert("commande introuvable")});
   }*/
}
