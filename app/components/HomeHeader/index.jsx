import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import './style.less'
import {Link} from 'react-router'
import SearchInput from '../SearchInput/index.jsx'


class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.enterHandle = this.enterHandle.bind(this)
    }
    enterHandle(kwd) {
        hashHistory.push(`/search/all/${encodeURIComponent(kwd)}`)
    }
    render() {
        return (
            <div className="clear-fix">
            	<div className="fl home_header_left"><Link to='/city'>{ this.props.cityName }</Link></div>
                <div className="fr home_header_right"></div>
            	<SearchInput value='' enterHandle={this.enterHandle}/>
            	
            </div>
        )
    }
}


export default HomeHeader
