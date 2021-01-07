import { Component, OnInit } from '@angular/core';
import { Pinterest } from '../../models/pinterest';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.scss']
})
export class PinterestComponent implements OnInit {
  items: Pinterest[] = [
    {
      id: '1',
      image: 'assets/images/pinterest/landing.jpg'
    },
    {
      id: '2',
      image: 'assets/images/pinterest/tshirt.jpg'
    },
    {
      id: '3',
      image: 'assets/images/pinterest/house.jpg'
    },
    {
      id: '1',
      image: 'assets/images/pinterest/landing.jpg'
    },
    {
      id: '2',
      image: 'assets/images/pinterest/tshirt.jpg'
    },
    {
      id: '3',
      image: 'assets/images/pinterest/house.jpg'
    },
    {
      id: '1',
      image: 'assets/images/pinterest/landing.jpg'
    },
    {
      id: '2',
      image: 'assets/images/pinterest/tshirt.jpg'
    },
    {
      id: '3',
      image: 'assets/images/pinterest/house.jpg'
    },
    {
      id: '1',
      image: 'assets/images/pinterest/landing.jpg'
    },
    {
      id: '2',
      image: 'assets/images/pinterest/tshirt.jpg'
    },
    {
      id: '3',
      image: 'assets/images/pinterest/house.jpg'
    },
    {
      id: '1',
      image: 'assets/images/pinterest/landing.jpg'
    },
    {
      id: '2',
      image: 'assets/images/pinterest/tshirt.jpg'
    },
    {
      id: '3',
      image: 'assets/images/pinterest/house.jpg'
    },
    {
      id: '1',
      image: 'assets/images/pinterest/landing.jpg'
    },
    {
      id: '2',
      image: 'assets/images/pinterest/tshirt.jpg'
    },
    {
      id: '3',
      image: 'assets/images/pinterest/house.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
