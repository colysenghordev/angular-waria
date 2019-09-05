import { Component, OnInit } from '@angular/core';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-partenaire',
  templateUrl: './create-partenaire.component.html',
  styleUrls: ['./create-partenaire.component.scss']
})
export class CreatePartenaireComponent implements OnInit {

  partenaires: import("/home/coly/Documents/angular-warima/src/app/models/partenaire").Partenaire;

  constructor(private service: PartenaireService,
    private toastr: ToastrService) { }
  serviceformData = {}
  ngOnInit() {
    this.resetForm
  }

  resetForm(form: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      raisonSociale: '',
      ninea: '',
      statut: '',
      profil: null,
      username: '',
      password: '',
      prenom: '',
      nom: '',
      telephone: '',
      adresse: '',
      email: '',
      solde: null,
      montant: null
    }
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPartenaire(form.value).subscribe(
      _res => {
        this.toastr.success('Le partenaire a été ajouté avec succés', 'Nouveau Partenaire');
        this.resetForm(form);
      }
    )

  }

}
