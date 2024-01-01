import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutourdemoiPage } from './autourdemoi.page';

describe('AutourdemoiPage', () => {
  let component: AutourdemoiPage;
  let fixture: ComponentFixture<AutourdemoiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AutourdemoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
