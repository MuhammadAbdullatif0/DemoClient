import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountComponent } from './features/account/account.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clientgs ';
}
