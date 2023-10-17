import React from 'react';
import { type NextRequest, ImageResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const finalImgWidth = 256;
  const finalImgHeight = 256;
  const logoWidth = 256 * 0.8;
  const logoHeight = 228 * 0.8;

  let generatedImage = new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#20232A',
        }}
      >
        <img
          src="http://localhost:3000/assets/images/logo_react.svg"
          alt="react native"
          width={logoWidth}
          height={logoHeight}
        />
      </div>
    ),
    {
      width: finalImgWidth,
      height: finalImgHeight,
    }
  );

  return generatedImage;
}
