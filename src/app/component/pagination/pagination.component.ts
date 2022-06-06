import { Component, Input, OnInit } from '@angular/core';
import { Spaces } from 'src/app/interface/space';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() faults!: Spaces;

  constructor() { }

  ngOnInit(): void {
  }

  setPageSizeOptions():number[] {
    const sizes:number[] = [];
    let x = 2;
    sizes.push(x);
    while (x <= this.faults.spaces.length/x)  { x = x * 4; sizes.push(x); }
    sizes.push(this.faults.spaces.length);
    return sizes;
  }

  changePage(ev:any):void {
    //Añadir paginación de verdad
  }

}
