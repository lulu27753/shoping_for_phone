import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getOrderListData, postComment  } from '../../../fetch/user/orderlist'
import OrderListComponent from '../../../components/OrderList/index.js'

class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.submitComment = this.submitComment.bind(this)
        this.state = {
        	data: []
        }
    }
    componentDidMount() {
    	//获取订单信息
    	const username = this.props.username
    	if (username) {
    		this.loadOrderList(username)
    	}
    }
    loadOrderList(username){
    	const result = getOrderListData(username)
    	result.then(res => {
    		return res.json()
    	}).then(json => {
    		return this.setState({
    			data: json
    		});
    	})
    }
    //提交评价
    submitComment(id, value, callback) {
    	const result = postComment(id, value)
    	result.then(res => {
    		return res.json()
    	}).then(json => {
    		if (json.errno === 0) {
    			//已经评价，修改状态
    			callback()
    			alert('提交评价成功！')
    		}
    	})
    }
    render() {
        return (
            <div>
            	<h2>您的订单</h2>
            	{
            		this.state.data.length
            		? <OrderListComponent data={this.state.data} submitComment={this.submitComment}/>
            		: ''
            	}
            </div>
        )
    }
}

export default OrderList









