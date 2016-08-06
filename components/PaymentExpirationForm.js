import React, { PropTypes } from 'react'

const PaymentExpirationForm = ({ }) => (
<div className="form-group">
    <label className="col-xs-3 control-label">Expiration</label>
    <div className="col-xs-3">
        <input type="text" className="form-control" placeholder="Month" data-stripe="exp-month" placeholder="exp. month"/>
    </div>
    <div className="col-xs-3">
        <input type="text" className="form-control" placeholder="Year" data-stripe="exp-year" placeholder="exp. year"/>
    </div>
</div>
)

PaymentExpirationForm.propTypes = {
}

export default PaymentExpirationForm
