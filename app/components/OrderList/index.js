import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item/Item.jsx'


class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	const data = this.props.data
        return (
        	<div>
        	{console.log(this.props.submitComment)}
            {
            	data.map((item, index) => {
            		return <Item key={index} data={item} submitComment={this.props.submitComment} />
            	})
            }
            </div>
        )
    }
}

export default OrderList
