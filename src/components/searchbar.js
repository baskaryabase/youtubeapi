import React,{Component} from 'react';

class SearchBar extends Component{
render() {
    return (
            <div className="container search-bar" >
              <input
                className="form-control"
                onChange={(event)=>this.props.onChangeTerm(event.target.value)}
               />
            </div>
           );
    };
};
export default SearchBar;
