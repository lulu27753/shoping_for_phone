import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class BuyAndStore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.storeClickHandle = this.storeClickHandle.bind(this)
        this.buyClickHandle = this.buyClickHandle.bind(this)
    }
    storeClickHandle() {
    	this.props.storeHandle()
    }
    buyClickHandle() {
    	this.props.buyHandle()
    }
    render() {
        return (
            <div>
            	<div>
	            	{
	            		this.props.isStore
	            		? <button onClick={this.storeClickHandle}>已收藏</button>
	            		: <button onClick={this.storeClickHandle}>收藏</button>
	            	}
	            </div>
	            <div>
	            	<button onClick={this.buyClickHandle}>购买</button>
	            </div>
            </div>
        )
    }
}

export default BuyAndStore
