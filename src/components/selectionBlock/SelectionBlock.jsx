import { useCallback } from 'react';
import propTypes from 'prop-types';

const noop = () => { };

const CardBlock = ({ name, value, content, onChange }) => {
  const onChangeEventHandler = (event, onChange) =>
    onChange(event.target.value, event);

  const changeHandler = useCallback(
    event => onChangeEventHandler(event, onChange),
    [onChange],
  );

  // function changeText(e) {
  //   e.target.closest('.selection__card_selected').getElementsByClassName("selection__subtitle")[0].innerHTML = "Excellent decision!";
  // }

  return (
    <div className="selection__list">
      {content.map(item => (
        <div className="selection__item" key={item.id}>
          <div className={"selection__card" + (item.disabled ? " selection__card_disabled" : "") + (value === item.value ? " selection__card_selected" : "")}>
            <label className="selection__cardInner">
              <input className="selection__input" type="radio" onChange={changeHandler} name={name} value={item.value} aria-checked={value === item.value} disabled={item.disabled} />
              <span className="selection__info">
                <span className="selection__title">{item.title}</span>
                <span className={"selection__subtitle" + (value === item.value ? " selection__subtitle_accent_blue" : " selection__subtitle_accent_green")}>{item.subtitle}</span>
              </span>
              <span className="selection__discount"><span className="selection__discountNumber">{item.discount}</span>%OFF</span>
              <picture>
                <source srcSet={`${require(`./../../images/${item.image}`)}, ${require(`./../../images/${item.imageRetina}`)} 2x`} />
                <img className="selection__image" src={require(`./../../images/${item.image}`)} alt={`Gutter ${item.discount}% off`} />
              </picture>
            </label>
            <picture>
              <source srcSet={`${require(`./../../images/${item.countryImg}`)}, ${require(`./../../images/${item.countryImgRetina}`)} 2x`} />
              <img className="selection__badge" src={require(`./../../images/${item.countryImg}`)} alt={item.countryImgAlt} />
            </picture>
          </div>
          {(() => {
            if (item.disabled) {
              return (
                <div className="selection__text selection__text_accent_green">Sorry, the discount is unavailable</div>
              )
            } else if (value === item.value) {
              return (
                <div className="selection__text">Special offer for everyone!</div>
              )
            } else {
              return (
                <div className="selection__text">{item.text}</div>
              )
            }
          })()}
        </div>
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
  value: propTypes.string,
  name: propTypes.string.isRequired,
  onChange: propTypes.func,
  content: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      subtitle: propTypes.string.isRequired,
      image: propTypes.string.isRequired,
      imageRetina: propTypes.string.isRequired,
      discount: propTypes.string.isRequired,
      countryImg: propTypes.string.isRequired,
      countryImgRetina: propTypes.string.isRequired,
      countryImgAlt: propTypes.string.isRequired,
      text: propTypes.node.isRequired,
      value: propTypes.string.isRequired,
      disabled: propTypes.bool,
    }).isRequired,
  ).isRequired,
};

export default CardBlock;