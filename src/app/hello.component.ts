import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  standalone: true,
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  @Input() name: string = '';
}
