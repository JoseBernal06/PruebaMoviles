import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { supabase } from '../supabase.client';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonItem,
    IonInput
  ]
})
export class ChatPage implements OnInit {
  mensajes: any[] = [];
  mensaje = '';
  user: any;

  async ngOnInit() {
  const { data: { session } } = await supabase.auth.getSession();
  this.user = session?.user;
  await this.cargarMensajes();

  // Suscripción en tiempo real
  supabase
    .channel('mensajes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'mensajes' }, async payload => {
      console.log('Evento en tiempo real:', payload);
      await this.cargarMensajes();
    })
    .subscribe();
  }

  async cargarMensajes() {
    const { data } = await supabase
      .from('mensajes')
      .select('*')
      .order('created_at', { ascending: true });
    this.mensajes = data || [];
  }

  async enviarMensaje() {
    if (!this.mensaje.trim()) return;
    const { data, error } = await supabase.from('mensajes').insert([{
      usuario_id: this.user.id,
      nombre: this.user.user_metadata?.['nombre'] || 'Anónimo',
      foto: this.user.user_metadata?.['foto'] || '',
      mensaje: this.mensaje
    }]);
    console.log('Mensaje enviado:', this.mensaje, 'Respuesta:', data, 'Error:', error);
    this.mensaje = '';
  }
}