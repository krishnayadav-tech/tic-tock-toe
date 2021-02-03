import React from 'react';
import Cell from './Cell';
class Row extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <div className="row">
                <Cell data={[this.props.row,0]} clicked={this.props.clicked}>{this.props.children[0]}</Cell>
                <Cell data={[this.props.row,1]} clicked={this.props.clicked}>{this.props.children[1]}</Cell>
                <Cell data={[this.props.row,2]} clicked={this.props.clicked}>{this.props.children[2]}</Cell>
            </div>
        )
    }
}
export default Row;