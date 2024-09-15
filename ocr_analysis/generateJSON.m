function jsonData = generateJSON(cantidadPago, fechaVencimiento,grupo_id,tipo)
    if ~isempty(cantidadPago) && ~isempty(fechaVencimiento)
        % Crear el JSON como una estructura y convertirlo a formato JSON en una sola línea
        jsonData = jsonencode(struct('monto', str2double(cantidadPago), 'fecha_limite', fechaVencimiento, 'grupo_id', grupo_id, 'tipo', tipo));
        
        % Mostrar el JSON en la consola
        disp('JSON generado:');
        disp(jsonData);
    else
        % Si faltan datos, devolver una cadena vacía
        jsonData = '';
        disp('No se pudo generar JSON, faltan datos.');
    end
end
