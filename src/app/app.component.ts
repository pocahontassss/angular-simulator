import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Colors';
import './collection'
import { Data } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})

export class AppComponent {
  public location: string = ''
  public data: string = ''
  public name: string = ''
  public time: string = ''
  public counter: number = 0
  public switch: boolean = true
  public showTime: boolean = false;
  public textValue: string = ''
  public isLoading: boolean = true
  public nameCompany = "Румтибет"

  constructor() {
    this.getDate()
    this.count()
    this.time = this.time

    setInterval(() => {
      this.time = new Date().toLocaleString()
    }, 1000)

    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  }

  private getColor(color: Color) {
    if (color === Color.red || color === Color.blue || color === Color.green) {
      return true
    } else {
      return false
    }
  }

  private getDate(): void {
    const currentDate = new Date()
    localStorage.setItem('last visit', currentDate.toString())
  }

  private count(): void {
    const visitCount = Number(localStorage.getItem('visit-count') || 0);
    localStorage.setItem('visit-count', (visitCount + 1).toString());
  }
}

