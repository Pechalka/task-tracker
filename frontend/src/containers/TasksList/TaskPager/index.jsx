import React, { PropTypes } from 'react';
import { Pagination } from 'react-bootstrap';

export const TaskPager = (props) => (
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

