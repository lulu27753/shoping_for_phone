import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchHeader from '../../components/SearchHeader/index.jsx'
import SearchList from './subpage/List.jsx'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        console.log(this.props.params)
    }
    render() {
        return (
            <div>
                <SearchHeader keyword={this.props.params.keyword}/>
                <SearchList keyword={this.props.params.keyword} category={this.props.params.type}/>
            </div>
        )
    }
}

export default Search
