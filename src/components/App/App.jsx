import React, { useState, useEffect } from 'react';
import './App.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { getIngredients } from '../../utils/api';
import { IngredientsContext } from '../../services/ingredients-context';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const ingredientsData = await getIngredients();
        setIngredients(ingredientsData);
        setIsLoading(false);
        setHasError(false);
      } catch {
        setHasError(true);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const getContent = () => {
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
          <IngredientsContext.Provider value={ingredients}>
            <BurgerIngredients />
              <BurgerConstructor />
          </IngredientsContext.Provider>
        </>
      );
    }
  };

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
