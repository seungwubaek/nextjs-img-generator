import React from 'react';
import { type NextRequest, ImageResponse } from 'next/server';
import { type CSSProperties } from 'react';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const textSize = searchParams.get('textSize') as 'desktop' | 'tablet';
  const lang = (searchParams.get('lang') as 'ko' | 'en') ?? 'ko';

  console.log('testSize:', textSize);
  console.log('lang:', lang);

  const screenWidth = 1920;
  const screenHeight = 648;
  const imgWidth = 1152;
  const mainTitleStyle = {
    fontSize: 78,
    fontWeight: 700,
    lineHeight: 1,
    padding: 0,
    margin: 0,
  } as CSSProperties;
  const subTitleStyle = {
    fontSize: 38,
    fontWeight: 700,
    lineHeight: 1,
    color: '#8F8F8F',
    padding: 0,
    margin: 0,
  } as CSSProperties;
  const nameTitleStyle = {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    display: 'flex',
    marginLeft: -35,
    padding: '5px 50px',
    fontSize: 38,
    fontWeight: 700,
    textAlign: 'center',
    backgroundColor: '#222222',
    borderRadius: 22,
    color: '#FFFFFF',
  } as CSSProperties;

  const notoSansKRBold = await fetch(
    'http://localhost:3000/assets/fonts/static/NotoSansKR-Bold.ttf'
  ).then((res) => res.arrayBuffer());

  let generatedImage;
  if (textSize === 'desktop') {
    generatedImage = new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <img
            src="http://localhost:3001/assets/images/main_hero_with_bg.png"
            alt="main hero"
            width={imgWidth}
            height={screenHeight}
          />
          <div
            style={{
              position: 'absolute',
              top: screenHeight * 0.5 + 30,
              left: '50%',
              display: 'flex',
              flexDirection: 'column',
              transform: 'translate(-10%, -50%)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 40,
              }}
            >
              <span style={mainTitleStyle}>
                {lang === 'ko' ? '7년차' : '7-Year'} FullStack
              </span>
              <span style={mainTitleStyle}>Computer Engineer</span>
            </div>
            <div style={{ display: 'flex', paddingLeft: 80 }}>
              <span style={subTitleStyle}>
                Front-End / Back-End / Data Science
              </span>
            </div>
          </div>
          <div style={nameTitleStyle}>
            {lang === 'ko' ? '백 승 우' : 'Sammy Baek'}
          </div>
        </div>
      ),
      {
        width: screenWidth,
        height: screenHeight,
        fonts: [
          {
            name: 'NotoSansKR',
            data: notoSansKRBold,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    );
  } else if (textSize === 'tablet') {
    generatedImage = new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <img
            src="http://localhost:3001/assets/images/main_hero_with_bg.png"
            alt="main hero"
            width={imgWidth}
            height={screenHeight}
          />
          <div
            style={{
              position: 'absolute',
              top: screenHeight * 0.5 + 30,
              left: '50%',
              display: 'flex',
              flexDirection: 'column',
              transform: 'translate(-10%, -50%)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 40,
              }}
            >
              <span style={mainTitleStyle}>
                {lang === 'ko' ? '7년차' : '7-Year'} FullStack
              </span>
              <span style={mainTitleStyle}>Computer Engineer</span>
            </div>
            <div style={{ display: 'flex', paddingLeft: 80 }}>
              <span style={subTitleStyle}>
                Front-End / Back-End / Data Science
              </span>
            </div>
          </div>
          <div style={nameTitleStyle}>
            {lang === 'ko' ? '백 승 우' : 'Sammy Baek'}
          </div>
        </div>
      ),
      {
        width: screenWidth,
        height: screenHeight,
        fonts: [
          {
            name: 'NotoSansKR',
            data: notoSansKRBold,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    );
  }

  return generatedImage;
}
