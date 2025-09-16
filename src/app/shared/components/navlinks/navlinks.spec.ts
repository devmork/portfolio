import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navlinks } from './navlinks';

describe('Navlinks', () => {
  let component: Navlinks;
  let fixture: ComponentFixture<Navlinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navlinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navlinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
