import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { PostChildComponent } from '../post-child/post-child.component';

export interface Quote {
  id: number;
  quote: string;
  author: string;
}

interface QuotesResponse {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
}

@Component({
  selector: 'app-posts-parent',
  standalone: true,
  imports: [CommonModule, PostChildComponent],
  templateUrl: './posts-parent.component.html'
})
export class PostsParentComponent implements OnInit {
  quotes: Quote[] = [];
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loading = true;

    this.http.get<QuotesResponse>('https://dummyjson.com/quotes?limit=10').subscribe({
      next: (res: QuotesResponse) => {
        this.quotes = res.quotes;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load quotes.';
        this.loading = false;
      }
    });
  }
}
