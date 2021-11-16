import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientsService} from '../../services/clients.service';
import {Observable} from 'rxjs';
import {Client} from '../../entities/client.entities';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients?: Client[];
  constructor(private clientsService: ClientsService,private router: Router) { }

//méthode d'initialisation
  ngOnInit(): void {
  }

  onSearch(value: any) {
     this.clientsService.searchClients(value.nom).subscribe(
       data => {this.clients=data});
  }

  onNewClient() {
    this.router.navigateByUrl('newClient');
  }

  onDelete(c: Client) {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.clientsService.deleteClient(c).subscribe(
        data => {
          this.onSearch(c);
        },
        err => {
            alert(err.headers.get("error"));
        }
      );
    }
  }

  onEdit(c: Client) {
    this.router.navigateByUrl('editClient/'+c.idclient);
  }

}
