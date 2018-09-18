import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindemoappComponent } from './logindemoapp.component';

describe('LogindemoappComponent', () => {
  let component: LogindemoappComponent;
  let fixture: ComponentFixture<LogindemoappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogindemoappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindemoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
