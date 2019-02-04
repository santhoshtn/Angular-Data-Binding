import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scene6component1Component } from './scene6component1.component';

describe('Scene6component1Component', () => {
  let component: Scene6component1Component;
  let fixture: ComponentFixture<Scene6component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scene6component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scene6component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
