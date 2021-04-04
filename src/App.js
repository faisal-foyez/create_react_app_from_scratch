import React from 'react';
import styles from './App.module.css';
class App extends React.Component{

    render(){
        return(
            <h1 className={styles.header_class}>This is custom configured react project</h1>
        )
    }
}

export default App;