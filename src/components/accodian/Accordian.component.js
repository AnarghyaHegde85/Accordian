import React, { PureComponent } from 'react';
import Questions from './questions';
import './Accordian.scss';

export class AccordianComponent extends PureComponent {
    constructor(props){
        super(props);
        this.state={
          selected:null
        };
      }
    
      handeltoggle=(id) => {
        if(this.state.selected===id){
          this.setState({selected:null});
          return false;
        }
        this.setState({selected:id});
      };
      render() {
        return (
         <div className='wrapper'>
          <div className='accordian'>
            <h1 className='header'>FAQ</h1>
            {Questions.map((items,id) =>{return(
             <div className='item' key={id}>
              <div className='question' onClick={() => this.handeltoggle(id)}>
                <h3 className='que'>{items.Question}</h3>
                {/* <p className='plus'>+</p> */}
                {/* <p className='minus'>-</p> */}
                <span>{this.state.selected===id? '-': '+'}</span>
              </div>
              <div className={this.state.selected===id ? 'answer show' : 'answer'}>
                 <h4 className='ans'>{items.Answer}</h4>
              </div>
            </div>
        )}) 
            }
         </div>
        </div>
        );
      }
}

export default AccordianComponent