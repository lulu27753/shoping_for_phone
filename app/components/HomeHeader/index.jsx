import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {Link} from 'react-router'



class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="clear-fix">
            	<div className="fl home_header_left"><Link to='/city'>{ this.props.cityName }</Link></div>
                <div className="fr home_header_right"></div>
            	<div className="home_header_middle"><div className="search_container"><i className="icon-search"></i><input type="text" placeholder="请输入关键字"/></div></div>
            	
            </div>
        )
    }
}


export default HomeHeader
