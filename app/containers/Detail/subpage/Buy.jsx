import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import BuyAndStore from '../../../components/BuyAndStore/index.jsx'
import * as storeActionsFromFile from '../../../actions/store.js'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.buyHandle = this.buyHandle.bind(this)
        this.storeHandle = this.storeHandle.bind(this)
        this.state = {
        	isStore: false
        }
    }
    componentDidMount() {
        this.checkStoreState()
    }
    //购买事件
    buyHandle() {
    	// 验证登陆
    	const loginFlag = this.loginCheck()
    	if (!loginFlag) {return}
    	// 购买的流程
    	// 跳转到用户主页
    	hashHistory.push('/User')
    }
    // 收藏事件
    storeHandle() {
        // 验证登陆
        const loginFlag = this.loginCheck()
        if (!loginFlag) {return}
        const id = this.props.id
        const storeActions = this.props.storeActions
        if (this.state.isStore) {
            //当前商户已经被收藏，点击时即要取消收藏
            storeActions.rm({id: id})

        } else {
            //当前商户未被收藏，点击时即要执行收藏
            storeActions.add({id: id})
        }
        //修改状态
        this.setState({isStore: !this.state.isStore})
    }
    // 检验当前商户是否已经被收藏
    checkStoreState() {
        const id = this.props.id
        const store = this.props.store

        store.some(item => {
            if (item.id === id) {
                this.setState({isStore: true})
                //跳出循环
                return true
            }
        })
    }
    // 验证登陆
    loginCheck() {
    	const id = this.props.id
    	const userinfo = this.props.userinfo
    	if (!userinfo.username) {
    		// 跳转到登陆页面
    		hashHistory.push(`/login/${encodeURIComponent(`/detail/${id}`)}`)
    		return false

    	}
    	return true
    }
    render() {
        return (
            <div><BuyAndStore isStore={this.state.isStore} buyHandle= {this.buyHandle} storeHandle= {this.storeHandle}/></div>
        )
    }
}
function mapStateToProps(state) {
	return {
		userinfo: state.userinfo,
        store: state.store
	}
}
function mapDispatchToProps(dispatch) {
	return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy)
