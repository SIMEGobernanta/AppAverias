import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arrows',
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.css']
})
export class ArrowsComponent implements OnInit {
  @Input() isAsc!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
