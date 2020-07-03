import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibFrontendComponent } from './lib-frontend.component';

describe('LibFrontendComponent', () => {
  let component: LibFrontendComponent;
  let fixture: ComponentFixture<LibFrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibFrontendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
