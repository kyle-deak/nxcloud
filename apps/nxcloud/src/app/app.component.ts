import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {InputComponent} from '@kyledeak/shared';
import { MyComponentComponent } from './my-component/my-component.component';


@Component({
  standalone: true,
  imports: [InputComponent, RouterModule, MyComponentComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nxcloud';
}
