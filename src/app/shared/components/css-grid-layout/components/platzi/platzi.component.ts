import { Component, OnInit } from '@angular/core';
import { Platzi } from '../../../../interfaces/platzi';

@Component({
  selector: 'app-platzi',
  templateUrl: './platzi.component.html',
  styleUrls: ['./platzi.component.scss']
})
export class PlatziComponent implements OnInit {
  platzi: Platzi = {
    id: '1',
    image: 'assets/images/platzi/react-js/badge.png'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
