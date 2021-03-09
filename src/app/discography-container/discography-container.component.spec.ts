import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscographyContainerComponent } from './discography-container.component';

describe('DiscographyContainerComponent', () => {
  let component: DiscographyContainerComponent;
  let fixture: ComponentFixture<DiscographyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscographyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscographyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
