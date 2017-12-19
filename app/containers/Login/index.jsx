import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { bindActionCreators } from 'redux'

import Header from '../../components/Header/index.jsx'
import LoginComponent from '../../components/Login/index.jsx'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.loginHandle = this.loginHandle.bind(this)
        this.state = {
        	checking: true
        }
    }
    componentDidMount() {
    	this.doCheck()
    }
    doCheck() {
    	const userinfo = this.props.userinfo
    	if (userinfo.username) {
    		//已经登录
    		this.goUserPage()

    	} else {
    		//尚未登录
    		this.setState({checking: false});

    	}
    }
    goUserPage() {
    	hashHistory.push('/User')
    	
    }
    //登录成功后的业务处理
    loginHandle(username) {
    	//保存用户名到redux
    	const actions = this.props.userInfoActions
    	let userinfo = this.props.userinfo
    	userinfo.username = username
    	actions.update(userinfo)

    	//跳转链接
    	const params = this.props.params
    	const router = params.router
    	if (router) {
    		//跳转到指定的页面（参数router即登录之后需要跳转的页面。即在哪个页面登录的，登录完了之后还要再跳转到哪个页面）
    		hashHistory.push(router)
    	} else {
    		//跳转到默认的页面，即用户中心页面
    		this.goUserPage()
    	}

    }
    render() {
        return (
            <div>
            <Header title='登录'/>
            {
            	//等待验证之后，再显示登录信息
            	this.state.checking
            	? <div>等待中</div>
            	: <LoginComponent loginHandle={this.loginHandle}/>
            }

            </div>
        )
    }
}
//------------------------------------redux react 绑定------------------------------
function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
