import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import HomePage from'./pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shopPage.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/signin-and-signup.component'
import Header from './components/header/header.component';
import './App.css';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;
