import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StructureComponent } from './structure.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StructureComponent', () => {
  let component: StructureComponent;
  let fixture: ComponentFixture<StructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StructureComponent,
        BrowserAnimationsModule,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('closeMenu() should close menu on outside of menu', () => {
    component.closeMenu();
    fixture.detectChanges();

    expect(component.menuOpened).toBeFalse();
  });

  it('changeMenuStatus() should close menu when click if menu is opened', () => {
    component.menuOpened = true;
    component.changeMenuStatus();
    fixture.detectChanges();

    expect(component.menuOpened).toBeFalse();
  });

  it('changeMenuStatus() should open menu when click if menu is opened', () => {
    component.menuOpened = false;
    component.changeMenuStatus();
    fixture.detectChanges();

    expect(component.menuOpened).toBeTrue();
  });

  it('ngOnInit() must prepare for trigger onResize method when window is resized', () => {
    const spyOnResize = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    window.dispatchEvent(new Event('resize'));
    expect(spyOnResize).toHaveBeenCalled();
  });
});
