import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  cards = [
    {
      imgSrc: '../../../assets/imgs/feature-1.png',
      imgAlt: 'Money Back Guarantee Icon',
      title: 'Money Back Guarantee',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.'
    },
    {
      imgSrc: '../../../assets/imgs/feature-2.png',
      imgAlt: 'Claims Icon',
      title: 'All Claims At Anytime',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.'
    },
    {
      imgSrc: '../../../assets/imgs/feature-3.png',
      imgAlt: 'Digital Insurance Icon',
      title: 'Digital Insurance Policy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.'
    },
    {
      imgSrc: '../../../assets/imgs/feature-4.png',
      imgAlt: 'Payment App Icon',
      title: 'Direct Payment App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.'
    }
  ];
}
