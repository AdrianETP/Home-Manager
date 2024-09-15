function extractedValue = extractFromBoundingBox(img, bboxes, tipo)
    for j = 1:size(bboxes, 1)
        % Expande el bounding box para mejorar la lectura
        expandedBbox = expandBoundingBox(bboxes(j, :), size(img));

        % Recorta la imagen en esa área expandida
        croppedImg = imcrop(img, expandedBbox);

        % Aplicar OCR solo a la región recortada
        ocrResultCropped = ocr(croppedImg);
        extractedText = ocrResultCropped.Text;

        % Limpiar espacios en blanco adicionales
        extractedText = strtrim(extractedText);  % Quitar espacios al inicio y al final
        extractedText = regexprep(extractedText, '\s+', ' ');  % Reemplazar múltiples espacios con uno solo

        % Depuración para verificar el texto limpio
        disp(['Texto limpio extraído de la región ', num2str(j), ':']);
        disp(extractedText);

        % Procesar según el tipo
        if strcmp(tipo, 'TotalAPagar')
            extractedValue = extractPaymentAmount(extractedText);
            return;
        elseif strcmp(tipo, 'FechaVencimiento')
            extractedValue = extractDueDate(extractedText);
            return;
        end
    end
    extractedValue = '';
end
