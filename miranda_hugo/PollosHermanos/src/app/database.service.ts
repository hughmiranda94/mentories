import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  getPopCards() : PopCard[]
  {
    return popCards;
  }
}

export class PopCard {
  id: number;
  name: string;
  imgUrl: string;

  constructor()
  {

  }

}

let popCards : PopCard[] =
[
  {
    id: 1,
    name: 'Crab and curry sources',
    imgUrl: 'cheerios.jpg'
  },
  {
    id: 2,
    name: 'Fried Chicken Rolls',
    imgUrl: 'tofu.jpg'
  },
  {
    id: 3,
    name: 'Italian Mushroom',
    imgUrl: 'salad.jpg'
  },
  {
    id: 4,
    name: 'Pasta Carbonara',
    imgUrl: 'fruit.jpg'
  }
]