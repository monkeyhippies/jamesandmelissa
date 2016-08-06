import PaymentExpirationForm from './PaymentExpirationForm';
import PaymentCvcForm from './PaymentCvcForm';
import PaymentCreditCardForm from './PaymentCreditCardForm';
import PaymentFormHeader from './PaymentFormHeader';
import { PropTypes } from 'react';

var React = require('react');
var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;

var PaymentForm = React.createClass({
  mixins: [ ReactScriptLoaderMixin ],

  propTypes: {
      onClick: PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      stripeLoading: true,
      stripeLoadingError: false,
      submitDisabled: false,
      paymentError: null,
      paymentComplete: false,
      token: null,
      onClick: e => {
         e.preventDefault()
         onClick()
       },
      showPaymentForm: false
    };
  },

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
    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" onClick={this.props.onClick}>Purchase</button>

    <div id="purchaseModal" className="modal fade" role="dialog">
    <div className="modal-dialog">

    <div className="modal-content">
    <PaymentFormHeader submitDisabled={false} show={this.props.showPaymentForm}/>
    <form onSubmit={this.onSubmit} id="paymentForm" className="form-horizontal">
    <span>{ this.state.paymentError }</span><br />

    <PaymentCreditCardForm show={this.props.showPaymentForm}/>
    <PaymentExpirationForm show={this.props.showPaymentForm}/>
    <PaymentCvcForm show={this.props.showPaymentForm}/>

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
