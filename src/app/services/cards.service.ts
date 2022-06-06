import { EventEmitter, Injectable, Output } from '@angular/core';
import { Spaces } from '../interface/space';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  @Output() cards = new EventEmitter<Spaces>();

  constructor() { }
}
