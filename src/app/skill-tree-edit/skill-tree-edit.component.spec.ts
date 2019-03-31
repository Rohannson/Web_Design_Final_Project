import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBarsComponent } from './skill-tree-edit.component';

describe('SkillBarsComponent', () => {
  let component: SkillBarsComponent;
  let fixture: ComponentFixture<SkillBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
