import { Injectable } from '@angular/core';
import { MenuCards } from './../model/cards.model';

@Injectable()
export class CardsService {

    menuCard: MenuCards[] = [
        new MenuCards('cleaning', "../../assets/image/travel.png"),
        new MenuCards('Electrician', "../../assets/image/travel.png"),
        new MenuCards('Food', '../../assets/image/travel.png'),
        new MenuCards('Groceries', '../../assets/image/travel.png'),
        new MenuCards('beauty', '../../assets/image/travel.png'),
        new MenuCards('travel', "../../assets/image/travel.png"),

    ]



}