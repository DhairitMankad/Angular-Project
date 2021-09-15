import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCrisesComponent } from './manage-crises.component';

describe('ManageCrisisComponent', () => {
  let component: ManageCrisesComponent;
  let fixture: ComponentFixture<ManageCrisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCrisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCrisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
