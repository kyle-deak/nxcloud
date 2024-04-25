import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {InputComponent} from '@kyledeak/shared';


@Component({
  standalone: true,
  imports: [InputComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nxcloud';
}
