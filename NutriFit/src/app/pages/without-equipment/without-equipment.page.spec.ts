import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WithoutEquipmentPage } from './without-equipment.page';

describe('WithoutEquipmentPage', () => {
  let component: WithoutEquipmentPage;
  let fixture: ComponentFixture<WithoutEquipmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutEquipmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
