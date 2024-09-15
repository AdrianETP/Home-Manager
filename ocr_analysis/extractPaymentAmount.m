function cantidadPago = extractPaymentAmount(extractedText)
    % Eliminar todos los espacios dentro del número
    cleanedText = regexprep(extractedText, '\s+', '');  % Eliminar espacios

    % Expresión regular para encontrar números con comas o puntos decimales
    % Maneja tanto comas como separadores de miles y puntos como decimales
    cantidadPago = regexp(cleanedText, '\d+(?:,\d{3})*(?:\.\d+)?', 'match', 'once');

    % Si se encuentra un número, procesarlo
    if ~isempty(cantidadPago)
        % Eliminar comas que representan miles
        cantidadPago = regexprep(cantidadPago, ',', '');

        % Si el número contiene un punto en una posición incorrecta, eliminarlo
        % Verificamos si hay un punto seguido de solo 2 dígitos (decimales)
        if contains(cantidadPago, '.')
            % Eliminar el punto si no está en una posición de decimales válidos
            pointPosition = strfind(cantidadPago, '.');
            if length(cantidadPago) - pointPosition > 2
                cantidadPago = regexprep(cantidadPago, '\.', '');  % Eliminar puntos incorrectos
            end
        end

        % Eliminar espacios innecesarios (por si quedan)
        cantidadPago = strtrim(cantidadPago);
    else
        cantidadPago = '';  % Si no se encuentra nada, devolver una cadena vacía
    end
end
