import React, { useState, useEffect } from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import AppMain from './components/app-main/app-main';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { getIngredients } from './utils/data';

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

  return (
    <div className="App">
      <AppHeader />
      <AppMain>
        {!isLoading && !hasError && ingredients && (
          <>
            <BurgerIngredients ingredients={ingredients} />
            <BurgerConstructor ingredients={ingredients} />
          </>
        )}
      </AppMain>
    </div>
  );
}

export default App;
