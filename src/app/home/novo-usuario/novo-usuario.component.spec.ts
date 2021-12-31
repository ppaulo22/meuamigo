import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NnvoUsuarioComponent } from './novo-usuario.component';

describe('NnvoUsuarioComponent', () => {
  let component: NnvoUsuarioComponent;
  let fixture: ComponentFixture<NnvoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NnvoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NnvoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
