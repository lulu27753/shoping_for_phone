import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.loadMoreHandle = this.loadMoreHandle.bind(this)
        this.scrollFn = this.scrollFn.bind(this);
    }
    loadMoreHandle() {
    	//执行传递过来的loadMoreData函数
    	this.props.loadMoreData();
    }
    scrollFn(){
    	let timeoutId
    	if (this.props.isLoadingMore) {
    		return
    	}
    	if (timeoutId) {clearTimeout(timeoutId)};
    	const wrapper = this.refs.wrapper;

    	timeoutId = setTimeout(() => 
    		{
	    		const top = wrapper.getBoundingClientRect().top;
	    		const windowHeight = window.screen.height;
	    		if (top && top < windowHeight) {
	    			this.loadMoreHandle();
	    		}
    		}
    		, 50);

    }
    componentDidMount() {

    	window.addEventListener('scroll',this.scrollFn, false)
    }
    render() {
        return (
            <div className="load_more" ref="wrapper">
            	{
            		this.props.isLoadingMore
            		? <span>加载中...</span>
            		: <span onClick={this.loadMoreHandle}>加载更多</span>
            	}
            </div>
        )
    }
}

export default LoadMore

