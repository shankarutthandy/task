import React, { Component } from 'react'
import './RightBar.css'
export default class RightBar extends Component {
  constructor(){
    super();
    this.state={
      id:'',
      userId:'',
      title:"",
      body:""
    }
  }
  onUserChange=(event)=>{
    this.setState({userId:event.target.value})
  }
  onIdChange=(event)=>{
    this.setState({id:event.target.value})
  }
  onTitleChange=(event)=>{
    this.setState({title:event.target.value});
  }
  onBodyChange=(event)=>{
    this.setState({body:event.target.value});
  }
  onCreateSubmit=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method:"POST",
      headers:{'Content-Type':"application/json"},
      body:JSON.stringify(this.state)
    })
    .then(res=>res.json())
    .then(console.log)
    .catch(err=>console.log("unable to post"))
  }
  onUpdateSubmit=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
      method:"PUT",
      headers:{'Content-Type':"application/json"},
      body:JSON.stringify(this.state)
    })
    .then(res=>res.json())
    .then(console.log)
    .catch(err=>console.log("unable to put"))
  }
  onDeleteSubmit=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(console.log)
    .catch(err=>console.log("unable to delete"))
  }
  render() {
    return (
      <div className="rightbar">
        <span className="label">User ID</span>
        <input type="text" className="input" placeholder='userid' 
        onChange={this.onUserChange}/>
        <span className="label">ID</span>
        <input type="text" className="input" placeholder='id'
        onChange={this.onIdChange}/>
        <span className="label">Title</span>
        <input type="text" className="input" placeholder='title'
        onChange={this.onTitleChange}/>
        <span className="label">Body</span>
        <input type="text" className="input" placeholder='body'
        onChange={this.onBodyChange}/>
        <hr />
        <div className="buttoncontainer">
        <button className='btn' onClick={this.onCreateSubmit}>Create</button>
        <button className='btn' onClick={this.onUpdateSubmit}>Update</button>
        <button className='btn' onClick={this.onDeleteSubmit}>Delete</button>
        </div>
      </div>
    )
  }
}

