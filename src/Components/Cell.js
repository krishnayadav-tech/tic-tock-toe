import React from 'react';
class Cell extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div onClick={()=>this.props.clicked(this.props.data[0],this.props.data[1])} className="cell">{
                (this.props.children)
            }</div>
        )
    }
}
export default Cell;