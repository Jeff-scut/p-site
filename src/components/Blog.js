import React, { Component } from 'react';
import axios from 'axios';
import './blog.css';
import CreateDiary from './CreateDiary.js';

class Blog extends Component{
    constructor(props){
        super(props);

        this.state={
            emmm:"这是默认值",
            diaries:[]
        };
    }

    componentWillMount(){
        axios({
            method:'POST',
            url:'http://47.98.251.172:8081/alltext'
        })
        .then(
            Response=>{this.setState({diaries:Response.data})}
        )

    }

    render(){
        return(
            <div>
                <CreateDiary />
                <div className="showMe">
                    {this.state.diaries.map( (item,key)=>{
                        return(
                        <div key={key} className="single">
                            <h4>《{item.title}》</h4>
                            <h5>by {item.author} on {item.create_time}</h5>
                            <pre>{item.content}</pre>
                        </div>
                        )
                        })}
                </div>
            </div>
        );
    }


}

export default Blog;



