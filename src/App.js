import React from 'react';
import Navbar from './component/Navbar';
import InputYaddasht from './component/InputYaddasht';
import LastNote from './component/LastNote';


const App = () => {
    return (
        <div>
            <Navbar/>
            <InputYaddasht/>
            <LastNote/>
        </div>
    );
};

export default App;