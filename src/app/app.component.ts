import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSlideToggleModule,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'pior-filme';

  isMobile = false;
  menuOpened = true;

  ngOnInit() {
    window.onresize = (e) => {
      this.checkMenu();
    };
    this.checkMenu();
  }

  checkMenu() {
    this.isMobile = window.innerWidth <= 600;
  }

  changeMenuStatus() {
    this.menuOpened = !this.menuOpened;
  }
}
