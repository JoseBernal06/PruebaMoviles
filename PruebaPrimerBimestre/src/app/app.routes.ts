import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth.page').then((m) => m.AuthPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
  path: 'chat',
  loadComponent: () =>
    import('./chat/chat.page').then((m) => m.ChatPage),
  }
];

export const appRouting = provideRouter(routes);