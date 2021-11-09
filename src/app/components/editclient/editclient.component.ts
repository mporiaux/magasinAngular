import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientsService} from '../../services/clients.service';
import {ActivatedRoute} from '@angular/router';
import {ComfactService} from '../../services/comfact.service';
import {Comfact} from '../../entities/comfact.entities';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit {
  clientFormGroup?: FormGroup;
  submitted = false;
  idClient: number;
  comfacts?: Comfact[];

  constructor(private clientService: ClientsService, private comfactService: ComfactService, private fb: FormBuilder, activatedRoute: ActivatedRoute) {
    this.idClient = activatedRoute.snapshot.params.idclient;
  }

  ngOnInit(): void {
    this.clientService.getClient(this.idClient).subscribe(
      client => {
        this.clientFormGroup = this.fb.group({
          idclient: [client.idclient, Validators.required],
          nom: [client.nom, Validators.required],
          prenom: [client.prenom, Validators.required],
          cp: [client.cp, Validators.compose([Validators.required, Validators.min(1000), Validators.max(9999)])],
          localite: [client.localite, Validators.required],
          rue: [client.rue, Validators.required],
          num: [client.num, Validators.required],
          tel: [client.tel, Validators.required]
        })
      });
  }

  onUpdateClient(): void {
    this.submitted = true;
    if (this.clientFormGroup?.invalid) {
      return;
    }
    this.clientService.updateClient(this.clientFormGroup?.value).subscribe(data => {
        alert('maj ok')
      },
      err => {
        alert(err.headers.get("error"));
      });
  }

  onSeeComfacts() {
    this.comfactService.getComfactsClient(this.idClient).subscribe(data => {
        this.comfacts = data
      },
      err => {
        alert(err.headers.get("error"));
      });
  }

  onAddComfact(cf:Comfact) {
    this.comfacts?.push(cf);
  }
}
