import React, {useEffect} from "react";
import './assets/style/index.scss'
import Article from "./pages/article";
import Header from "./pages/header";
import usePreloader from './hook/usePreloader';
import Preloader from "./utils/preloader";
function App() {
    const {isLoading} = usePreloader()
    if(isLoading){
        return <Preloader/>
    }
    return (
        <div className="wrapper">
            <div className="content" style={{willChange: 'transform'}}>
                <Header/>
                <Article/>
            </div>
        </div>
    );
}

export default App;
