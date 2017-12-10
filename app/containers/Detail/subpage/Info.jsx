import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getInfoData } from '../../../fetch/detail/detail.js'
import DetailInfo from '../../../components/DetailInfo/index.jsx'


class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	info: false
        }
    }
    componentDidMount() {
    	var id = this.props.id
    	var result = getInfoData(id)
    	result.then(res => {
    		return res.json()
    	}).then(json => {
    		this.setState({
    			info: json
    		})
    	})

    }
    render() {
        return (
            <div>
            {
            	this.state.info
            	? <DetailInfo info={this.state.info}/>
            	: ''
            }
            </div>
        )
    }
}

export default Info
