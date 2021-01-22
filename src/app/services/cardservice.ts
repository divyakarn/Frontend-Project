import { Injectable } from '@angular/core';
import { MenuCards } from './../model/cards.model';

@Injectable()
export class CardsService {

    menuCard: MenuCards[] = [
        new MenuCards('Cleaning', "../../assets/image/travel.png", '/cleaningpage'),
        new MenuCards('Electrician', "../../assets/image/travel.png", '/electripage'),
        new MenuCards('Food', '../../assets/image/travel.png', '/foodpage'),
        new MenuCards('Groceries', '../../assets/image/travel.png', ''),
        new MenuCards('Beauty', '../../assets/image/travel.png', '/beautypage'),
        new MenuCards('Travel', "../../assets/image/travel.png", ''),
    ]



}