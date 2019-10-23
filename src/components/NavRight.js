import React from 'react';
import './navright.css';

class NavRight extends React.Component{

    // UNSAFE_componentWillReceiveProps(){
    //     console.log(this.props.diaries,this.props.showType)
    // }

    render(){
        return(
            <div className="navright">
                <ul>
                    {this.props.diaries.map((items,key)=>{
                        if(items.type==this.props.showType){
                            return(
                                <li key={key} >
                                    <a>《{items.title}》</a>
                                    {/* <a href={`#/blog/#${items.title}`}>《{items.title}》</a> */}
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default NavRight;