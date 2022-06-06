import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Spaces } from 'src/app/interface/space';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('input') input!:ElementRef;
  @Input() cards!:Spaces;

  cardsAux:Spaces = { spaces: [] };

  constructor(private cardService: CardsService) { }

  ngOnInit(): void {
    this.cardsAux.spaces = [...this.cards.spaces];
  }

  search(value: string): void {
    if (value) {
      this.cardsAux.spaces = this.cards.spaces.filter(space => space.name.toLowerCase().includes(value.toLowerCase()));
      this.cardService.cards.emit(this.cardsAux);
      return;
    }
    this.resetArray();
  }

  resetArray(): void {
    this.input.nativeElement.value = '';
    this.cardService.cards.emit(this.cards);
  }

}
