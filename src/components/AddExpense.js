import React from 'react';

class AddExpense extends React.Component{
    constructor(props){
        super(props);
        this.state = {itemCounter: 2}
        this.updateField = this.updateField.bind(this);

    }
    addField(){
        return(
            <form className="ui form">
                <div className='fields'>
                <div className="field">
                  <label>Item</label>
                  <input type ='text' placeholder='Item Name'></input>
                </div>
                <div className="field">
                  <label>Price</label>
                  <div className="ui right labeled input">
                    <label htmlFor="amount" className="ui label">$</label>
                    <input type="text" placeholder="Amount" id="amount"></input>
                    <div className="ui basic label">.00</div>
                
                </div>
                </div>
                </div>
               
                
                
            </form>
       
        )}
    updateField(){
        this.setState({itemCounter: this.state.itemCounter+1
        })
    }
    render(){
        var itemList = [];
            for(var i=0;i<this.state.itemCounter;i++){
                itemList.push(this.addField());
            }
        return (<div className='fields' style={{marginLeft:20}}>
                {itemList}
                <button className="ui primary button" type="submit">Submit</button>
                <button className="ui button" onClick={this.updateField}>Add Field</button>

                </div>
                );
        
        }
    
};
export default AddExpense;
