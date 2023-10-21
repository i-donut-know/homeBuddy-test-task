import Card from "./../Card/Card";
// import s from "./MyPosts.module.css";

const CardList = (props) => {

  return (
    <div>
      <ul>
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
};

export default CardList;