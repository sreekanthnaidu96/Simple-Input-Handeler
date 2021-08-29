import React,{useState} from 'react'

const ArrayFilter = () => {
    const [DefaultValue,ChangeHook]=useState("");
    const ButtonShow=DefaultValue.length>0;

    function ChangeHandeler(event){
        ChangeHook(event.target.value)
    }

    function ClearHandeler(){
        ChangeHook("")
        alert("input will be cleared")
    }

    return (
        <div>
            <input type="text" placeholder="Enter Something"value={DefaultValue} onChange={ChangeHandeler}/>
            <p>
                {ButtonShow && <button onClick={ClearHandeler}>Clear</button>}
            </p>
        </div>
    )
}

export default ArrayFilter
