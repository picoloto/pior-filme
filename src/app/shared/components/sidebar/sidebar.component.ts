import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSidenavModule,
    RouterOutlet,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() isMobile = false;
  @Input() menuOpened = true;

  menuItens = [
    { title: 'Dashboard', route: 'dashboard' },
    { title: 'List', route: 'movie-list' },
  ];
}
