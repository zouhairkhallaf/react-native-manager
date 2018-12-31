import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers  from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header } from './components/common/Header';
import ReduxThunk from 'redux-thunk';

class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyAtkfK61beANYD9pwovtpjwXbOKnXf2fmE",
            authDomain: "manager-c6502.firebaseapp.com",
            databaseURL: "https://manager-c6502.firebaseio.com",
            projectId: "manager-c6502",
            storageBucket: "manager-c6502.appspot.com",
            messagingSenderId: "968653246284"
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store} >
                <Header headerText='Employee Manager'></Header>
                <LoginForm />
            </Provider>
        );
    }
};

export default App;
