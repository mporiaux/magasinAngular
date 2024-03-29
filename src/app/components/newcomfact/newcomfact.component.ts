import {Component, EventEmitter, Input, OnInit, Output} from
    '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comfact} from '../../entities/comfact.entities';
import {formatDate} from '@angular/common';
import {ComfactService} from "../../services/commandes.service";
@Component({
  selector: 'app-newcomfact',
  templateUrl: './newcomfact.component.html',
  styleUrls: ['./newcomfact.component.css']
})
export class NewcomfactComponent implements OnInit {
  @Input() cliact? : FormGroup;
  @Output() newComfact = new EventEmitter<Comfact>();
  comfactFormGroup?: FormGroup;
  submitted = false;
  cf?:Comfact;
  constructor(private fb: FormBuilder, private comfactService:
    ComfactService) { }
  ngOnInit(): void {
    this.comfactFormGroup = this.fb.group({
      datecommande :[formatDate(new Date(), 'yyyy-MM-dd', 'en')],
      etat:['c'],
      montant: ['0'],
    });
  }
  onSaveComfact(): void {
    this.submitted = true;
    var ncf=this.comfactFormGroup?.value;
    ncf.client=this.cliact?.value;
   // this.comfactService.save(this.comfactFormGroup?.value,this.cliact?.value);
    this.comfactService.save(ncf).
    subscribe(data => {alert('sauvegarde ok');this.cf=data;this.newComfact.emit(data) },
      err => {
        alert(err.headers.get("error"));
      });
    }
  }
