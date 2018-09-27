import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondrianGridComponent } from './mondrian-grid.component';

describe('MondrianGridComponent', () => {
  let component: MondrianGridComponent;
  let fixture: ComponentFixture<MondrianGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondrianGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondrianGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
