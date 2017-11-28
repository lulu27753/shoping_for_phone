import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getListData } from '../../../fetch/home/home.js'
import ListComponent from '../../../components/List/index.jsx'
import './style.less'
import LoadMore from '../../../components/LoadMore/index.jsx'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.loadMoreData = this.loadMoreData.bind(this);
        this.state = {
        	listData: [],//存储列表信息
        	hasMore: false,//记录当前状态下，还有没有更多的数据可供加载
            isLoadingMore: false,//记录当前状态下，是“加载中。。。”,还是"点击加载更多"
            page: 1//下一页的页码
        }
    }
    // 加载更多数据
    loadMoreData () {
        //记录状态
        this.setState({
            isLoadingMore: true
        });
        const cityName = this.props.cityName
        const page = this.state.page;
        const loveList = getListData(cityName, page)
        this.dataHandle(loveList)

        // 增加page的计数
        this.setState({
            page: page + 1,
            isLoadingMore: false
        });

    }
    // 数据处理
    dataHandle(data) {
    	data.then(res => {return res.json()})
    		.then(json => { 
    			const hasMore = json.hasMore;
    			const listData = json.data;

                // 存储
    			this.setState({
    				listData: this.state.listData.concat(listData),
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
    	
        return (
        	<div>
            <h1 className="home_list_title">猜你喜欢{this.props.cityName}</h1>
            <div>{this.state.hasMore.toString()}{this.state.listData.length}</div>
            {
            	this.state.listData.length 
                ? <ListComponent data={this.state.listData}/> 
                : <div>加载中。。。</div>
            }
            {
                this.state.hasMore
                ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreData={this.loadMoreData}></LoadMore>
                : <div></div>
            }
            
            </div>
        )
    }

}


export default List;
