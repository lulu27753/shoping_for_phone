import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header/index.jsx'
import CurrentCity from '../../components/CurrentCity/index.jsx'
import CityList from '../../components/CityList/index.jsx'

import * as userInfoActionsFromOtherFile  from '../../actions/userinfo.js'

import { CITYNAME } from '../../config/localStoreKey.js'
import localStore from '../../util/localStore'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.changeCity = this.changeCity.bind(this);
    }
    changeCity(newCity) {
        if (newCity == null) {return}
        //修改rudux
        const {userinfo} = this.props;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo) 
        //修改cookie
        localStore.setItem(CITYNAME, newCity)
        //跳转页面
        hashHistory.push('/')
    }
    render() {
        return (
            <div>
                <Header title='选择城市'></Header>
                <CurrentCity cityName={this.props.userinfo.cityName}></CurrentCity>
                <CityList changeFn={this.changeCity}></CityList>
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(City);
