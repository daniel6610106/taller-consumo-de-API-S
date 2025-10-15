import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCards } from './componente-cards';

describe('ComponenteCards', () => {
  let component: ComponenteCards;
  let fixture: ComponentFixture<ComponenteCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
