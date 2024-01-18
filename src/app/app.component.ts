import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { HelloComponent } from './hello.component';
import { MenuComponent } from './components/menu.component';
import { Button } from './components/button.component';
import { EntryDataComponent } from './components/entry-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent, MenuComponent, Button, EntryDataComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  buttonLabel: string = 'CARRINHO';
  buttonSecond: string = 'ADICIONAR A FAVORITOS';
}

bootstrapApplication(AppComponent);
