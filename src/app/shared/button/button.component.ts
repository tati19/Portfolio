import { APP_BASE_HREF } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() title : string ="";
  
}
