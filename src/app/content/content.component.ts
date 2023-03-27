import { Component, Input } from '@angular/core';
import { Content } from '../types/content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() content:Content = {} as Content

}
