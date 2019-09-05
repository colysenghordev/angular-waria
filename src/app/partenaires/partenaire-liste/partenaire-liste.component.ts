import { Component, OnInit } from '@angular/core';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { Partenaire } from 'src/app/models/partenaire';

@Component({
  selector: 'app-partenaire-liste',
  templateUrl: './partenaire-liste.component.html',
  styleUrls: ['./partenaire-liste.component.scss']
})
export class PartenaireListeComponent implements OnInit {
  partenaires:Partenaire[];
  constructor(private partService:PartenaireService) { }

  ngOnInit() {
    this.getPart();
    //this.partService.refreshList();
  }

  getPart(){
    this.partService.getPartenaires().subscribe(
      res=>{
        this.partenaires=res;
        console.log(this.partenaires)
      },
      err => console.log(err),
    )
  }

}
