import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDataComponent } from './route-data.component';

describe('RouteDataComponent', () => {
  let component: RouteDataComponent;
  let fixture: ComponentFixture<RouteDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
