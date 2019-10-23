import React, { Component } from 'react';
import axios from 'axios';
import './blog.css';
import CreateDiary from './CreateDiary.js';
import NavUp from './NavUp.js';
import NavRight from './NavRight.js';

class Blog extends Component{
    constructor(props){
        super(props);

        this.state={
            diaries:[],
            showType:"心情日记"
        };

        axios({
            method:'POST',
            url:'http://47.98.251.172:8080/alltext'
        })
        .then(Response=>{this.setState({diaries:Response.data})})
    }

    // UNSAFE_componentWillMount(){
    //     在constructor中似乎更不错
    // }

    render(){
        return(
            <div className="blogWhole">
                <CreateDiary />
                <NavUp sendAction={state=>this.changeShowType(state)} />
                <NavRight diaries={this.state.diaries} showType={this.state.showType} />
                <div className="showMe">
                    <h2>{this.state.showType}</h2>
                    {this.state.diaries.map( (item,key)=>{
                        if(item.type==`${this.state.showType}`){
                            return(
                                <div key={key} className="single" id={item.title}>
                                    <h4>《{item.title}》</h4>
                                    <h5>by {item.author} on {item.create_time}</h5>
                                    <pre>{item.content}</pre>
                                </div>
                                )
                        }})}
                </div>
            </div>
        );
    }

    changeShowType(state){
        this.setState({
            showType:state
        })
    }


}

export default Blog;



