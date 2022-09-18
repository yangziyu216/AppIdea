import React from "react";

class Input extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {inputBin,handleBinaryInput}=this.props;
        return(
            <div>
                <input
                name="binarynum"
                type="text"
                minLength="1"
                maxLength="20"
                value={inputBin.value}
                onChange={(e) => handleBinaryInput(e)}
                autoFocus
                ></input>
            </div>
        )
    }
}
export default Input;