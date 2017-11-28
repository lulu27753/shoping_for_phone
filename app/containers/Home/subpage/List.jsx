import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getListData } from '../../../fetch/home/home.js'
import ListComponent from '../../../components/List/index.jsx'
import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	listData: [],
        	hasMore: false
        }
    }
    // 数据处理
    dataHandle(data) {
    	data.then(res => {return res.json()})
    		.then(json => { 
    			const hasMore = json.hasMore;
    			const listData = json.data;
    			this.setState({
    				listData: listData,
    				hasMore: hasMore
    			});
    		})
    }
    //获取首屏数据
    loaderFirstPageData() {
    	const cityName = this.props.cityName
    	const loveList = getListData(cityName, 0)
    	this.dataHandle(loveList)
    }
    componentDidMount() {
    	//获取首页数据
    	this.loaderFirstPageData();
    	
    }
    render() {
    	const data = this.props.data
        return (
        	<div>
            <h1 className="home_list_title">猜你喜欢{this.props.cityName}</h1>
            <div>{this.state.hasMore.toString()}{this.state.listData.length}</div>
            {
            	this.state.listData.length ? <ListComponent data={this.state.listData}/> : <div>加载中。。。</div>
            }
            
            </div>
        )
    }

}


export default List;
