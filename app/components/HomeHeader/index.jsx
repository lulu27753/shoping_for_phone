import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { Icon } from 'antd'



class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="clear-fix">
            	<div className="fl home_header_left">{ this.props.cityName }<i className="icon-angle-down"></i></div>
                <div className="fr home_header_right"><Icon type="user" style={{ fontSize: 16, color: '#08c' }}/></div>
            	<div className="home_header_middle"><div className="search_container"><i className="icon-search"></i><input type="text" placeholder="请输入关键字"/></div></div>
            	
            </div>
        )
    }
}


export default HomeHeader
