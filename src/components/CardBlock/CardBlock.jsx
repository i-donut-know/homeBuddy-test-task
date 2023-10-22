// import s from "./MyPosts.module.css";
import { useCallback } from 'react';
import propTypes from 'prop-types';
import { onChangeEventHandler } from './../../tools/handlers';
import noop from './../../tools/noop';

const CardBlock = ({ name, value, title, subtitle, text, image, discount, countryOfOrigin, content, onChange, disabled, selected, ...props }) => {
  const changeHandler = useCallback(
    event => onChangeEventHandler(event, onChange),
    [onChange],
  );
  return (
    <div {...props}>
      {content.map(item => (
        <label key={item.id} selected={value === item.value} style={{ display: "block", cursor: "pointer", marginBottom: "20px" }}>
          <input type="radio" onChange={changeHandler} name={name} value={item.value} aria-checked={value === item.value} />
          <h2>{item.title}</h2>
          <h3>{item.subtitle}</h3>
          <div>{item.discount}%OFF</div>
        </label>
      ))
      }
    </div >
  );
};

CardBlock.defaultProps = {
  value: '',
  onChange: noop,
};

CardBlock.propTypes = {
  content: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      subtitle: propTypes.string.isRequired,
      text: propTypes.node.isRequired,
      value: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  value: propTypes.string,
  onChange: propTypes.func,
};

export default CardBlock;