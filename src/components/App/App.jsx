import { useEffect, useCallback } from 'react';
import './App.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../services/actions/burger-ingredients';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const ingredients = useSelector(
    (store) => store.burgerIngredients.ingredients
  );
  const isLoading = useSelector(
    (store) => store.burgerIngredients.ingredientsRequest
  );
  const hasError = useSelector(
    (store) => store.burgerIngredients.ingredientsFailed
  );

  const dispatch = useDispatch();

  const getContent = useCallback(() => {
    if (isLoading) {
      return (
        <p className="text text_type_main-default">
          Загружаем данные, пожалуйста подождите...
        </p>
      );
    }

    if (hasError) {
      return <p className="text text_type_main-default">Произошла ошибка!</p>;
    }

    if (ingredients) {
      return (
        <>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </>
      );
    }
  }, [ingredients, isLoading, hasError]);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="App">
      <AppHeader />
      <main>
        <div className="App-container">{getContent()}</div>
      </main>
    </div>
  );
}

export default App;
