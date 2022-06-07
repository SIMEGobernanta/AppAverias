import { Component, Input, OnInit } from '@angular/core';
import { Space, Spaces } from 'src/app/interface/space';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() Faults!:Spaces;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  isNumber(val:string) {

  }

  openModal(fault:Space) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '85vw',
      data: fault
    });
    dialogRef.afterClosed().subscribe(resp => {
      console.log(resp);
    })
  }
}
