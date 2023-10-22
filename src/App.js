// import './App.css';
import CardBlock from "./components/CardBlock/CardBlock";

function App() {
  const cardContent = [
    {
      id: '1',
      title: "GET your gutter at a DISCOUNT",
      subtitle: "Discount for seniors and military",
      image: "",
      discount: "50",
      countryOfOrigin: "USA",
      text: <>Get an extra <span>FREE</span> gutter cleaning!</>,
      value: "discount50",
    },
    {
      id: '2',
      title: "GET your gutter at a DISCOUNT",
      subtitle: "Discount for seniors",
      image: "",
      discount: "30",
      countryOfOrigin: "USA",
      text: <>Get an extra <span>FREE</span> gutter cleaning!</>,
      value: "discount30",
    },
    {
      id: '3',
      title: "GET your gutter at a DISCOUNT",
      subtitle: "Special offer for everyone",
      image: "",
      discount: "10",
      countryOfOrigin: "USA",
      text: <>Get an extra <span>FREE</span> gutter cleaning!</>,
      value: "discount10",
      disabled: true,
    },
  ];

  return (
    <div className="">
      <h1>Find The Most <span>Effective Gutter Solution</span> For YOU</h1>
      <CardBlock name="gutter-solution" content={cardContent} />
    </div>
  );
}

export default App;
