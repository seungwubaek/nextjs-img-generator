import React from 'react';
import { type NextRequest, ImageResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const finalImgWidth = 256;
  const finalImgHeight = 256;
  const logoWidth = 256;
  const logoHeight = 144;
  // const logoWidth = 3840;
  // const logoHeight = 2160;

  let generatedImage = new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            height: '100%',
            padding: '0 20px',
          }}
        >
          <img
            src="http://localhost:3000/assets/images/logo_meta.png"
            alt="meta faiss"
            width={logoWidth * 0.4}
            height={logoHeight * 0.4}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            FAISS
          </div>
        </div>
      </div>
    ),
    {
      width: finalImgWidth,
      height: finalImgHeight,
    }
  );

  return generatedImage;
}
