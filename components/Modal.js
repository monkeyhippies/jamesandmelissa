var React = require('react');
var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;

var PaymentForm = React.createClass({
  mixins: [ ReactScriptLoaderMixin ],

  getInitialState: function() {
    return {
      stripeLoading: true,
      stripeLoadingError: false,
      submitDisabled: false,
      paymentError: null,
      paymentComplete: false,
      token: null
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

    <div id="purchaseModal" className="modal fade" role="dialog">
    <div className="modal-dialog">

    <div className="modal-content">
    <div className="modal-header">
        <button disabled={this.state.submitDisabled} type="button" data-dismiss="modal" className="close">&times;</button>
        <h4 className="modal-title">Complete Your Purchase</h4>
    </div>
    <form onSubmit={this.onSubmit} id="paymentForm" className="form-horizontal">
    <span>{ this.state.paymentError }</span><br />
    <div className="form-group">
        <label className="col-xs-3 control-label">Credit card number</label>
        <div className="col-xs-5">
            <input type="text" className="form-control" data-stripe="number" placeholder="credit card number"/>
        </div>
    </div>

    <div className="form-group">
        <label className="col-xs-3 control-label">Expiration</label>
        <div className="col-xs-3">
            <input type="text" className="form-control" placeholder="Month" data-stripe="exp-month" placeholder="expiration month"/>
        </div>
        <div className="col-xs-3">
            <input type="text" className="form-control" placeholder="Year" data-stripe="exp-year" placeholder="expiration year"/>
        </div>
    </div>

    <div className="form-group">
        <label className="col-xs-3 control-label">CVC</label>
        <div className="col-xs-2">
            <input type="text" className="form-control" data-stripe="cvc" placeholder="cvc"/>
        </div>
    </div>
    <div className="modal-footer">
    <button type="button" disabled={this.state.submitDisabled} className="btn btn-default" type="submit" data-dismiss="modal">Submit Purchase</button>
    </div>
    </form>
</div>
</div>
</div>
);
    }
}
});

module.exports = PaymentForm;
