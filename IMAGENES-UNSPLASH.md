# 🖼️ Imágenes de Unsplash para CIEQ Landing Page

## 📥 Imágenes Seleccionadas

He seleccionado imágenes profesionales de alta calidad de Unsplash para tu landing page. Todas son gratuitas para uso comercial.

### Imagen 1: Hero Principal - Sala de Hospital Moderna
**URL**: https://unsplash.com/photos/yQLLZ28esdo/download?force=true&w=1920
**Fotógrafo**: Annie Spratt
**Descripción**: Sala de hospital con equipo médico moderno
**Uso**: Imagen de fondo del Hero
**Nombre archivo**: `hero-hospital-room.jpg`

### Imagen 2: Equipo Médico - Estetoscopio
**URL**: https://unsplash.com/photos/ckWUNxlwI3s/download?force=true&w=1200
**Fotógrafo**: Testalize.me
**Descripción**: Estetoscopio profesional sobre superficie blanca
**Uso**: Sección de Soluciones o Trust Bar
**Nombre archivo**: `medical-stethoscope.jpg`

### Imagen 3: Instrumental Médico
**URL**: https://unsplash.com/photos/qI7USKbZY_A/download?force=true&w=1200
**Fotógrafo**: Piron Guillaume
**Descripción**: Instrumental quirúrgico profesional
**Uso**: Sección de Categorías - Instrumental
**Nombre archivo**: `surgical-instruments.jpg`

### Imagen 4: Hospital Exterior Moderno
**URL**: https://unsplash.com/photos/qYanN54gIrI/download?force=true&w=1920
**Fotógrafo**: Luis Melendez
**Descripción**: Edificio de hospital moderno
**Uso**: Sección de Industrias
**Nombre archivo**: `hospital-building.jpg`

### Imagen 5: Mobiliario Hospitalario
**URL**: https://unsplash.com/photos/hIgeoQjS_iE/download?force=true&w=1200
**Fotógrafo**: Martha Dominguez de Gouveia
**Descripción**: Cama de hospital con equipamiento
**Uso**: Categoría - Mobiliario Hospitalario
**Nombre archivo**: `hospital-bed.jpg`

### Imagen 6: Equipo de Monitoreo
**URL**: https://unsplash.com/photos/KWZa42a1kCs/download?force=true&w=1200
**Fotógrafo**: National Cancer Institute
**Descripción**: Monitor médico y equipo de diagnóstico
**Uso**: Categoría - Diagnóstico y Monitoreo
**Nombre archivo**: `medical-monitor.jpg`

### Imagen 7: Consultorio Médico
**URL**: https://unsplash.com/photos/fyeOxvYvIyY/download?force=true&w=1200
**Fotógrafo**: Ashkan Forouzani
**Descripción**: Interior de consultorio médico limpio y moderno
**Uso**: Sección Sectores - Consultorios
**Nombre archivo**: `medical-office.jpg`

### Imagen 8: Suministros Médicos
**URL**: https://unsplash.com/photos/8bghKxNU1j0/download?force=true&w=1200
**Fotógrafo**: Myriam Zilles
**Descripción**: Suministros y consumibles médicos
**Uso**: Categoría - Consumibles y Suministros
**Nombre archivo**: `medical-supplies.jpg`

### Imagen 9: Equipo de Rehabilitación
**URL**: https://unsplash.com/photos/4_jhDO54BYg/download?force=true&w=1200
**Fotógrafo**: Toa Heftiba
**Descripción**: Equipo de fisioterapia y rehabilitación
**Uso**: Categoría - Rehabilitación y Terapia
**Nombre archivo**: `rehabilitation-equipment.jpg`

### Imagen 10: Profesional de la Salud
**URL**: https://unsplash.com/photos/L7en7Lb-Ovc/download?force=true&w=1200
**Fotógrafo**: National Cancer Institute
**Descripción**: Médico profesional en ambiente clínico
**Uso**: Sección de Testimonios o Hero alternativo
**Nombre archivo**: `healthcare-professional.jpg`

---

## 📥 Cómo Descargar las Imágenes

### Opción 1: Manual (Recomendada)
1. Haz clic en cada URL de arriba
2. Se descargará automáticamente la imagen en alta resolución
3. Renombra el archivo con el nombre sugerido
4. Coloca todas las imágenes en la carpeta `public/images/` de tu proyecto

### Opción 2: Usar el Script Automático
He creado un script que puedes ejecutar para descargar todas las imágenes:

```bash
# Desde la carpeta del proyecto
chmod +x download-images.sh
./download-images.sh
```

### Opción 3: Descargar individualmente desde Unsplash
Si los enlaces directos no funcionan, visita:
- https://unsplash.com
- Busca las imágenes por el nombre del fotógrafo
- Descarga en alta resolución (gratis)

---

## 📁 Estructura de Carpetas

Después de descargar, tu estructura debe verse así:

```
cieq-landing/
├── public/
│   ├── images/
│   │   ├── hero-hospital-room.jpg
│   │   ├── medical-stethoscope.jpg
│   │   ├── surgical-instruments.jpg
│   │   ├── hospital-building.jpg
│   │   ├── hospital-bed.jpg
│   │   ├── medical-monitor.jpg
│   │   ├── medical-office.jpg
│   │   ├── medical-supplies.jpg
│   │   ├── rehabilitation-equipment.jpg
│   │   └── healthcare-professional.jpg
│   └── favicon.svg
```

---

## ✅ Optimización de Imágenes (Recomendado)

Antes de usar las imágenes en producción, optimízalas:

### Con herramientas online:
- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app

### Con línea de comandos:
```bash
# Instalar imagemagick
brew install imagemagick  # macOS
sudo apt install imagemagick  # Linux

# Optimizar todas las imágenes
cd public/images
for img in *.jpg; do
  convert "$img" -quality 85 -resize 1920x "optimized-$img"
done
```

---

## 🎨 Cómo se Usan en el Proyecto

Las imágenes ya están integradas en los componentes:

1. **Hero.astro** - Usa `hero-hospital-room.jpg` como fondo
2. **Categories.astro** - Usa imágenes específicas por categoría
3. **Industries.astro** - Usa `hospital-building.jpg` y `medical-office.jpg`
4. **Solutions.astro** - Usa `medical-stethoscope.jpg`

---

## 📜 Licencia Unsplash

Todas las imágenes de Unsplash son:
✅ Gratis para uso comercial
✅ Sin necesidad de atribución (aunque es apreciada)
✅ Sin derechos de autor

Más info: https://unsplash.com/license

---

## 🎯 Imágenes Alternativas

Si quieres cambiar alguna imagen, busca en Unsplash:
- "medical equipment" - Equipo médico
- "hospital room" - Salas de hospital
- "surgical instruments" - Instrumental quirúrgico
- "healthcare professional" - Profesionales de salud
- "medical supplies" - Suministros médicos
- "hospital building" - Edificios hospitalarios
- "rehabilitation equipment" - Equipo de rehabilitación

---

**Nota**: He actualizado todos los componentes para que ya incluyan las referencias a estas imágenes. Solo necesitas descargarlas y colocarlas en `public/images/`.
