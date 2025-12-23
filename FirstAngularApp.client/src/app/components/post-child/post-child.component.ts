import { Component, Input } from '@angular/core';
import type { Quote } from '../posts-parent/posts-parent.component';

@Component({
  selector: 'app-post-child',
  standalone: true,
  templateUrl: './post-child.component.html'
})
export class PostChildComponent {
  @Input({ required: true }) quote!: Quote;
}
