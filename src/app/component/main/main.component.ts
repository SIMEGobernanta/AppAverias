import { Component, Input, OnInit } from '@angular/core';
import { Spaces } from 'src/app/interface/space';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() Faults!:Spaces;

  constructor() { }

  ngOnInit(): void {

  }

  isNumber(val:string) {

  }
}
