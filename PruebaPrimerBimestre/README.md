# App Móviles GR2 - Chat y Buscador Rick and Morty

## Descripción

Esta aplicación móvil fue desarrollada con **Ionic + Angular** y utiliza **Supabase** como backend para el chat en tiempo real y la API pública de **Rick and Morty** para el buscador de personajes. Permite a los usuarios autenticados enviar mensajes de texto, ubicación y fotos en tiempo real, así como buscar información de personajes de la serie.

---

## Funcionalidades principales

### 1. **Chat en tiempo real**
- Autenticación de usuarios con Supabase Auth.
- Envío y visualización de mensajes en tiempo real usando canales de Supabase.
- Envío de mensajes de texto, enlaces de ubicación (Google Maps) y fotos (capturadas desde la cámara o seleccionadas).
- Visualización del nombre y foto del usuario junto a cada mensaje.
- Actualización automática del chat sin recargar la pantalla.

### 2. **Buscador de personajes Rick and Morty**
- Búsqueda de personajes por nombre usando la API pública.
- Visualización de nombre, especie, estado, origen y foto de cada personaje.
- Interfaz amigable y responsive.

---

## Actividades realizadas

### Configuración inicial
- Creación del proyecto Ionic Angular.
- Instalación y configuración de Supabase y Capacitor.
- Configuración de autenticación y políticas RLS en Supabase.

### Chat en tiempo real
- Implementación de la interfaz de chat con Ionic.
- Conexión a Supabase para insertar y leer mensajes.
- Suscripción a eventos en tiempo real (`postgres_changes`) para actualización automática.
- Visualización de nombre y foto del usuario en cada mensaje.
- Implementación de envío de ubicación usando la API de geolocalización.
- Implementación de envío de fotos usando la cámara (Capacitor Camera API).
- Lógica para mostrar mensajes de texto, enlaces de ubicación y fotos correctamente en el chat.

### Buscador Rick and Morty
- Creación de página y servicio para consumir la API de Rick and Morty.
- Implementación de búsqueda por nombre y filtrado de resultados.
- Visualización de información relevante de cada personaje.
- Manejo de estados de carga y mensajes de error.

### Mejoras y detalles
- Manejo de errores y validaciones en formularios.
- Mejoras visuales y de estilos en los componentes.
- Limpieza de código y organización de servicios.
- Documentación y comentarios en el código.

---


## Dependencias principales

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [Supabase JS](https://supabase.com/docs/reference/javascript)
- [@capacitor/camera](https://capacitorjs.com/docs/apis/camera)
- [@capacitor/filesystem](https://capacitorjs.com/docs/apis/filesystem)
- [Rick and Morty API](https://rickandmortyapi.com/)
