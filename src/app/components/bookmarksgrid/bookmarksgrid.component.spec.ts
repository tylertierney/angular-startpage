import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksgridComponent } from './bookmarksgrid.component';

describe('BookmarksgridComponent', () => {
  let component: BookmarksgridComponent;
  let fixture: ComponentFixture<BookmarksgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarksgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
