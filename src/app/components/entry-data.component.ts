import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entry-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css'],
})
export class EntryDataComponent {
  placeholder: string = 'email';
  placepass: string = 'senha';
  color: string = 'red';
}
