// import { Modal, Button } from 'antd';
import React from 'react';
import axios from 'axios';
import moment from 'moment';
import "./creatediary.css";

class CreateDiary extends React.Component {
    constructor(props){
        super(props);

        this.state={
            disp:"none",
            title:"",
            content:"",
            type:""
        };
    }

    showModal = () => {
        this.setState({
            disp:"flex"
        });
    };

    closeModal=()=>{
        this.setState({
            disp:"none"
        });
    }

    render() {
        const styleString={
            motai:{
                display:(this.state.disp),
                position:"fixed",
            }
        }
        return (
        <div>
            <input type="button" onClick={this.showModal}  value="发布新文章"/>
            <div className="motai" style={styleString.motai} >
                <input id="closeBut" type="button" onClick={this.closeModal} value="关闭"></input>
                <div className="write1"><strong>标题:</strong><input onChange={event=>this.setState({title:event.target.value})} required /></div>
                <div className="write3"><strong>类型:</strong><input onChange={event=>this.setState({type:event.target.value})} required /></div>
                <div className="write2"><strong>内容:</strong><textarea onChange={event=>this.setState({content:event.target.value})} required /></div>
                <input id="submit" type="button" value="保存" onClick={()=>this.postBlog('http://47.98.251.172:8080/plus')}/>
            </div>
        </div>
        );
    }

    postBlog(url){
        var formdata=new FormData();
        var crTime=moment().format('YYYY-MM-DD HH-mm-ss');
        formdata.append('author','jeff') //这里等有用户系统之后，改成获取用户名
        formdata.append('create_time',crTime) //考虑个位数需要补0的问题 可以用moment
        formdata.append('last_modify','1970-01-01') //还没有修改功能！待完成
        formdata.append('title',this.state.title)
        formdata.append('content',this.state.content)
        formdata.append('type',this.state.type)
        axios({
            method:'POST',
            url:url,
            data:formdata
        })
        .then(alert('发表成功，页面即将自动刷新~'))
        .catch((Error)=>{console.log(Error)})
        window.location.href=('http://47.98.251.172')
    }

}

export default CreateDiary;

