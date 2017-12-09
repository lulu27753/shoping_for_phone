import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.ChangeHandle = this.ChangeHandle.bind(this)
        this.KeyUpHandle = this.KeyUpHandle.bind(this)
        this.state = { value: '' }
    }
    componentDidMount() {
        //默认值
        this.setState({
            value: this.props.value || ''
        })
    }
    ChangeHandle(e) {
        //监控变化
        this.setState({
            value: e.target.value
        })
    }
    KeyUpHandle(e) {
        //监控enter事件
        if (e.keyCode !== 13) {return}
        this.props.enterHandle(e.target.value)
    }
    render() {
        return (
            <div>
            	<div className="home_header_middle">
                    <div className="search_container">
                    <i className="icon-search"></i>
                    <input type="text" value={this.state.value} onChange={ this.ChangeHandle } onKeyUp = { this.KeyUpHandle }  placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchInput
