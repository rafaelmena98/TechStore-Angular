import { ComponentFixture, TestBed } from '@angular/core/testing';
// Asegurate de que la ruta apunte al archivo correcto
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent], // Asumiendo que es un componente Standalone
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Normalmente se usa detectChanges() en vez de whenStable() aquí
  });

  // Aquí está la corrección del 'it'
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
