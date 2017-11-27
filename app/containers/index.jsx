import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as userInfoActionsFormOtherFile from '../actions/userinfo.js'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey.js'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    componentDidMount() {
        // 从localstorerage里面获取城市
        let cityName = LocalStore.getItem('localStoreKey');
        if (cityName == null) {cityName = '北京'};
        // 将城市信息存储到Redux中
         console.log(cityName);
         this.props.userInfoActions.update({cityName: cityName});

        setTimeout(() => { this.setState({ initDone: true }) }, 1000); 
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone 
                    ? this.props.children 
                    : <div>加载中。。。</div>
                }
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {};
}
function mapActionsToProps (dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    }
}
export default connect(mapStateToProps, mapActionsToProps)(App)
