import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
import Item from './items/index.jsx'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	const data = this.props.data

        return (
            <div>
            {data.map((item, index) => {
    			return (
    			<li key = {index} className="list-container">
    				<Item data={item}></Item>
    				
    			</li>)
    		})}
            </div>
        )
    }
}


export default List