import React, {useState, createContext} from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {

const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
setDarkMode(!darkMode)
const body = document.querySelector('body');
if (darkMode === false) {
body.style.background = 'hsl(227, 17%, 20%)';
body.style.transition = 'all 1s ease-in-out';
} else {
body.style.background = 'white';
body.style.transition = 'all 1s ease-in-out';
}
}

return (
<>
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
        {props.children}
    </DarkModeContext.Provider>
</>
);
}

export {DarkModeContext, DarkModeProvider};