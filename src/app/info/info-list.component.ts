import { Component } from '@angular/core';
import { Info } from './info.model';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css']
})
export class InfoListComponent {
  infos: Info[] = [
    {
      question: 'როდის იწყება და რა ფორმატით გაიმართება აქცია?',
      answer: 'როდის იწყება და რა ფორმატით გაიმართება აქცია'
    },
    {
      question: 'როგორ მივიღო აქციაში მონაწილეობა?',
      answer: 'როგორ მივიღო აქციაში მონაწილეობა'
    },
    {
      question: 'სხვადასვა',
      answer: 'სხვადასვა'
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }
}
