import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsParent } from './posts-parent';

describe('PostsParent', () => {
  let component: PostsParent;
  let fixture: ComponentFixture<PostsParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
