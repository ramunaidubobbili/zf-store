import React from "react";
import Header from './header';

class Home extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <div className="container pt-4">Home</div>
            </>
            
        )
    }
}

export default Home;