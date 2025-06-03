import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  characters: any[] = [];
  allCharacters: any[] = [];
  page = 1;
  loading = false;
  searchText: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadCharacters();
  }

  async loadCharacters() {
    if (this.loading) return;
    this.loading = true;

    try {
      const res = await this.http
        .get<any>(`https://rickandmortyapi.com/api/character?page=${this.page}`)
        .toPromise();

      this.allCharacters = [...this.allCharacters, ...res.results];
      this.buscarPersonaje();
      this.page++;
    } catch (error) {
      console.error('Error al cargar personajes:', error);
    } finally {
      this.loading = false;
    }
  }

  buscarPersonaje() {
    const texto = this.searchText.trim().toLowerCase();

    if (!texto) {
      this.characters = [...this.allCharacters];
    } else {
      this.characters = this.allCharacters.filter(c =>
        c.name.toLowerCase().includes(texto)
      );
      if (this.characters.length === 0) {
        this.characters = [{ name: 'No se encontraron resultados', image: '' }];
      }
    }
  }

  refrescarPersonajes() {
    this.page = 1;
    this.characters = [];
    this.allCharacters = [];
    this.searchText = '';
    this.loadCharacters();
  }

  getImageUrl(personaje: any): string {
    return personaje?.image || 'assets/placeholder.png';
  }
}