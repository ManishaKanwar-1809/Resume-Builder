import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFoemComponent } from './template-foem.component';

describe('TemplateFoemComponent', () => {
  let component: TemplateFoemComponent;
  let fixture: ComponentFixture<TemplateFoemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFoemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
