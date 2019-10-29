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
            showType:"心情日记",
            shouldDisplay:false,
            targetID:"",
            newContent:"",
            title:""
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
                                    <h5>created by {item.author} on {item.create_time}</h5>
                                    <pre>
                                        {item.content}
                                        <span className="edit" onClick={()=>this.setState({shouldDisplay:true,targetID:`${item.id}`,title:`${item.title}`}) }></span>[编辑]
                                        <span className="delete" onClick={()=>this.deleteText(`${item.id}`,'http://47.98.251.172:8080/deletetext')}></span>[删除]
                                    </pre>
                                </div>
                                )
                        }})}
                </div>
                { this.state.shouldDisplay && 
                <div className="updWhole">
                    待修改文章标题：{this.state.title}
                    <input type="button" value="关闭" onClick={()=>this.setState({shouldDisplay:false})} />
                    <textarea onChange={e=>{this.setState({newContent:e.target.value})}} required/>
                    <input type="button" value="发送" onClick={()=>this.sendUpdate()} />
                </div>}
            </div>
        );
    }

    changeShowType(state){
        this.setState({
            showType:state
        })
    }

    deleteText(id,url){
        var data=new FormData();
        data.append('targetID',id)
        axios({
            method:'POST',
            url:url,
            data:data
        })
        .then(
            alert('删除成功')
        )
    }

    sendUpdate(){
        var data=new FormData();
        data.append('targetID',`${this.state.targetID}`)
        data.append('content',`${this.state.newContent}`)
        axios({
            method:'POST',
            url:"http://47.98.251.172:8080/updatetext",
            data: data
        })
        .then(alert('更新完成'))
        window.location.href=('http://47.98.251.172')
    }


}

export default Blog;



