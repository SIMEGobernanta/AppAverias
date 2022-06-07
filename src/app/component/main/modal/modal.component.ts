import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Space } from 'src/app/interface/space';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';

export const MY_DATE_FORMATS = {
  parse: {dateInput: 'DD/MM/YYYY'},
  display: {dateInput: 'DD/MM/YYYY', monthYearLabel: 'MMMM YYYY', dateA11yLabel: 'LL', monthYearA11yLabel: 'MMMM YYYY'},
};

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
  ],
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
