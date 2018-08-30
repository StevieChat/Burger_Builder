import React, { Component } from 'react';

import Aux from '../../../hoc/Auxilary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSumary extends Component {
    componentWillUpdate () {
        console.log('[Order Summary] will update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li> );
        } );

        return (
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                clicked={this.props.purchaseCancelled}
                buttonType="Danger">
                CANCEL</Button>
            <Button
                clicked={this.props.purchaseContinued}
                buttonType="Success">
                CONTINUE</Button>     
         </Aux>
        );
    }
}

export default OrderSumary;