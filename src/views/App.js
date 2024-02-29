import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from '../components/navbar';
import News from '../components/news';
import NewsItem from '../components/NewsItem';


function App() {
  return (

    <div>
        <div>
          <Nav></Nav>
        </div>
        <div >
        <h1 class=" m-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to my newsletter !</h1>
        
        </div>
        <div>
          <News/>
        </div>
    </div>
  );
}

export default App;
