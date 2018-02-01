import React, { Component } from 'react';
import Jquery from 'jquery'

export default class ListCreateFrom extends Component {

  componentDidMount(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://accounts.accesscontrol.windows.net/8911de39-2701-4501-abaa-ca8ccd593b1f/tokens/OAuth/2",
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
        "postman-token": "e3b0af65-2101-09bb-7056-1116baef5aa3"
      },
      "data": {
        "grant_type": "client_credentials\t",
        "client_id": "c2033ba0-b420-436f-8324-3eef7fc06319@8911de39-2701-4501-abaa-ca8ccd593b1f\n",
        "client_secret": "D/A4cD4L0aG3vniwxK+COL5vkV0r5V3LSr69LwhDiO8=",
        "resource": "00000003-0000-0ff1-ce00-000000000000/local256.sharepoint.com@8911de39-2701-4501-abaa-ca8ccd593b1f"
      }
    }
    
    Jquery.ajax(settings).done(function (response) {
      console.log(response);
    });
  }

  constructor(props) {
    super(props);
    this.state = { title: "", description: "" };
  }

  handleChange1(event) {
    this.setState({title: event.target.value})
  }
  handleChange2(event) {
    this.setState({description: event.target.value})
  }

  handleSubmit() {
    console.log(this.state.title)
    console.log(this.state.description)
  }
  render(){

    return(

      <div className="test">
        <form>
          Title: <input name="title" value = {this.state.title} onChange={this.handleChange1.bind(this)} />
          <br />
          Description: <textarea name="description" value = {this.state.description} onChange={this.handleChange2.bind(this)} />
          <br />
          <input type="button" value="Submit" onClick={this.handleSubmit.bind(this)} />
        </form>
      </div>
    )
  }
}