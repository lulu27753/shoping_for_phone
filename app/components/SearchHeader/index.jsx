import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from 'react-router'

import SearchInput from '../SearchInput/index.jsx'

class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.clickHandle = this.clickHandle.bind(this)
        this.enterHandle = this.enterHandle.bind(this);
    }
    clickHandle() {
        window.history.back()
    }
    enterHandle(kwd) {
    	hashHistory.push('/search/all/' + encodeURIComponent(kwd))
    }
    render() {
        return (
            <div>
                <h1 onClick={this.clickHandle}>返回</h1>
                <SearchInput value={ this.props.keyword || '' } enterHandle= { this.enterHandle } ></SearchInput>
            </div>
        )
    }
}

export default SearchHeader
