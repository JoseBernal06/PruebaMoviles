import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { supabase } from '../supabase.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  nombre = '';
  apellido = '';
  foto = '';

  constructor(private router: Router) { }

  async ngOnInit() {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error || !session?.user) {
      this.router.navigate(['/auth']);
      return;
    }

    const user = session.user;
    this.nombre = user.user_metadata?.['nombre'] || '';
    this.apellido = user.user_metadata?.['apellido'] || '';
    this.foto = user.user_metadata?.['foto'] || '';
  }

  async logout() {
    await supabase.auth.signOut();
    this.router.navigate(['/auth']);
  }
}