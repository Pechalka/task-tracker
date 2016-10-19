import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { Pagination } from 'react-bootstrap';

const TaskPager = (props) => (
    <div className='text-center'>
        {props.items > 1 && <Pagination
          bsSize='small'
          {...props}
          onSelect={(e, data) => props.onSelect(data.eventKey)}
        />}
    </div>
);

TaskPager.propTypes = {
    items: PropTypes.number,
    activePage: PropTypes.number,
    onSelect: PropTypes.func,
};

//import { changePage } from '../state';
import { bindActionCreators } from 'multireducer';

import { getActions } from 'reduxApp/modules/rest';

const tasks = getActions('/api/tasks');
//const mapDispatchToProps = (dispatch) => bindActionCreators({ changePage }, dispatch, 'tasks')

export default connect(
    state => ({
        items: state.rest.tasks.totalPages,
        activePage: state.rest.tasks.page,
    }),
    (dispatch) => bindActionCreators({ onSelect: tasks.changePage }, dispatch, 'tasks')
)(TaskPager);
