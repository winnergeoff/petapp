import React from 'react';
import { View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const PixelMatrix = ({ matrix }) => {
  const pixelSize = 10; // Size of each pixel

  return (
    <View>
      <Svg width={matrix[0].length * pixelSize} height={matrix.length * pixelSize}>
        {matrix.map((row, rowIndex) =>
          row.map((value, columnIndex) => (
            <Rect
              key={`${rowIndex}-${columnIndex}`}
              x={columnIndex * pixelSize}
              y={rowIndex * pixelSize}
              width={pixelSize}
              height={pixelSize}
              fill={value === 1 ? 'black' : 'white'}
            />
          ))
        )}
      </Svg>
    </View>
  );
};

export default PixelMatrix;