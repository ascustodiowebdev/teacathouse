import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkBoothComponent } from './work-booth.component';

describe('WorkBoothComponent', () => {
  let component: WorkBoothComponent;
  let fixture: ComponentFixture<WorkBoothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkBoothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
