import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './mixin.less'

class Less extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div>
	        	<div id="header">
	        		<h1>标题</h1>
	        		<p><a href="#">正文</a></p>
	        	</div>
	        	<div style={{height: '15px'}}></div>
	        	<div>
	            	<button id="cancel-btn">取消</button>
	            	
	            	<button id="submit-btn">提交</button>
	        	</div>

        	</div>
        )
    }
}

export default Less
