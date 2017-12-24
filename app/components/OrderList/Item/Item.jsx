import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.showComment = this.showComment.bind(this)
        this.submitCommentHandle = this.submitCommentHandle.bind(this)
        this.hideComment = this.hideComment.bind(this)
        this.commentOk = this.commentOk.bind(this)
        this.state =  {
        	commentState: 2,//0-未评价 1-评价中 2-已评价
        }
    }
    componentDidMount() {
    	this.setState({
    		commentState: this.props.data.commentState
    	});
    }
    showComment() {
    	this.setState({
    		commentState: 1
    	});
    }
    submitCommentHandle() {
    	const submitComment = this.props.submitComment
    	const id = this.props.data.id
    	const commentTextDom = this.refs.commentText
    	const value = commentTextDom.value.trim()
    	if (!value) {
    		return
    	}
    	console.log(submitComment)
    	//提交评论内容
    	submitComment(id, value, this.commentOk)
    }
    commentOk() {
    	//已经评价，修改状态
    	this.setState({
    		commentState: 2
    	});
    }
    hideComment() {
    	this.setState({
    		commentState: 0
    	});
    }
    render() {
    	const data = this.props.data
    	console.log(data)
        return (
            <div>
            	<p>商户：{data.title}</p>
            	<p>数量：{data.count}</p>
            	<p>价格: ￥{data.price}</p>
            	{
            		//未评价
            		this.state.commentState === 0
            		? <button className='btn' onClick={this.showComment}>评论</button>
            		:
            			this.state.commentState === 1
            			? ''//评价中
            			: <button className='btn unselected'>已评论</button>//已评价
            	}
            	{
            		this.state.commentState === 1
            		? <div>
            			<textarea ref='commentText'></textarea>
            			<button onClick={this.submitCommentHandle}>提交</button>&nbsp;
            			<button onClick={this.hideComment}>取消</button>
            		</div>
            		: ''
            	}
            	
            </div>
        )
    }
}

export default Item
