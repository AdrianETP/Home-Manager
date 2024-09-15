function fechaVencimiento = extractDueDate(extractedText)
    % Expresión regular flexible para capturar diferentes formatos de fecha
    % Acepta espacios entre día, mes, y año (ejemplo: "13 SEP 24")
    datePattern = '(?:\d{1}O|O\d|\d{2})(?:\s*|[\/|\\|\s]*)[A-Za-z]{3}(?:\s*|[\/|\\|\s]*)\d{2,4}(O{0,3})';

    % Buscar el formato de fecha en el texto
    fechaVencimiento = regexp(extractedText, datePattern, 'match', 'once');

    % Verificar si se encontró una fecha
    if ~isempty(fechaVencimiento)
        fechaVencimiento = strtrim(fechaVencimiento);  % Eliminar espacios innecesarios

        % Verificar si la fecha necesita los "/"
        if ~contains(fechaVencimiento, '/')
            % Si la fecha es algo como "13 SEP 24", añadimos los "/"
            if length(fechaVencimiento) == 9  % Para el formato "13 SEP 24"
                day = fechaVencimiento(1:2);
                month = fechaVencimiento(4:6);
                year = fechaVencimiento(8:9);

                % Añadir el "20" al inicio si es un año corto
                year = ['20', year];

                % Reformatear la fecha con "/"
                fechaVencimiento = [day, '/', month, '/', year];

               % Formatear la fecha con "/"
            elseif length(fechaVencimiento) == 7  % Ejemplo: "13SEP24"
                day = fechaVencimiento(1:2);
                month = fechaVencimiento(3:5);
                year = ['20', fechaVencimiento(6:7)];  % Añadir "20" al año corto
    
                % Reformatear la fecha con "/"
                fechaVencimiento = [day, '/', month, '/', year];
             elseif length(fechaVencimiento) == 11  % Ejemplo: "13|SEP|2024"
                day = fechaVencimiento(1:2);
                month = fechaVencimiento(4:6);
                year =  fechaVencimiento(7:11); 
    
                % Reformatear la fecha con "/"
                fechaVencimiento = [day, '/', month, '/', year];
            end    
        end
    

        % Confirmar que la fecha se ha formateado correctamente
        disp(['Fecha formateada: ', fechaVencimiento]);
    else
        disp('No se encontró ninguna fecha válida en el texto.');
    end
end
