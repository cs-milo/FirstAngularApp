import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostChild } from './post-child';

describe('PostChild', () => {
  let component: PostChild;
  let fixture: ComponentFixture<PostChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
