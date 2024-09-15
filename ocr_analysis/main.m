clc;
close all;

% Convertir el archivo PDF a una imagen
recibopdfFile = PDFtoImg(['luzrecibo.pdf']);

% Variables globales para almacenar los resultados
global cantidadPago fechaVencimiento;
cantidadPago = '';
fechaVencimiento = '';

%Datos recibidos
grupo_id = 1;
tipo = "gas";

% Llamada a la función para procesar las imágenes
processImage(recibopdfFile);

% Mostrar los datos extraídos antes de generar el JSON
if ~isempty(cantidadPago) && ~isempty(fechaVencimiento)
    disp('------------------');
    disp(['monto: ', cantidadPago]);
    disp(['fecha_limite: ', fechaVencimiento]);
    disp(['grupo_id',grupo_id]);
    disp(['tipo',tipo]);
    disp('------------------');
else
    disp('No se pudo extraer ambos datos correctamente.');
end


% Generar el JSON
jsonData = generateJSON(cantidadPago, fechaVencimiento,grupo_id,tipo);
disp(jsonData);

%%

enviarJSONaAPI(jsonData,"http://100.79.138.126/recibos/servicios");
