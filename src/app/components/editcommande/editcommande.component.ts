import {Component, Input, OnInit} from '@angular/core';
import {ComfactService} from '../../services/comfact.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Comfact} from '../../entities/comfact.entities';

@Component({
  selector: 'app-editcommande',
  templateUrl: './editcommande.component.html',
  styleUrls: ['./editcommande.component.css']
})
export class EditcommandeComponent implements OnInit {
  comfactFormGroup?: FormGroup;
  submitted=false;
  @Input() comfact?:Comfact;
  deleted=false;

  constructor(private comfactService: ComfactService, private fb: FormBuilder,private router:Router) {
  }

  ngOnInit(): void {
    this.comfactFormGroup = this.fb.group({
      numcommande: [this.comfact?.numcommande],
      numfact: [this.comfact?.numfact, Validators.compose([Validators.required, Validators.min(1)])],
      datecom: [this.comfact?.datecom, Validators.required],
      etat  :[this.comfact?.etat, Validators.compose([Validators.required,Validators.pattern("^(?:c|f|p)$")])],
      montant: [this.comfact?.montant, Validators.compose([Validators.required, Validators.min(0)])]

    });
  }

  onUpdateComfact(): void {
    this.submitted = true;
    if (this.comfactFormGroup?.invalid) {
      return;
    }
    this.comfactService.updateComfact(this.comfactFormGroup?.value).subscribe(data => {
        alert('maj ok')
      },
      err => {
        alert(err.headers.get("error"));
      });
  }

  onDeleteComfact() {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.comfactService.deleteComfact(this.comfactFormGroup?.value).subscribe(data => {
          alert('effacement ok');
          this.deleted=true;

        },
        err => {
          alert(err.headers.get("error"));
        });

    }
  }
}
