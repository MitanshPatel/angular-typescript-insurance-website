import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imgSrc: string = '';
  @Input() imgAlt: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
