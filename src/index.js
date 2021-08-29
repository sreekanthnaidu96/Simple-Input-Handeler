import React from "react";
import ReactDOM from "react-dom";
import ArrayFilter from "./components/arrayfilter"


function OnScreenRender(){
    return (<div>
        <ArrayFilter/>
    </div>)
}

ReactDOM.render(<OnScreenRender/>,document.getElementById("root"));