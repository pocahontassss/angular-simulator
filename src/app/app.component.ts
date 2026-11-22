import './training';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Color } from '../enums/Color';
import { Collection } from './collection';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { ITour } from '../interfaces/ITour';
import { IDestination } from '../interfaces/IDestination';
import { IArticle } from '../interfaces/IArticle';
import { IMessage } from '../interfaces/IMessage';
import { MessageType } from '../enums/MessageType';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component'
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  
}
