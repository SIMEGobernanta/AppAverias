import { Component, Input, OnInit } from '@angular/core';
import { Space, Spaces } from 'src/app/interface/space';

interface ISortFilter {
  prop: string;
  label: string;
  asc: boolean;
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() Faults!:Spaces;
  filters: ISortFilter[] = [
    { prop: 'faults', label: 'Cantidad', asc: false }, { prop: 'name', label: 'Zonas', asc: false },
  ];
  filterHandler: ISortFilter[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  setFilterHandler(filter: ISortFilter): void {
    const index = this.filterHandler.indexOf(filter);
    if (index === -1) {
      this.resetFilter();
      this.filterHandler = [];
      filter.asc = !filter.asc;
      this.filterHandler.push(filter);
      this.applyFilter();
      return;
    }
    this.filterHandler[index].asc = !this.filterHandler[index].asc;
    this.applyFilter();
  }

  resetFilter(): void {
    if (this.filterHandler.length) {
      this.filterHandler[0].asc = false;
    }
  }

  applyFilter(): void {
    const filter = this.filterHandler[0];
    if (filter.asc) {
      this.Faults.spaces = this.Faults.spaces.sort((a,b) => {
        if (a[filter.prop as keyof Space] > b[filter.prop as keyof Space]) {return 1; }
        return -1;
      });
      return;
    }
    this.Faults.spaces = this.Faults.spaces.sort((a,b) => {
      if (a[filter.prop as keyof Space] > b[filter.prop as keyof Space]) {return -1; }
      return 1;
    });
  }

  resetFilters(): void {
    this.Faults.spaces = this.Faults.spaces.sort((a,b) => {
      if (a.name > b.name) {return 1; }
      return -1;
    });
    this.filters.forEach(filter => filter.asc = false);
    this.filterHandler = [];
  }

}
