import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class UserInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
            	<p>{this.props.username}</p>
            	<p>{this.props.cityName}</p>
            </div>
        )
    }
}

export default UserInfo
