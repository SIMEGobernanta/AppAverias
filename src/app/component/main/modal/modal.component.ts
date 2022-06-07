import { Component, OnInit, Inject } from '@angular/core';
import { Space } from 'src/app/interface/space';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NgxMatDateAdapter } from '@angular-material-components/datetime-picker';
import * as _moment from 'moment';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {

  Fault!:Space;
  myForm!:FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Space) { }

  ngOnInit(): void {
    this.Fault = JSON.parse(JSON.stringify(this.data));
    this.initForm();
  }

  initForm(): void {
    this.myForm = new FormGroup({

    });
  }

}
