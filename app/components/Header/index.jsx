import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.clickHandle = this.clickHandle.bind(this);
    }
    clickHandle() {
    	window.history.back()
    }
    render() {
        return (
            <div id="common-header">
            	<span className="back-icon" onClick={ this.clickHandle }>
            		<i className="back">返回</i>
            	</span>
            	<h1>{ this.props.title }</h1>
            	
            </div>
        )
    }
}

export default Header
