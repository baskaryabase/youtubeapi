import React,{Component} from 'react';
import {ButtonGroup,Button} from 'react-bootstrap';
import CarImage from './CarImage';



export default class  CarList extends Component {
render(){
  return(
    <div className="col-xs-12 col-md-9">
    <div className="pv3 col-xs-12">
      <form className="form-group">
        <div id="results" className="form-group">
          <div>
            <div className="col-md-2 col-sm-2 col-xs-6 form-group">
              <label className="control-label">Location
              </label>
              <input placeholder="Enter ZIP code" value="" className="mr2 form-control" />
                </div>
                <div className="col-md-2 col-sm-2 col-xs-6">
                  <label className="control-label">Distance</label>
                  <div className="bg-white">
                    <select className="form-control">
                      <option value="10">10 miles</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-5">
                <label className="control-label">Sorting by</label>
                <div className="bg-white">
                  <select className="form-control">
                    <option value="match">best match</option>
                    <option value="price">price</option>
                    <option value="year">year</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-4">
                <label className="control-label">Showing</label>
                <p className="text-gray-light form-control-static"><span></span>
                <span>20 of 200</span><span></span><span></span>
              </p>
            </div>
            <div className="col-sm-2 col-xs-3" style={{marginTop:"31px"}}>
              <ButtonGroup>
                <Button><span className="glyphicon glyphicon-th"></span></Button>
                <Button><span className="glyphicon glyphicon-th-list"></span></Button>
              </ButtonGroup>
            </div>
            </div>
          </form>
        </div>
        <div>
          <CarImage />
        </div>
    </div>
  );
}
}
