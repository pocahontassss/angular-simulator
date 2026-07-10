import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../interfaces/IPost';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit {
  
  post: IPost | null = null;

  private route: ActivatedRoute = inject(ActivatedRoute);
  
  ngOnInit(): void {
    this.post = this.route.snapshot.data['post'];
  }

}