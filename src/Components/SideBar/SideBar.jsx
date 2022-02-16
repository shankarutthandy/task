import React, { Component } from 'react'
import './SideBar.css';
import Users from '../Users/Users';
export default class SideBar extends Component {
  constructor(){
    super();
    this.state={
      id:'',
      users:[]
    }
  }
  onChange=(event)=>{
    this.setState({id:event.target.value})
  }
  onSubmit=()=>{
    var users=[];
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>{ 
      let n=data.length;
      for(let i=0;i<n;i++)
      {
        if(this.state.id==data[i].userId)
          {
            users.push(data[i])
          }
      }
      this.setState({users:users});
    })
  }
  render() {
    return (
    <div className="mainbar">
      <div className="sidebar">
        <span className="label">User ID</span>
        <input type="text" className="input" placeholder='give USER ID' onChange={this.onChange}/>
        <button className="btn" onClick={this.onSubmit}>search</button>
      </div>
      <Users list={this.state.users}/>
    </div>
    )
  }
}

