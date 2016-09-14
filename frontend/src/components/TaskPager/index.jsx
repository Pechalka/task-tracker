import React, { PropTypes } from 'react';
import { Pagination } from 'react-bootstrap';


const TaskPager = (props) => (
    <div className='text-center'>
        {props.items > 1 && <Pagination
          bsSize='small'
          {...props}
        />}
    </div>
);

TaskPager.propTypes = {
    items: PropTypes.number,
    activePage: PropTypes.number,
    onSelect: PropTypes.func,
};

export default TaskPager;
