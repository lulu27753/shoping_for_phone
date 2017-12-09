import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(newCity){
    	const changeCity = this.props.changeFn;
    	changeCity(newCity);
    }
    render() {
        return (
            <div>
	            <h1>城市列表</h1>
	            <ul>
	            	<li onClick={ () => {this.clickHandler('北京')}} >北京</li>
	            	<li onClick={ () => {this.clickHandler('上海')}} >上海</li>
	            	<li onClick={ () => {this.clickHandler('杭州')}} >杭州</li>
	            </ul>
            </div>
        )
    }
}

export default CityList
