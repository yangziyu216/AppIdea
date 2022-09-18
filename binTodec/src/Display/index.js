import React from "react";

class Display extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {displayNum,inputBin}=this.props;
        return(
        <div>
            {!inputBin.binary ? (
                <p className="info">
                    <span role="img" aria-label="Shrug">
                    🤷
                    </span>
                    Waiting for a valid binary number...
                </p>
                ) : (
                <p>{displayNum}</p>
                )}
        </div>
        )
    }
}

export default Display;