import React, { Component} from 'react';
import { MIndexList } from "./styled";
import connect from "./connect";
@connect
class IndexList extends Component {
    render() {
        let { products } = this.props;
        return (
            <MIndexList>
                        {
                            products.map((item, index) => (
                                <div className="mIndexLine__body" key={index}>
                                    <a href={item.url} className="body__line">
                                        <div className="line__pictrue" style={{ backgroundImage: "url(" + item.thumb + ")" }}>
                                            <div className="line__type">{item.product_type} | {item.place_label}</div>
                                            <div className="line__box">
                                                <div className="line__price">{item.price_label}</div>
                                                <div className="line__day">{item.days}</div>
                                            </div>
                                        </div>
                                        <div className="line__content">
                                            <div className="line__title">{item.product_name}</div>
                                            <div className="line__desc">
                                                <span>{item.product_cat}</span>
                                                {item.sub_name}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
            </MIndexList>
        )
    }

}
export default IndexList;
