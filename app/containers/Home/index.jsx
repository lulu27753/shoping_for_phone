import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import HomeHeader from '../../components/HomeHeader/index.jsx'
import  Category from '../../components/Category/index.jsx'
import Ad from './subpage/Ad.jsx'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}></HomeHeader>
                <Category></Category>
                <div style={{height: '15px'}}></div>
                <Ad></Ad>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {
        userinfo: state.userinfo
    };
}
function mapActionsToProps (dispatch) {
    return {}
}
export default  connect(mapStateToProps, mapActionsToProps)(Home)

