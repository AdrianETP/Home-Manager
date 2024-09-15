function expandedBbox = expandBoundingBox(bbox, imgSize)
    marginWidth = 300;
    marginHeight = 80;
    adjustmentLeft = 5;
    adjustmentUp = 5;

    imgWidth = imgSize(2);
    imgHeight = imgSize(1);

    % Expansión hacia los lados
    expandedBbox(1) = max(1, bbox(1) - adjustmentLeft);  % Izquierda
    expandedBbox(2) = max(1, bbox(2) - adjustmentUp);  % Arriba
    expandedBbox(3) = min(imgWidth - expandedBbox(1), bbox(3) + marginWidth);  % Derecha
    expandedBbox(4) = min(imgHeight - expandedBbox(2), bbox(4) + marginHeight);  % Abajo
end
