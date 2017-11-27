import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

import './style.less'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        const typesList1 = ['丽人','休闲娱乐','周边游','外卖','度假出行','火锅','电影','美食','足疗按摩','酒店']
        const typesList2 = ['KTV','亲子','小吃快餐','景点','生活服务','美发','自助餐','购物','运动健身','酒吧']
        const typesList3 = ['SPA','全部分类','学习培训','宠物','家装','日本菜','火车机票','烧烤','结婚','西餐']
        const listItem1 = typesList1.map((text,index) => <li key={index}>{text}</li>);
        const listItem2 = typesList2.map((text,index) => <li key={index}>{text}</li>);
        const listItem3 = typesList3.map((text,index) => <li key={index}>{text}</li>);
        var opt = {
            auto: 5000,
            callback: (index) => {
                this.setState({
                    index: index
                });
            }
            
        }
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opt}>
                <div><ul>{ listItem1 }</ul></div>
                <div>{ listItem2 }</div>
                <div>{ listItem3 }</div>
                </ReactSwipe>
                <div>
                    <li className={ this.state.index===0 ? "selected" : ""}>1</li>
                    <li className={ this.state.index===1 ? "selected" : ""}>2</li>
                    <li className={ this.state.index===2 ? "selected" : ""}>3</li>
                </div>
            </div>
        )
    }
    
}
function mapStateToProps (state) {
    return {
        userinfo: state.userinfo
    };
}
function mapActionsToProps (dispatch) {
    return {
       
    }
}
export default  Category;

