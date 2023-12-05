import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './components/header/header.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-structure',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSidenavModule,
    RouterOutlet,
    MatListModule,
    RouterModule,
    HeaderComponent,
  ],
  templateUrl: './structure.component.html',
  styleUrl: './structure.component.scss',
})
export class StructureComponent implements OnInit {
  isMobile = false;
  menuOpened = true;

  menuItens = [
    { title: 'Dashboard', route: 'dashboard' },
    { title: 'Lista de filmes', route: 'movie-list' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.onresize = () => {
        this.checkMenu();
      };
      this.checkMenu();
    }
  }

  closeMenu() {
    this.menuOpened = false;
  }

  changeMenuStatus() {
    this.menuOpened = !this.menuOpened;
  }

  checkMenu() {
    this.isMobile = window.innerWidth <= 700;
    this.menuOpened = !this.isMobile;
  }
}
