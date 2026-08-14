# ILLUX — Entrega final con nuevo icono

## Archivos finales

La carpeta final debe quedar así:

```text
illux/
├── index.html
├── sw.js
└── icon.jpg
```

La imagen que enviaste debe guardarse como:

```text
icon.jpg
```

No cambies ese nombre ni la extensión.

## Cambios aplicados al diseño

### 1. Logo del encabezado

En `index.html`, busca:

```html
<div class="logo"><span class="box">▶</span>ILLUX</div>
```

Reemplázalo por:

```html
<div class="logo">
  <img class="app-logo" src="icon.jpg" alt="Logo de ILLUX">
  <span>ILLUX</span>
</div>
```

### 2. Icono del navegador y del teléfono

Dentro de `<head>`, añade estas líneas después de `<title>ILLUX</title>`:

```html
<link rel="icon" type="image/jpeg" href="icon.jpg">
<link rel="apple-touch-icon" href="icon.jpg">
<meta name="theme-color" content="#000000">
```

### 3. Estilo del nuevo icono

Dentro de `<style>`, añade:

```css
.app-logo{
  width:32px;
  height:32px;
  border-radius:8px;
  object-fit:cover;
  display:block;
  background:#000;
}
```

Si todavía existe el estilo anterior `.box`, puedes dejarlo: ya no se utilizará en el logo.

## Publicación final

1. Guarda la imagen que enviaste como `icon.jpg`.
2. Colócala junto a `index.html` y `sw.js`.
3. Abre `index.html` para comprobar que aparece el dragón junto a ILLUX.
4. Entra en:

```text
https://app.netlify.com/drop
```

5. Arrastra la carpeta completa `illux`.
6. Abre la nueva URL en el teléfono.
7. En Android: Chrome → menú `⋮` → **Instalar aplicación** o **Agregar a pantalla de inicio**.
8. En iPhone: Safari → **Compartir** → **Agregar a pantalla de inicio**.

## Importante

El icono se verá dentro de la app, en la pestaña del navegador y en el acceso directo de la pantalla de inicio. El fondo negro de la imagen se conservará y combinará con el diseño oscuro de ILLUX.

La app multiusuario seguirá usando Firebase para las cuentas y el catálogo, y Cloudinary para los videos. El icono no cambia esas funciones ni la moderación.