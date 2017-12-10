import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Star from '../../components/Star'
import './style.less'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	const data = this.props.info
    	console.log(data)
        return (
            <div id="detail-info-container">
                <div className="info-container clear-fix">
                    <div className="info-img-container fl">
                        <img src={data.img}/>
                    </div>
                    <div className="info-content">
                        <h1>{data.title}</h1>
                        <div className="star-container">
                            {/* 引用 Star 组件 */}
                            <Star star={data.star}/>
                            <br/>
                            <span className="price">￥{data.price}</span>
                        </div>
                        <p className="sub-title">{data.subTitle}</p>
                    </div>
                </div>
                {/* 设置 innerHTML */}
                <div dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></div>
            </div>
        )
    }
}

export default DetailInfo
