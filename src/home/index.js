import React from 'react'
import "./test.scss"
import "./test.less"
import "./test.css"
import buyImg from "@/assets/images/test1.gif"
import testImg from "@/assets/images/test2.jpg"
export default class Home extends React.Component {
    render(){
        return (
            <div className="test test2 test3">
                <p>hello world</p>
                <img src={buyImg} alt="" />
                <img src={testImg} alt="" style={{width:360,height:60}}/>
            </div>
        )
    }
}