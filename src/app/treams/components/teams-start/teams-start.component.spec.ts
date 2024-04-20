import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamsStartComponent} from './teams-start.component';

describe('TeamsStartComponent', () => {
  let component: TeamsStartComponent;
  let fixture: ComponentFixture<TeamsStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsStartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
