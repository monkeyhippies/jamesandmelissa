import React, { PropTypes } from 'react'

const PaymentCvcForm = ({ }) => (
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
)

PaymentCvcForm.propTypes = {
}

export default PaymentCvcForm
