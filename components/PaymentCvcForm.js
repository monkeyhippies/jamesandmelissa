import React, { PropTypes } from 'react'

const PaymentCvcForm = ({ }) => (
<div className="form-group">
    <label className="col-xs-3 control-label">CVC</label>
    <div className="col-xs-2">
        <input type="text" className="form-control" data-stripe="cvc" placeholder="cvc"/>
    </div>
</div>
)

PaymentCvcForm.propTypes = {
}

export default PaymentCvcForm
