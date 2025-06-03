import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { supabase } from '../supabase.client';

@Component({
    standalone: true,
    imports: [CommonModule, IonicModule, FormsModule],
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
    email = '';
    password = '';
    error = '';
    view = 'inicio';
    nombre = '';
    apellido = '';
    foto = '';
    fotoFile: File | null = null; 

    constructor(private router: Router) {}

    onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.fotoFile = file;
        }
    }

    async login() {
        const { error } = await supabase.auth.signInWithPassword({
            email: this.email,
            password: this.password,
        });
        if (error) this.error = error.message;
        else this.router.navigate(['/home']);
    }

    async register() {
        let fotoUrl = '';
        if (this.fotoFile) {
            const filePath = `usuarios/${Date.now()}_${this.fotoFile.name}`;
            const { error: uploadError } = await supabase.storage
                .from('documentos') 
                .upload(filePath, this.fotoFile);

            if (uploadError) {
                this.error = uploadError.message;
                return;
            }
            const { data } = supabase.storage.from('documentos').getPublicUrl(filePath);
            fotoUrl = data.publicUrl;
        }

        const { error } = await supabase.auth.signUp({
            email: this.email,
            password: this.password,
            options: {
                data: {
                    nombre: this.nombre,
                    apellido: this.apellido,
                    foto: fotoUrl,
                }
            }
        });
        if (error) this.error = error.message;
        else alert('Registro exitoso. Verifica tu email.');
    }
}