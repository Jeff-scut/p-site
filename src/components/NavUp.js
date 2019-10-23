import React from 'react';
import './navup.css';

class NavUp extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }

    }

    render(){
        return(
            <div className="navup">
                <ul>
                    <li onClick={()=>this.props.sendAction('心情日记')}>心情日记 | </li>
                    <li onClick={()=>this.props.sendAction('react笔记')}>react笔记 | </li>
                    <li onClick={()=>this.props.sendAction('前端基础知识')}>前端基础知识 | </li>
                    <li onClick={()=>this.props.sendAction('面试经验')}>面试经验 | </li>
                    <li onClick={()=>this.props.sendAction('网站发展')}>网站发展 | </li>
                    <li onClick={()=>this.props.sendAction('未分类')}>未分类</li>
                </ul>
            </div>
        )
    }
    
}

export default NavUp;