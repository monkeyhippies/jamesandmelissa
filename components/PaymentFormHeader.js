import React, { PropTypes } from 'react';

const PaymentFormHeader = ({submitDisabled}) => (
    <div className="modal-header">
        <button disabled={submitDisabled} type="button" data-dismiss="modal" className="close">&times;</button>
        <h4 className="modal-title">Complete Your Purchase</h4>
    </div>
)

PaymentFormHeader.propTypes = {
    submitDisabled : PropTypes.bool.isRequired
}

export default PaymentFormHeader
