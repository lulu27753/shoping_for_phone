import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = { value: '' }
    }
    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        })
    }
    ChangeHandle(e) {
        this.setState({
            value: e.target.value
        })
    }
    KeyUpHandle() {
        if (e.keyCode !== 13) {return}
        this.props.enterHandle(this.state.value)
    }
    render() {
        return (
            <div>
            	<div className="home_header_middle">
                    <div className="search_container">
                    <i className="icon-search"></i>
                    <input type="text" value={ this.state.value } onChange={ this.props.ChangeHandle } onKeyUp = { this.props.KeyUpHandle } placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchInput
