import React from 'react';
import SHOP_DATA from '../../shopData';
import './shoppage.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview';
class ShopPage extends React.Component {

    state = {
        collections: SHOP_DATA
    }

    render(){
        const {collections} = this.state;
        return(
            <div>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}
export default ShopPage;