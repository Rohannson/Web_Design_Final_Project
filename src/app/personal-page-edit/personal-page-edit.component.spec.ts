import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPageEditComponent } from './personal-page-edit.component';

describe('PersonalPageEditComponent', () => {
  let component: PersonalPageEditComponent;
  let fixture: ComponentFixture<PersonalPageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalPageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
