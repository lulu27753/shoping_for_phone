import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class CurrentCity extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    render() {
        return (
            <div>
            	<h2>{ this.props.cityName }</h2>
            	
            </div>
        )
    }
}

 
export default CurrentCity
