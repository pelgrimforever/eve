import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'

import Store from '../services/store.js';
import './home.scss';

//components
//services
import Rsdownloadswagger from '../services/eve/rest/custom/rsdownloadswagger.js';
//data models

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: Store.user.loggedin,
      loading: false,
      totalpages: 0,
      totaldone: 0,
      regions: [],
      messages: [],
      marketdone: true,
      timerID: null
    };
  }

  userchanged = () => {
    this.setState( { loggedin : Store.user.loggedin } );
  }

  componentDidMount() {
    Store.user.notifyme("home", this.userchanged);
    this.autoupdate();
  }

  autoupdate = async () => {
    if(this.state.timerID==null) {
        this.timerID = setInterval(
          () => {
            const dummy = this.askUpdate();
          }, 1000
        );
        this.setState( {
            timerID: this.timerID,
        } )
    }
  }

  askStart = async () => {
    try {
        const result = await Rsdownloadswagger.startDownload(Store.user);
        this.setState( { 
            regions: result.regions,
            marketdone: result.done
        });
        this.autoupdate();
    } catch (e) {
      console.log("askStart failed");
    }
  }

  askUpdate = async () => {
    try {
        const result = await Rsdownloadswagger.getUpdate();
        let totalpages = 0;
        let totaldone = 0;
        this.state.regions.map(region => {
            totalpages += region.totalpages;
            totaldone += region.page;
        });
        this.setState( { 
            regions: result.regions,
            totalpages: totalpages,
            totaldone: totaldone,
            messages: result.messages,
            marketdone: result.done
        });
        if(result.done) {
            clearInterval(this.state.timerID);
            this.setState({
                timerID: null
            });
        }
    } catch (e) {
      console.log("askUpdate failed");
    }
  }

  askStop = async () => {
    try {
        const result = await Rsdownloadswagger.stopDownload(Store.user);
        this.autoupdate();
    } catch (e) {
      console.log("askStart failed");
    }
  }

  calc_percdone = () => {
    if(this.state.totalpages===0) {
        return 100;
    } else {
        return this.state.totaldone * 100 / this.state.totalpages
    }
  }

  render() {
    const colname = {width: '6rem' };
    const colgraph = {width: '20rem'};
    const coldone = {width: '3rem'};

    return (
<div className="row h-100">
  <div className="col-4 regiontable">
    <div className="root fullheight">
      <div className="containercontent container-relative">
        <div className="table-container container-fluid p-0">

{ this.state.loading && 
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status" />
          </div>
}
          <table className="small table table-dark table-striped table-bordered table-hover fillparent">
            <thead className="table-info">
              <tr>
                <th style={colname}>region</th>
                <th style={colgraph}>pages downloaded</th>
                <th style={coldone}>done</th>
                <th></th>
                <th className="dummyscroll"></th>
              </tr>
            </thead>
            <tbody className="overflow text-body">

{this.state.regions.map(region => (
              <tr className="table-info" key={region.region}>
                <td style={colname}>{region.name}</td>
                <td style={colgraph}>
                  <ProgressBar variant="success" now={region.page*100/region.totalpages} />
                </td>
                <td style={coldone}>
                  <div className="custom-control custom-checkbox cell-center">
                    <input type="checkbox" checked={region.done} className="form-check-input" disabled/>
                  </div>
                </td>
                <td></td>
              </tr>  
))}

            </tbody>
          </table>
        </div>
      </div>      
    </div>
  </div>

  <div className="col-8">
    <div className="root fullheight">
        <div className="containerheader">
          <div className="mx-auto bg-light p-1">
              <div className="row m-0">
                  <div className="custom-control custom-checkbox cell-center">
                    Complete <input type="checkbox" checked={this.state.marketdone} className="form-check-input" disabled/>
                  </div>
              </div>
              <div className="row m-0">
                <ProgressBar variant="success" now={this.calc_percdone()} />
              </div>
          </div>
        </div>
        <div className="containerheader d-flex justify-content-center">
          <div className="mx-auto bg-light p-1">
{ this.state.loggedin && 
  <>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                    <button type="button" className="btn btn-sm btn-primary m-1" data-toggle="modal" onClick={() => this.askStart()}>Start download</button>
                </div>
                <div className="col col-sm-4 input-group-prepend">
{ !this.state.marketdone && 
                  <div className="d-flex justify-content-center h-100 container-relative">
                    <Spinner className="spinner-local" animation="border" role="status" />
                  </div>
}
                </div>
                <div className="col col-sm-4 input-group-prepend">
                    <button type="button" className="btn btn-sm btn-warning m-1" data-toggle="modal" onClick={() => this.askStop()}>Stop download</button>
                </div>
              </div>
  </>
}
        </div>
      </div>

      <div className="containercontent container-relative">
        <div className="root fullheight">
          <div className="containercontent container-relative">
            <div className="table-container container-fluid p-0">

              <table className="table table-dark table-striped table-bordered table-hover fillparent">
                <thead>
                  <tr>
                    <th>server message</th>
                    <th className="dummyscroll"></th>
                  </tr>
                </thead>
                <tbody className="overflow text-body">

    {this.state.messages.map((message, index) => (
                  <tr className="table-info" key={index}>
                    <td>{message}</td>
                  </tr>  
    ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

    );
  }
}

export default Home;