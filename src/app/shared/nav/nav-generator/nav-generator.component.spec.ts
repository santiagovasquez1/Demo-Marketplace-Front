import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGeneratorComponent } from './nav-generator.component';

describe('NavGeneratorComponent', () => {
  let component: NavGeneratorComponent;
  let fixture: ComponentFixture<NavGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
