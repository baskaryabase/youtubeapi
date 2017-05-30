import React,{Component} from 'react';

class SearchBar extends Component{
render() {
    return (
            <div>
              <input
                className="input"
                onChange={(event)=>this.props.onChangeTerm(event.target.value)}
               />
            </div>
           );
    };
};
export default SearchBar;
