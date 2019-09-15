import { Component, OnInit, ViewChild } from '@angular/core';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { Partenaire } from 'src/app/models/partenaire';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-partenaire-liste',
  templateUrl: './partenaire-liste.component.html',
  styleUrls: ['./partenaire-liste.component.scss']
})
export class PartenaireListeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'raisonSociale', 'ninea', 'statut', 'users', 'comptes'];
  applyFilter (filterValue: string ) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
 }
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  dataSource :any;

  partenaires:Partenaire[];
  constructor(private partService:PartenaireService) { }

  ngOnInit() {
    this.getPart();
    //this.partService.refreshList();
  }

  /*populateform(part : Partenaire){
    this.partService.formData = part;
  }*/

  getPart(){
    this.partService.getPartenaires().subscribe(
      res=>{
        this.partenaires=res;
        console.log(this.partenaires);
        this.dataSource = new MatTableDataSource(this.partenaires);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
      },
      err => console.log(err),
    )
  }

}
