import React from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import AppMain from './components/app-main/app-main';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import ingredientsData from './utils/data';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppMain>
        <BurgerIngredients ingredients={ingredientsData}/>
        <BurgerConstructor ingredients={ingredientsData}/>
      </AppMain>
    </div>
  );
}

export default App;
