import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcontainerComponent } from './hcontainer.component';

describe('HcontainerComponent', () => {
  let component: HcontainerComponent;
  let fixture: ComponentFixture<HcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
