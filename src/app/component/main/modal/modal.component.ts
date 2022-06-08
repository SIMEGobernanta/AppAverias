import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { Space } from 'src/app/interface/space';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NgxMatDateFormats, NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';
import * as moment from 'moment';


const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
  parse: {dateInput: "DD/MM/YYYY - HH:mm"},
  display: {dateInput: "DD/MM/YYYY - HH:mm", monthYearLabel: "MMM YYYY", dateA11yLabel: "LL", monthYearA11yLabel: "MMMM YYYY"}
};

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [
    { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }
  ]
})
export class ModalComponent implements OnInit, AfterViewInit {

  Fault!:Space;
  minStartDate!:moment.Moment;
  maxStartDate!:moment.Moment;
  minEndDate!:moment.Moment;

  myForm!:FormGroup;
  startDate!:FormControl; endDate!:FormControl; faultType!: FormControl; faultName!: FormControl;
  machine!: FormControl; article!: FormControl; bookingNum!: FormControl; bookingOrder!: FormControl;
  description!: FormControl; reportedbyClient!: FormControl; assignedTec!: FormControl;
  priority!: FormControl; notifiedBy!: FormControl; Space!: FormControl;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Space) { }

  ngOnInit(): void {
    this.Fault = JSON.parse(JSON.stringify(this.data));
    this.initForm();

    this.minStartDate = moment();
    this.minEndDate = moment(this.minStartDate).add(1, 'hours');
  }

  ngAfterViewInit(): void {

  }

  initForm(): void {
    this.startDate = new FormControl('', [Validators.required]);
    this.endDate = new FormControl('', [Validators.required]);
    this.faultType = new FormControl('', [Validators.required]);
    this.faultName = new FormControl('', [Validators.required]);
    this.machine = new FormControl('', [Validators.required]);
    this.article = new FormControl('', [Validators.required]);
    this.bookingNum = new FormControl('', [Validators.required]);
    this.bookingOrder = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);
    this.reportedbyClient = new FormControl('', [Validators.required]);
    this.assignedTec = new FormControl('', [Validators.required]);
    this.priority = new FormControl('', [Validators.required]);
    this.notifiedBy = new FormControl('', [Validators.required]);
    this.Space = new FormControl('', [Validators.required]);

    this.myForm = new FormGroup({
      startDate: this.startDate,
      endDate: this.endDate,
      faultType: this.faultType,
      faultName: this.faultName,
      machine: this.machine,
      article: this.article,
      bookingNum: this.bookingNum,
      bookingOrder: this.bookingOrder,
      description: this.description,
      reportedbyClient: this.reportedbyClient,
      assignedTec: this.assignedTec,
      priority: this.priority,
      notifiedBy: this.notifiedBy,
      Space: this.Space,
    });
  }

  validateForm(form:FormGroup):void {
    Object.keys(this.myForm.controls).forEach(control => {
      const field = this.myForm.get(control);
      if (field instanceof FormControl) {field.markAsTouched({ onlySelf: true })}
      else if (field instanceof FormGroup) {this.validateForm(field)};
    });
  }

  setminEndate(ev:moment.Moment):void {
    this.minEndDate = ev.add(1, 'minutes');
  }

  setmaxStartdate(ev:moment.Moment):void {
    this.maxStartDate = ev.subtract(1, 'minutes');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
