import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFroundComponent } from './page-not-fround.component';

describe('PageNotFroundComponent', () => {
  let component: PageNotFroundComponent;
  let fixture: ComponentFixture<PageNotFroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
