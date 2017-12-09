import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchInput from '../SearchInput/index.jsx'

class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.enterHandle = this.enterHandle.bind(this);
    }
    enterHandle() {
    	
    }
    render() {
        return (
            <SearchInput value={ this.props.keyword || '' } enterHandle= { this.enterHandle } ></SearchInput>
        )
    }
}

export default SearchHeader
