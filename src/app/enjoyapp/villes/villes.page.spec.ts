import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VillesPage } from './villes.page';

describe('VillesPage', () => {
  let component: VillesPage;
  let fixture: ComponentFixture<VillesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VillesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
