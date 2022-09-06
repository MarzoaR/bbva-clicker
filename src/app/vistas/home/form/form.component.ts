import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  play( data: any ){
    const namePlayer = this.transformName( data.value.name );
    // console.log(namePlayer);
    this.router.navigate(['/game', namePlayer ]);
  }

  transformName( name: string ){
    return name.trim().toLowerCase().split(' ').join('_');
  }

}
