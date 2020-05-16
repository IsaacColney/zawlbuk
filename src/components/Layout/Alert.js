import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
const Alert = ({alerts}) => {
    if(alerts === undefined || alerts.length<=0){
        return null;
    }
    return alerts.map(alert => (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
            {alert.msg}
        </div>
    ))
}
    

Alert.propTypes = {
    alerts:PropTypes.array.isRequired
}
const maptoState = state => ({ 
    alerts:state.alert
});
export default connect(maptoState)(Alert);
