import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAlbumsComponent } from './total-albums.component';

describe('TotalAlbumsComponent', () => {
  let component: TotalAlbumsComponent;
  let fixture: ComponentFixture<TotalAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
