import React, { Component } from 'react';

export default class ListCreateFrom extends Component {
  render(){
    return(

      <div className="test">
        <form>
          Title: <input name="title" />
          <br />
          Description: <textarea name="description" />
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}