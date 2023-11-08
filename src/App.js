import { useState } from 'react';

import { SelectionBlock } from "./components/selectionBlock";

function App() {
  const cardContent = [
    {
      id: '1',
      title: "GET your gutter at a DISCOUNT",
      subtitle: "Discount for seniors and military",
      imageWebp: "gutter-01.webp",
      imageRetinaWebp: "gutter-01@2x.webp",
      image: "gutter-01.jpg",
      imageRetina: "gutter-01@2x.jpg",
      discount: "50",
      countryImgWebp: "badge-usa.webp",
      countryImgRetinaWebp: "badge-usa@2x.webp",
      countryImg: "badge-usa.png",
      countryImgRetina: "badge-usa@2x.png",
      countryImgAlt: "Made in America",
      text: <>Get an extra <span className="selection__text_accent selection__text_accent_green selection__text_accent_bold">FREE</span> gutter cleaning!</>,
      value: "discount50",
    },
    {
      id: '2',
      title: "GET your gutter at a DISCOUNT",
      subtitle: "Discount for seniors",
      imageWebp: "gutter-02.webp",
      imageRetinaWebp: "gutter-02@2x.webp",
      image: "gutter-02.jpg",
      imageRetina: "gutter-02@2x.jpg",
      discount: "30",
      countryImgWebp: "badge-usa.webp",
      countryImgRetinaWebp: "badge-usa@2x.webp",
      countryImg: "badge-usa.png",
      countryImgRetina: "badge-usa@2x.png",
      countryImgAlt: "Made in America",
      text: <>Get an extra <span className="selection__text_accent selection__text_accent_green selection__text_accent_bold">FREE</span> gutter cleaning!</>,
      value: "discount30",
    },
    {
      id: '3',
      title: "GET your gutter at a DISCOUNT",
      subtitle: "Special offer for everyone",
      imageWebp: "gutter-03.webp",
      imageRetinaWebp: "gutter-03@2x.webp",
      image: "gutter-03.jpg",
      imageRetina: "gutter-03@2x.jpg",
      discount: "10",
      countryImgWebp: "badge-usa.webp",
      countryImgRetinaWebp: "badge-usa@2x.webp",
      countryImg: "badge-usa.png",
      countryImgRetina: "badge-usa@2x.png",
      countryImgAlt: "Made in America",
      text: <>Get an extra <span className="selection__text_accent selection__text_accent_green selection__text_accent_bold">FREE</span> gutter cleaning!</>,
      value: "discount10",
      disabled: true,
    },
    {
      id: '4',
      title: "GET your gutter at a DISCOUNT",
      subtitle: "Special offer for everyone",
      imageWebp: "gutter-03.webp",
      imageRetinaWebp: "gutter-03@2x.webp",
      image: "gutter-03.jpg",
      imageRetina: "gutter-03@2x.jpg",
      discount: "10",
      countryImgWebp: "badge-usa.webp",
      countryImgRetinaWebp: "badge-usa@2x.webp",
      countryImg: "badge-usa.png",
      countryImgRetina: "badge-usa@2x.png",
      countryImgAlt: "Made in America",
      text: <>Get an extra <span className="selection__text_accent selection__text_accent_green selection__text_accent_bold">FREE</span> gutter cleaning!</>,
      value: "discount10-2",
    },
    {
      id: '5',
      title: "GET your gutter at a DISCOUNT",
      subtitle: "Special offer for everyone",
      imageWebp: "gutter-03.webp",
      imageRetinaWebp: "gutter-03@2x.webp",
      image: "gutter-03.jpg",
      imageRetina: "gutter-03@2x.jpg",
      discount: "10",
      countryImgWebp: "badge-usa.webp",
      countryImgRetinaWebp: "badge-usa@2x.webp",
      countryImg: "badge-usa.png",
      countryImgRetina: "badge-usa@2x.png",
      countryImgAlt: "Made in America",
      text: <>Get an extra <span className="selection__text_accent selection__text_accent_green selection__text_accent_bold">FREE</span> gutter cleaning!</>,
      value: "discount10-3",
    },
  ];

  const [value, setValue] = useState(cardContent[0].value);

  return (
    <main>
      <section className="selection">
        <div className="selection__inner">
          <h1 className="selection__heading">Find The Most <span className="selection__heading_accent">Effective Gutter Solution</span> For YOU</h1>
          <SelectionBlock value={value} name="gutter-solution" content={cardContent} onChange={val => setValue(val)} />
        </div>
      </section>
    </main>
  );
}

export default App;
