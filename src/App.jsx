import React, { Component } from 'react'
import SideBar from './Components/SideBar/SideBar'
import RightBar from './Components/RightBar/RightBar'
import './App.css'
export default class App extends Component {
  constructor(){
    super();
    this.state={
      id:-1
    }
  }
  render() {
    return (
      <div className="mainbody">
        <SideBar />
        <RightBar/>
      </div>
    )
  }
}
