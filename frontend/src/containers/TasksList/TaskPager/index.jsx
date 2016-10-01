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

import { changePage } from '../state';

export default connect(
    state => ({
        items: state.tasksList.items,
        activePage: state.tasksList.page,
    }),
    {
        onSelect: changePage,
    }
)(TaskPager);
