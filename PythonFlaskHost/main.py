from flask import Flask, request, jsonify
import os

app = Flask(__name__)

# Configurar la carpeta donde se almacenarán los archivos PDF
UPLOAD_FOLDER = 'E:\HackatonProyecto\ocr_analysis'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Endpoint para recibir archivos PDF
@app.route('/upload_pdf', methods=['POST'])
def upload_pdf():
    # Verificar si se envió el archivo PDF
    if 'archivo' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400

    file = request.files['archivo']

    # Verificar si se seleccionó el archivo
    if file.filename == '':
        return jsonify({"error": "Ningun archivo subido"}), 400

    # Verificar si el ID y el string fueron enviados en el form-data
    if 'grupo_id' not in request.form or 'tipo' not in request.form:
        return jsonify({"error": "Falta un id o un el tipo de archivo"}), 400

    # Capturar el ID y el string del form-data
    try:
        file_id = int(request.form['grupo_id'])  # Convertir el ID a un entero
    except ValueError:
        return jsonify({"error": "id invalido, debe de ser un string"}), 400

    tipo = request.form['tipo']

    # Validar el archivo PDF
    if file and file.filename.endswith('.pdf'):
        # Guardar el archivo PDF
        filename = f"{file_id}_{file.filename}"  # Usar el ID para diferenciar los archivos
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        # Responder con éxito, incluyendo el ID y la descripción
        return jsonify({
            "message": "Archivo subido correctamente",
            "Tipo de archivo": tipo
        }), 200




    else:
        return jsonify({"error": "Invalid file type, only PDFs are allowed"}), 400

# Iniciar la aplicación Flask
if __name__ == '__main__':
    app.run(host='100.90.85.75', port=80)
