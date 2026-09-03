#!/bin/bash

set -e

BASE_DIR="public/resources/chapter-1"

echo ""
echo "=============================================="
echo "   Creando recursos base del Capítulo 1"
echo "=============================================="
echo ""

mkdir -p "$BASE_DIR"

create_placeholder() {
  FILE_NAME="$1"
  TITLE="$2"
  DESCRIPTION="$3"

  FILE_PATH="$BASE_DIR/$FILE_NAME"

  if [ -f "$FILE_PATH" ]; then
    echo "⏭  Ya existe: $FILE_PATH"
    return
  fi

  cat > "$FILE_PATH" <<EOF
RECURSO SABG-BUAP
=================

Nombre:
$TITLE

Archivo PDF esperado:
${FILE_NAME%.txt}.pdf

Descripción:
$DESCRIPTION

INSTRUCCIONES
-------------
1. Descargar la versión oficial y vigente del documento.
2. Verificar que provenga de una fuente oficial.
3. Guardar el PDF en esta misma carpeta.
4. Utilizar exactamente este nombre:

${FILE_NAME%.txt}.pdf

5. Cuando el PDF esté agregado correctamente, este archivo TXT puede eliminarse.
EOF

  echo "✅ Creado: $FILE_PATH"
}

# =========================================================
# 1. GUÍA Y AUTOEVALUACIÓN
# =========================================================

create_placeholder \
  "01-guia-sabg-capitulo-1.txt" \
  "Guía SABG-BUAP - Capítulo 1" \
  "Contenido correspondiente al Capítulo 1 sobre Buen Gobierno y Gobernanza Municipal."

create_placeholder \
  "02-formato-autoevaluacion-capitulo-1.txt" \
  "Formato de Autoevaluación - Capítulo 1" \
  "Formato de referencia para la autoevaluación de componentes del Buen Gobierno."

# =========================================================
# 2. MARCO CONSTITUCIONAL
# =========================================================

create_placeholder \
  "03-constitucion-politica-estados-unidos-mexicanos.txt" \
  "Constitución Política de los Estados Unidos Mexicanos" \
  "Recurso normativo federal. Para este capítulo son especialmente relevantes los artículos 2, 3, 6, 21, 73 fracción XXIII, 115 y 134."

create_placeholder \
  "04-constitucion-politica-estado-puebla.txt" \
  "Constitución Política del Estado Libre y Soberano de Puebla" \
  "Marco constitucional estatal. Para este capítulo son especialmente relevantes los artículos 12, 102, 103, 104, 105 y 106."

# =========================================================
# 3. MARCO MUNICIPAL Y ADMINISTRATIVO
# =========================================================

create_placeholder \
  "05-ley-organica-municipal-puebla.txt" \
  "Ley Orgánica Municipal del Estado de Puebla" \
  "Regula la organización, funcionamiento, competencias y administración de los ayuntamientos."

create_placeholder \
  "06-ley-planeacion.txt" \
  "Ley de Planeación" \
  "Marco relacionado con los procesos de planeación. El capítulo refiere especialmente los artículos 2, 14, 33 y 34."

create_placeholder \
  "07-ley-general-asentamientos-humanos.txt" \
  "Ley General de Asentamientos Humanos, Ordenamiento Territorial y Desarrollo Urbano" \
  "Normativa federal vinculada con ordenamiento territorial y desarrollo urbano."

create_placeholder \
  "08-ley-general-equilibrio-ecologico.txt" \
  "Ley General del Equilibrio Ecológico y la Protección al Ambiente" \
  "Normativa ambiental vinculada con competencias municipales. El capítulo refiere los artículos 1, 7, 8, 14 Bis, 112, 159 y 189."

create_placeholder \
  "09-ley-aguas-nacionales.txt" \
  "Ley de Aguas Nacionales" \
  "Normativa relacionada con la gestión del agua. El capítulo refiere los artículos 13 y 44 al 47."

create_placeholder \
  "10-ley-agraria.txt" \
  "Ley Agraria" \
  "Normativa federal relacionada con el régimen agrario. El capítulo refiere el artículo 3."

create_placeholder \
  "11-ley-general-desarrollo-forestal-sustentable.txt" \
  "Ley General de Desarrollo Forestal Sustentable" \
  "Normativa relacionada con desarrollo forestal sustentable. El capítulo refiere el artículo 6."

create_placeholder \
  "12-ley-general-responsabilidades-administrativas.txt" \
  "Ley General de Responsabilidades Administrativas" \
  "Marco normativo en materia de responsabilidades de las personas servidoras públicas."

# =========================================================
# 4. TRANSPARENCIA Y RENDICIÓN DE CUENTAS
# =========================================================

create_placeholder \
  "13-ley-transparencia-puebla.txt" \
  "Ley de Transparencia y Acceso a la Información Pública del Estado de Puebla" \
  "Normativa estatal sobre transparencia, acceso a la información y rendición de cuentas."

create_placeholder \
  "14-lineamientos-tecnicos-generales-transparencia.txt" \
  "Lineamientos Técnicos Generales de Obligaciones de Transparencia" \
  "Lineamientos relacionados con la publicación, homologación y estandarización de las obligaciones de transparencia."

create_placeholder \
  "15-criterios-tecnicos-generales-transparencia-puebla.txt" \
  "Criterios Técnicos Generales de Transparencia del Estado de Puebla" \
  "Criterios técnicos aplicables a la información de obligaciones de transparencia."

create_placeholder \
  "16-lineamientos-clasificacion-desclasificacion.txt" \
  "Lineamientos Generales en materia de clasificación y desclasificación de la información" \
  "Lineamientos relativos a clasificación, desclasificación y elaboración de versiones públicas."

# =========================================================
# 5. INTEGRIDAD Y ÉTICA
# =========================================================

create_placeholder \
  "17-codigo-etica-integridad-buen-gobierno.txt" \
  "Código de Ética e Integridad para un Buen Gobierno" \
  "Documento de referencia sobre principios, valores y reglas de conducta de las personas servidoras públicas."

echo ""
echo "=============================================="
echo "   ✅ Recursos del Capítulo 1 creados"
echo "=============================================="
echo ""
echo "Ubicación:"
echo "  $BASE_DIR"
echo ""
echo "Archivos creados:"
find "$BASE_DIR" -maxdepth 1 -type f -name "*.txt" | sort
echo ""