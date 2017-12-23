import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        //如果未登录，跳转到登录页面
        if (!this.props.userinfo.username) {
            hashHistory.push('/Login')
        }
    }
    render() {
        const { userinfo } = this.props;
        return (
            <div>
                <Header title="用户中心" backRouter="/" />
                <UserInfo username={userinfo.username} cityName={userinfo.cityName} />
                <OrderList username={userinfo.username}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo 
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)
