import { Component, OnInit } from '@angular/core';
import { Instagram  } from './../../models/instagram';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  likeIcon: string = 'assets/icons/thumb_up-white-18dp.svg';
  commentIcon: string = 'assets/icons/mode_comment-white-18dp.svg';
  posts: Instagram[] = [
    {
      id: '1',
      image: 'assets/images/instagram/compu.jpg',
      likes: 100,
      comments: 10
    },
    {
      id: '2',
      image: 'assets/images/instagram/compu2.jpg',
      likes: 125,
      comments: 13
    },
    {
      id: '3',
      image: 'assets/images/instagram/compu3.jpg',
      likes: 150,
      comments: 7
    },
    {
      id: '4',
      image: 'assets/images/instagram/compu.jpg',
      likes: 100,
      comments: 10
    },
    {
      id: '5',
      image: 'assets/images/instagram/compu2.jpg',
      likes: 125,
      comments: 13
    },
    {
      id: '6',
      image: 'assets/images/instagram/compu3.jpg',
      likes: 150,
      comments: 7
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
