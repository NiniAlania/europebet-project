import { Component } from '@angular/core';
import { CategoryListItem } from './category-list-item.model';

@Component({
  selector: 'app-final-stage',
  templateUrl: './final-stage.component.html',
  styleUrls: ['./final-stage.component.css']
})
export class FinalStageComponent {
  categoryListItems: CategoryListItem[] = [
    {
      imageUrl: '/assets/final-item-ticket-icon.png',
      text: 'ორმხრივი ავიაბილეთი'
    },
    {
      imageUrl: '/assets/final-item-event-icon.png',
      text: 'The Festival in Malta -ს მეინ ივენთის ბაი-ინი'
    },
    {
      imageUrl: '/assets/final-item-event-icon.png',
      text: 'Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი'
    },
    {
      imageUrl: '/assets/final-item-hotel-icon.png',
      text: 'სასტუმრო Golden Tulip Vivaldi Hote'
    },
    {
      imageUrl: '/assets/final-item-money-icon.png',
      text: '€500 სახარჯი ფული'
    },
  ];

  keyListItems: string[] = [
    'სპეციალური ტურნირი Cashgame Sharks II ადგილი',
    'სპეციალური ტურნირი Cashgame Sharks II ადგილი',
    'სპეციალური ტურნირი Tournament Sharks II ადგილი',
    'სპეც. ტურნირი Tournament Sharks III ადგილი',
    'Holdem Grinders ლიდერბორდის გამარჯვებული',
    'ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები',
    'სპეციალური ტურნირი Cashgame Sharks II ადგილი',
    'სპეციალური ტურნირი Cashgame Sharks II ადგილი',
    'სპეციალური ტურნირი Tournament Sharks II ადგილი',
    'სპეც. ტურნირი Tournament Sharks III ადგილი',
    'Holdem Grinders ლიდერბორდის გამარჯვებული',
    'ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები',
    'სპეციალური ტურნირი Cashgame Sharks II ადგილი',
    'სპეციალური ტურნირი Cashgame Sharks II ადგილი',
    'სპეციალური ტურნირი Tournament Sharks II ადგილი',
    'სპეც. ტურნირი Tournament Sharks III ადგილი',
    'Holdem Grinders ლიდერბორდის გამარჯვებული',
    'ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები'
  ];
}
