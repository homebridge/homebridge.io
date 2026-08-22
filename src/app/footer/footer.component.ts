import { Component } from '@angular/core'

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public currentYear = new Date().getFullYear()

  constructor() { }
}
