import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	const data = this.props.data
        return (
            <div>
            	<p>{data.title}</p>
            	<p>{data.count}</p>
            	<p>{data.price}</p>
            	<button>评论</button>
            </div>
        )
    }
}

export default Item
