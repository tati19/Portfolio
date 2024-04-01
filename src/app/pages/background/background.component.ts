import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { AboutComponent } from '../about/about.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [ButtonComponent,AboutComponent, RouterLink],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})
export class BackgroundComponent {

}
