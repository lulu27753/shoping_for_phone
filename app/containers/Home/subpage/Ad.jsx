import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import * as AdResource from '../../../fetch/home/home.js'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	datas: []
        }
    }

    render() {
    	const listItem = this.state.datas.map((data, index) => 
            		<div key={index}>
            			<li>{data.title}</li>
            			<li>{data.link}</li>
            		</div>
            	);
        return (
            <div>
            	<ul>
            		{listItem}
            	</ul>
            </div>
        )
    }
    componentDidMount() {
    	AdResource.getAdData()
    		.then((res) => { return res.json() })
    		.then((json) => {
    			const data = json;
    			if (data.length) {
    				this.setState({
    					datas: data
    				});
    			}
    		});
    	
    	
    }
}
	

export default Ad;
