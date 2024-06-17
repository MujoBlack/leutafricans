'use client';

import { useState, useEffect } from 'react';
import SwatchImage from './SwatchImage';

interface SwatchSelectorProps {
  colors: Array<{ colorName: string; swatchUrl: { url: string }; id: string }>;
}

const SwatchSelector = ({ colors }: SwatchSelectorProps) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  useEffect(() => {
    if (colors.length > 0) {
      setSelectedColor(colors[0]);
    }
  }, [colors]);

  const handleSwatchClick = (color: typeof colors[0]) => {
    setSelectedColor(color);
  };

  if (colors.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-sm font-medium text-gray-900">
        Color: {selectedColor.colorName}
      </h2>
      <div className="mt-4 flex items-center space-x-4">
        {colors.map((colorObj) => (
          <div
            key={colorObj.id}
            className={`flex items-center cursor-pointer ${
              selectedColor.id === colorObj.id ? 'border border-yellow-900 rounded-full' : ''
            }`}
            onClick={() => handleSwatchClick(colorObj)}
          >
            <SwatchImage src={colorObj.swatchUrl.url} alt={colorObj.colorName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwatchSelector;
