function processImage(recibopdfFile)
    global cantidadPago fechaVencimiento;  % Declarar las variables globales
    
    % Iterar sobre cada imagen y aplicar OCR
    for i = 1:numel(recibopdfFile)
        if ~isempty(cantidadPago) && ~isempty(fechaVencimiento)
            break;  % Si ambos datos ya han sido encontrados, salir
        end

        % Leer la imagen
        img = imread(recibopdfFile{i});
        figure;
        imshow(img);
        title(['Imagen completa de la página ', num2str(i)]);

        % Aplicar OCR a toda la imagen
        ocrResults = ocr(img);
        disp('Texto completo extraído por OCR:');
        disp(ocrResults.Text);

        % Buscar y extraer la cantidad de pago ("TOTAL A PAGAR")
        if isempty(cantidadPago)
            bboxesTotalPagar = locateText(ocrResults, "TOTAL A PAGAR", IgnoreCase=true);
            if ~isempty(bboxesTotalPagar)
                % Generar un recuadro y aplicar OCR solo en esa área
                cantidadPago = extractFromBoundingBox(img, bboxesTotalPagar, 'TotalAPagar');
                
                % Confirmar la asignación de cantidadPago
                disp(['Cantidad de Pago extraída y asignada: ', cantidadPago]);
            end
        end

        % Buscar y extraer la fecha de vencimiento ("VENCIMIENTO" o "FECHA LIMITE")
        if isempty(fechaVencimiento)
            bboxesFechaVencimiento = locateText(ocrResults, ["FECHA LIMITE", "VENCIMIENTO"], IgnoreCase=true);
            if ~isempty(bboxesFechaVencimiento)
                % Generar un recuadro y aplicar OCR solo en esa área
                fechaVencimiento = extractFromBoundingBox(img, bboxesFechaVencimiento, 'FechaVencimiento');
                
                % Confirmar la asignación de fechaVencimiento
                if ~isempty(fechaVencimiento)
                    disp(['Fecha de Vencimiento extraída y asignada: ', fechaVencimiento]);
                else
                    disp('No se pudo extraer una fecha válida.');
                end
            end
        end
    end
end
