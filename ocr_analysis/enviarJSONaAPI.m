function enviarJSONaAPI(jsonData, apiURL)
    % Configurar las opciones de la solicitud HTTP
    options = weboptions('MediaType', 'application/json', 'Timeout', 10);

    % Enviar el JSON a la API mediante POST
    try
        response = webwrite(apiURL, jsonData, options);
        disp('Respuesta de la API:');
        disp(response);
    catch ME
        disp('Error al enviar el JSON a la API:');
        disp(ME.message);
        
        % Si hay un código de estado HTTP
        if isfield(ME, 'cause') && ~isempty(ME.cause)
            disp(['Código de error HTTP: ', num2str(ME.cause{1}.status)]);
        end
    end
end

