import { APP_BASE_HREF } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() title : string ="";
  @Input() route : string ="";

  constructor(private router: Router){}

  navigate(url: string){
    this.router.navigateByUrl(url)  }
}
