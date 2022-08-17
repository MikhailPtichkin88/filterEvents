import React, {useEffect} from 'react';
import './App.scss';
import Header from "./components/header/Header.";
import Events from "./components/Events";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";
import {eventsAPI} from "./api/events-api";
import {useAppDispatch} from "./customHooks/hooks";
import {fetchEventsTC} from "./reducers/eventReducer/eventsReducerThunk";


function App() {

    const dispatch = useAppDispatch()
    useEffect(()=>{
       dispatch(fetchEventsTC())
    },[])

    return (
        <div className="App">
            <Header/>
            <h2 className="subTitle">Our events</h2>
            <h1 className="title">Lectures, workshops & master-classes</h1>
            <Events/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default App;
