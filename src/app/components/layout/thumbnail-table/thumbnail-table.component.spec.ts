import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailTableComponent } from './thumbnail-table.component';

describe('ThumbnailTableComponent', () => {
  let component: ThumbnailTableComponent;
  let fixture: ComponentFixture<ThumbnailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
