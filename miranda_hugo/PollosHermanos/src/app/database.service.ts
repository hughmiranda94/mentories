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

  getFoodItems() : FoodItem[]
  {
    return foodItems;
  }

  getSpecCards() : SpecCard[]
  {
    return specCards;
  }
}

export class PopCard {
  id: number;
  name: string;
  imgUrl: string;
}

export class FoodItem{
  id: number;
  title: string;
  info: string;
  imgUrl: string;
}

export class SpecCard{
  id: number;
  name: string;
  info: string;
  price: number;
  imgUrl: string;
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
  },
  {
    id: 5,
    name: 'Salade de la maison',
    imgUrl: 'weird-salad.jpg'
  },
]

let foodItems : FoodItem [] = [

  {
    id: 0,
    title: 'The perfect place to enjoy the life and food.',
    info: 'Locally grown plate mustard chopsticks vegetarian'+
    'curstard taste food sous chef hummus relish soda marinate bistro. Lovely '+
    'autehntic cheese funghi. Salt pizza chese peas lunch firdge dish banquet tea. '+
    'Organic restauratns pie delivery vegetables local aroma spoon consumer',
    imgUrl: 'burger.png'
  },
  {
    id: 1,
    title: 'An outstanding master of Italian cuisine.',
    info: 'Locally grown plate mustard chopsticks vegetarian'+
    'curstard taste food sous chef hummus relish soda marinate bistro. Lovely '+
    'autehntic cheese funghi. Salt pizza chese peas lunch firdge dish banquet tea. '+
    'Organic restauratns pie delivery vegetables local aroma spoon consumer',
    imgUrl: 'fish-eggs.png'
  }
]

let specCards : SpecCard[] =
[
  {
    id: 1,
    name: 'Chicken Caesar Salad',
    info: 'Mixed greens, fresh pulled mozzarella, garden basil, Hawaiian sea salt',
    price: 13,
    imgUrl: 'caesar-salad.jpg'
  },
  {
    id: 2,
    name: 'Spaghetti Bolognese',
    info: 'Mixed greens, fresh pulled mozzarella, garden basil, Hawaiian sea salt',
    price: 16,
    imgUrl: 'pasta.jpg'
  },
  {
    id: 3,
    name: 'Cheesy Baked Egg',
    info: 'Mixed greens, fresh pulled mozzarella, garden basil, Hawaiian sea salt',
    price: 11,
    imgUrl: 'baked-egg.jpg'
  },  
  {
    id: 4,
    name: 'English Breakfast',
    info: 'Mixed greens, fresh pulled mozzarella, garden basil, Hawaiian sea salt',
    price: 15,
    imgUrl: 'english-breakfast.jpg'
  },
  {
    id: 5,
    name: 'Almond Cookies',
    info: 'Mixed greens, fresh pulled mozzarella, garden basil, Hawaiian sea salt',
    price: 12,
    imgUrl: 'macaroons.jpg'
  },
  {
    id: 6,
    name: 'Four Cheese Raviolli',
    info: 'Mixed greens, fresh pulled mozzarella, garden basil, Hawaiian sea salt',
    price: 19,
    imgUrl: 'raviolli.jpg'
  }
]