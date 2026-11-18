import { Component } from '@angular/core';
import './training';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
import { Component, Input } from '@angular/core';

@Component({ 
  selector: 'app-header', 
  templateUrl: './header.component.html'
 })

export class HeaderComponent 
{ 
  @Input() companyName = ''; 
}

ngOnInit(): void { this.saveLastVisitDate(); this.saveVisitCount(); } private saveLastVisitDate(): void { const now = new Date().toISOString(); // Формат ISO удобен для хранения localStorage.setItem('lastVisit', now);