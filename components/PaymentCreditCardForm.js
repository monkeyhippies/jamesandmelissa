import React, { PropTypes } from 'react'

const PaymentCreditCardForm = ({ }) => (
<div className="form-group">
    <label className="col-xs-3 control-label">Credit card number</label>
    <div className="col-xs-5">
        <input type="text" className="form-control" data-stripe="number" placeholder="credit card number"/>
    </div>
</div>

)

PaymentCreditCardForm.propTypes = {
}

export default PaymentCreditCardForm
