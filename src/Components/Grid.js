import React from 'react';
import Cell from './Cell';
import Row from './Row';
class Grid extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            turn : 'X',
            won : "",
            filled :   [['','',''],
                        ['','',''],
                        ['','','']]
        }
    }

    ifwon  = (z)=>{
        let filled = this.state.filled;
        // row 1 
        // row 2 
        // row 3
        // col 1
        // col 2 
        // col 3
        // cross 1
        // cross 2
        let done = true;
        for(let i=0;i<3;i++){
            if(filled[0][i] != z){
                done = false;
            }
        }

        console.log(done);

        if(done == true){
            let oldstate = {...this.state};
            oldstate.won = `${z}'s won the game`
            this.setState(oldstate);
            return;
        }
        done = true;

        for(let i=0;i<3;i++){
            if(filled[1][i] != z){
                done = false;
            }
        }

        console.log(done);

        if(done == true){
            let oldstate = {...this.state};
            oldstate.won = `${z}'s won the game`
            this.setState(oldstate)
            return;
        }
        done = true;

        for(let i=0;i<3;i++){
            if(filled[2][i] != z){
                done = false;
            }
        }
        console.log(done);

        if(done == true){
            let oldstate = {...this.state};
            oldstate.won = `${z}'s won the game`
            this.setState(oldstate)
            return;
        }
        done = true;

        //column
        for(let i=0;i<3;i++){
            if(filled[i][0] != z){
                done = false;
            }
        }

        console.log(done);

        if(done == true){
            let oldstate = {...this.state};
            oldstate.won = `${z}'s won the game`
            this.setState(oldstate)
            return;
        }
        done = true;

        for(let i=0;i<3;i++){
            if(filled[i][1] != z){
                done = false;
            }
        }

        console.log(done);

        if(done == true){
            let oldstate = {...this.state};
            oldstate.won = `${z}'s won the game`
            this.setState(oldstate)
            return;
        }
        done = true;

        for(let i=0;i<3;i++){
            if(filled[i][2] != z){
                done = false;
            }
        }

        console.log(done);

        if(done == true){
            let oldstate = {...this.state};
            oldstate.won = `${z}'s won the game`
            this.setState(oldstate);
            return;
        }
        done = true;

        for(let i=0;i<3;i++){
            if(filled[i][i] != z){
                done = false;
            }
        }

        console.log(done);
        if(done == true){
            let oldstate = {...this.state};
            oldstate.won = `${z}'s won the game`
            this.setState(oldstate)
            return;
        }
        done = true;

        for(let i=0;i<3;i++){
            if(filled[i][2-i] != z){
                done = false;
            }
        }

        console.log(done);
        if(done == true){
            let oldstate = {...this.state};
            oldstate.won = `${z}'s won the game`
            this.setState(oldstate)
            return;
        }

    }
    clickhandler = (x,y)=>{
        let oldstate = {...this.state};
        if(oldstate.filled[x][y] != '' || oldstate.won != ""){
            return;
        }
        oldstate.filled[x][y] = oldstate.turn;
        if(oldstate.turn == 'X'){
            oldstate.turn = 'O';
        }else{
            oldstate.turn = 'X';
        }
        this.setState(oldstate);
        this.ifwon(oldstate.filled[x][y]);
    }

    restart_event = ()=>{
        this.setState({
            turn : 'X',
            won : "",
            filled :   [['','',''],
                        ['','',''],
                        ['','','']]
        })
    }
    render(){
        return (
            <div id="grid">
                {<Row row={0} clicked={this.clickhandler}>{this.state.filled[0]}</Row>}
                {<Row row={1} clicked={this.clickhandler}>{this.state.filled[1]}</Row>}
                {<Row row={2} clicked={this.clickhandler}>{this.state.filled[2]}</Row>}

                <div className="important">
                    <h1 className="result">{this.state.won==""?`${this.state.turn}'s turn`:this.state.won}</h1>
                    <buttton onClick={this.restart_event} className="restart-btn">Restart</buttton>
                </div>
                
            </div>
        )
    }
}
export default Grid;