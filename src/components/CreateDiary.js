// import { Modal, Button } from 'antd';
import React from 'react';
import axios from 'axios';
import moment from 'moment';
import "./creatediary.css";

class CreateDiary extends React.Component {
    constructor(props){
        super(props);

        this.state={
            ModalText: 'Content of the modal',
            // visible: "hidden",
            confirmLoading: false,
            disp:"none",
            title:"",
            content:"",
        };
    }

    showModal = () => {
        this.setState({
            // visible: "visible",
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
                // visibility:(this.state.visible),
                display:(this.state.disp),
                position:"fixed",
            }
        }
        return (
        <div>
            <input type="button" onClick={this.showModal}  value="摇了我吧"/>
            <div className="motai" style={styleString.motai} >
                <input id="closeBut" type="button" onClick={this.closeModal} value="关闭"></input>
                <div className="write1"><strong>标题:</strong><input onChange={event=>this.setState({title:event.target.value})}></input></div>
                <div className="write2"><strong>内容:</strong><textarea onChange={e=>this.setState({content:e.target.value})}></textarea></div>
                <input id="submit" type="button" value="保存" onClick={()=>this.postBlog('http://47.98.251.172:8081/plus')}/>
            </div>
        </div>
        );
    }

    postBlog(url){
        var formdata=new FormData();
        var crTime=moment().format('YYYY-MM-DD HH-mm-ss');
        //var temp=new Date();
        //var crTime=temp.getFullYear()+'-'+temp.getMonth()+'-'+temp.getDate()
        formdata.append('author','jeff') //这里等有用户系统之后，改成获取用户名
        formdata.append('create_time',crTime) //考虑个位数需要补0的问题 可以用moment
        formdata.append('last_modify','1970-01-01') //还没有修改功能！待完成
        formdata.append('title',this.state.title)
        formdata.append('content',this.state.content)
        axios({
            method:'POST',
            url:url,
            data:formdata
        })
        .catch((Error)=>{console.log(Error)})
        window.location.href=('http://47.98.251.172:80/#/blog')
    }

}

export default CreateDiary;

