import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisTablaComponent } from './pais-tabla.component';

describe('PaisTablaComponent', () => {
  let component: PaisTablaComponent;
  let fixture: ComponentFixture<PaisTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
