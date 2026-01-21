#!/bin/bash

# Script para descargar imágenes de Unsplash para CIEQ Landing Page
# Ejecutar desde la raíz del proyecto: ./download-images.sh

echo "🖼️  Descargando imágenes de Unsplash..."
echo ""

# Crear carpeta de imágenes si no existe
mkdir -p public/images

# Lista de imágenes a descargar
declare -A images=(
    ["hero-hospital-room.jpg"]="https://images.unsplash.com/photo-1648194030154-029d4f71bb32?w=1920&q=80"
    ["medical-stethoscope.jpg"]="https://images.unsplash.com/photo-1584362917165-526a968579e8?w=1200&q=80"
    ["surgical-instruments.jpg"]="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&q=80"
    ["hospital-building.jpg"]="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1920&q=80"
    ["hospital-bed.jpg"]="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=80"
    ["medical-monitor.jpg"]="https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&q=80"
    ["medical-office.jpg"]="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80"
    ["medical-supplies.jpg"]="https://images.unsplash.com/photo-1584362917165-526a968579e8?w=1200&q=80"
    ["rehabilitation-equipment.jpg"]="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
    ["healthcare-professional.jpg"]="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80"
)

# Contador
count=0
total=${#images[@]}

# Descargar cada imagen
for filename in "${!images[@]}"; do
    count=$((count + 1))
    url="${images[$filename]}"
    
    echo "[$count/$total] Descargando $filename..."
    
    # Descargar con curl
    curl -L -o "public/images/$filename" "$url" -s
    
    if [ $? -eq 0 ]; then
        echo "✅ $filename descargado exitosamente"
    else
        echo "❌ Error descargando $filename"
    fi
    
    echo ""
done

echo ""
echo "✨ ¡Descarga completada!"
echo "📁 Las imágenes están en: public/images/"
echo ""
echo "💡 Próximo paso: Ejecuta 'npm run dev' para ver las imágenes en acción"
