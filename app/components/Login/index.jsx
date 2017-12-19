import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        // this.changeHandle = this.changeHandle.bind(this)
        this.clickHandle = this.clickHandle.bind(this)
        this.state = {
        	phone: ''
        }
    }
    changeHandle(e) {
    	// console.log(this.state.phone)
    	this.setState({phone: e.target.value});
    }
    clickHandle() {
    	const username = this.state.phone
    	this.props.loginHandle(username)
    }
    render() {
    	
        return (
            <div>
            	<input type="text" placeholder='请输入手机号' onChange={this.changeHandle.bind(this)} value={this.state.phone} />
            	<button onClick={this.clickHandle}>登录</button>
            </div>
        )
    }
}

export default Login
