# Harry Potter API Web

Aplicación web construida con **React**, **TypeScript** y **Vite** que consume la [HP-API](https://hp-api.onrender.com/) para mostrar personajes y hechizos del universo de Harry Potter. Incluye paginación, selector de temas (inspirados en las casas de Hogwarts), y una interfaz moderna usando **TailwindCSS** y **DaisyUI**.

## Características

- Listado y filtrado de personajes por casa.
- Listado de hechizos con paginación.
- Selector de tema visual (Gryffindor, Slytherin, Hufflepuff, Ravenclaw, Luxury).
- Navegación SPA con React Router.
- Consumo de API con Axios.
- Estilos modernos con TailwindCSS y DaisyUI.

## Estructura del Proyecto

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── package.json
├── vite.config.ts
├── tsconfig*.json
└── ...
```

## Dependencias Principales

- **react**: Librería principal para construir la UI.
- **react-dom**: Renderizado de componentes React en el DOM.
- **react-router-dom**: Navegación SPA.
- **axios**: Cliente HTTP para consumir la API.
- **tailwindcss**: Framework de utilidades CSS.
- **daisyui**: Plugin de componentes para TailwindCSS.
- **@tailwindcss/vite**: Integración de TailwindCSS con Vite.
- **motion**: Animaciones (opcional, según uso en el proyecto).

## Dependencias de Desarrollo

- **typescript**: Tipado estático.
- **@vitejs/plugin-react**: Integración de React con Vite.
- **eslint** y plugins: Linting para JS/TS y React.
- **@types/react**, **@types/react-dom**: Tipos para React.
- **typescript-eslint**: Linting para TypeScript.
- **vite**: Bundler ultrarrápido para desarrollo y producción.

## Scripts Disponibles

En el archivo [`package.json`](package.json):

| Comando         | Descripción                                 |
|-----------------|---------------------------------------------|
| `npm run dev`   | Inicia el servidor de desarrollo (Vite)     |
| `npm run build` | Compila el proyecto para producción         |
| `npm run preview` | Previsualiza el build de producción       |
| `npm run lint`  | Ejecuta ESLint sobre el código fuente       |

## Instalación y Uso

1. **Clona el repositorio**  
   ```sh
   git clone <url-del-repo>
   cd HarryPotter-Api-Web
   ```

2. **Instala las dependencias**  
   ```sh
   npm install
   ```

3. **Inicia el servidor de desarrollo**  
   ```sh
   npm run dev
   ```

4. **Abre la aplicación**  
   Ve a [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite).

5. **Build para producción**  
   ```sh
   npm run build
   ```

6. **Previsualiza el build**  
   ```sh
   npm run preview
   ```

7. **Linting**  
   ```sh
   npm run lint
   ```

## Configuración de Temas

Los temas personalizados están definidos en [`src/App.css`](src/App.css) usando DaisyUI y pueden seleccionarse desde el componente ThemeSelector.

## Estructura de Componentes

- [`src/components/NavBar.tsx`](src/components/NavBar.tsx): Barra de navegación principal.
- [`src/components/CharacterView.tsx`](src/components/CharacterView.tsx): Vista de personajes.
- [`src/components/SpellsView.tsx`](src/components/SpellsView.tsx): Vista de hechizos.
- [`src/components/ThemeSelector.tsx`](src/components/ThemeSelector.tsx): Selector de tema.
- [`src/components/Pagination.tsx`](src/components/Pagination.tsx): Componente de paginación.
- [`src/data/hpApi.ts`](src/data/hpApi.ts): Funciones para consumir la API de Harry Potter.
- [`src/types/harryPotterTypes.ts`](src/types/harryPotterTypes.ts): Tipos TypeScript para personajes y hechizos.

## Notas

- El proyecto utiliza **Vite** para desarrollo rápido y build optimizado.
- Los estilos están basados en **TailwindCSS** y **DaisyUI** para una personalización sencilla.
- Puedes modificar los temas en `src/App.css` para cambiar los colores de las casas.

---

