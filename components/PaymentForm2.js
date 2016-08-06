import React, { Component, PropTypes } from 'react';
import PaymentExpirationForm from './PaymentExpirationForm';
import PaymentCvcForm from './PaymentCvcForm';
import PaymentCreditCardForm from './PaymentCreditCardForm';
import PaymentFormHeader from './PaymentFormHeader';

var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;
//mixins: [ReactScriptLoaderMixin]

export default class PaymentForm extends Component {
    render() {
        const {
                StripeLoading,
                stripeLoadingError,
                SubmitDisabled,
                paymentError,
                paymentComplete,
                token
        } = this.props
    }

    getInitialState: function() {
        return {
            StripeLoading: true,
            stripeLoadingError: false,
            SubmitDisabled: false,
            paymentError: null,
            paymentComplete: false,
            token: null
        }
    }

  getScriptURL: function() {
    return 'https://js.stripe.com/v2/';
  },

  onScriptLoaded: function() {
    if (!PaymentForm.getStripeToken) {
      // Put your publishable key here
      Stripe.setPublishableKey('pk_test_L9gIITvU8MYXPqLTOVFJyx1Y');

      this.setState({ stripeLoading: false, stripeLoadingError: false });
    }
  },

  onScriptError: function() {
    this.setState({ stripeLoading: false, stripeLoadingError: true });
  },

  onSubmit: function(event) {
    var self = this;
    event.preventDefault();
    this.setState({ submitDisabled: true, paymentError: null });
    // send form here
    Stripe.createToken(event.target, function(status, response) {
      if (response.error) {
        self.setState({ paymentError: response.error.message, submitDisabled: false });
      }
      else {
        self.setState({ paymentComplete: true, submitDisabled: false, token: response.id });
        // make request to your server here!
      }
    });
  },

  render: function() {
    if (this.state.stripeLoading) {
      return <div>Loading</div>;
    }
    else if (this.state.stripeLoadingError) {
      return <div>Error</div>;
    }
    else if (this.state.paymentComplete) {
      return <div>Payment Complete!</div>;
    }
    else {
      return (
    <div>
<button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#purchaseModal">Purchase</button>

    <div id="purchaseModal" className="modal fade" role="dialog">
    <div className="modal-dialog">

    <div className="modal-content">
    <PaymentFormHeader submitDisabled={false}/>
    <form onSubmit={this.onSubmit} id="paymentForm" className="form-horizontal">
    <span>{ this.state.paymentError }</span><br />

    <PaymentCreditCardForm />
    <PaymentExpirationForm />
    <PaymentCvcForm />

    <div className="modal-footer">
    <button type="button" disabled={this.state.submitDisabled} className="btn btn-default" type="submit" data-dismiss="modal">Submit Purchase</button>
    </div>
    </form>
</div>
</div>
</div>
</div>
);
    }
}
});

module.exports = PaymentForm;
