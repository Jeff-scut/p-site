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
                                    <a onClick={()=>{this.run2(`${items.title}`)}}>《{items.title}》</a>
                                    {/* <a onClick={this.runForestRun(`${items.title}`)}>《{items.title}》</a> 第二种写法 */}
                                    {/* <a href={`#/blog/#${items.title}`}>《{items.title}》</a> 这是最开始的写法 */}
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }

    run2(name){
        document.getElementById(name).scrollIntoView();
    }

    runForestRun=(name)=>{
        document.getElementById(name).scrollIntoView();
    }

}

export default NavRight;