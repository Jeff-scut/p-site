import React from 'react';
import axios from 'axios';
import './updatediary.css';

class UpdateDiary extends React.Component{
    constructor(props){
        super(props);

        this.state={
            content:"",
            disp:"none",
            targetID:""
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.disp!=undefined&&nextProps.disp!=this.state.disp){
            this.setState({
                disp:nextProps.disp,
                targetID:nextProps.targetID
            })
        }
    }


    render(){

        var styleStr={
            upd:{
                display: (this.state.disp),
            }
        }

        return(
            <div className="updWhole" style={styleStr.upd}>
                正在修改的文章ID为{this.state.targetID}（虽然看不出是哪篇）
                <input type="button" value="关闭" onClick={()=>this.setState({disp:"none"})} />
                <textarea onChange={e=>{this.setState({content:e.target.value})}} required/>
                <input type="button" value="发送" onClick={()=>this.sendUpdate()} />
            </div>
        )
    }

    sendUpdate(){
        var data=new FormData();
        data.append('targetID',`${this.state.targetID}`)
        data.append('content',`${this.state.content}`)
        axios({
            method:'POST',
            url:"http://127.0.0.1:5000/updatetext",
            data: data
        })
        .then(alert('更新完成'))
    }

}

export default UpdateDiary;