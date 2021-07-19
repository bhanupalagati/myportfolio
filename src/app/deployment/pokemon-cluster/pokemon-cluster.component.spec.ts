import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonClusterComponent } from './pokemon-cluster.component';

describe('PokemonClusterComponent', () => {
  let component: PokemonClusterComponent;
  let fixture: ComponentFixture<PokemonClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonClusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
