import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorIngredientStyles from './burger-constructor-ingredient.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { REMOVE_INGREDIENT } from '../../services/actions/burger-constructor';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

export function BurgerConstructorIngredient({ item, uid, index, moveItem }) {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'item',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ opacity }, drag] = useDrag({
    type: 'item',
    item: () => ({ id: item.id, index }),
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });

  if (item.type !== 'bun') drag(drop(ref));

  const removeIngredient = (uid, item) => {
    return { type: REMOVE_INGREDIENT, payload: { uid, item } }
  }
  const removeItem = (e) => {
    dispatch(removeIngredient(uid, item.item));
  };
  
  return (
    <li
      className={`ml-4 ${burgerConstructorIngredientStyles.item}`}
      ref={ref}
      style={{ opacity }}
      onDrop={(e) => e.preventDefault()}
      data-handler-id={handlerId}
    >
      <DragIcon />
      <ConstructorElement
        text={item.item.name}
        price={item.item.price}
        thumbnail={item.item.image}
        handleClose={removeItem}
      />
    </li>
  );
}

BurgerConstructorIngredient.propTypes = {
  index: PropTypes.number.isRequired,
  moveItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    item: PropTypes.oneOfType([ingredientPropTypes]).isRequired,
    uid: PropTypes.string.isRequired,
  }),
};
