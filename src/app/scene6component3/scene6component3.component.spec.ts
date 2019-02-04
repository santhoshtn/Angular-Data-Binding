import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scene6component3Component } from './scene6component3.component';

describe('Scene6component3Component', () => {
  let component: Scene6component3Component;
  let fixture: ComponentFixture<Scene6component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scene6component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scene6component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
