import React, { PropTypes } from 'react';
import { Pagination } from 'react-bootstrap';
import { observer } from 'mobx-react';

export const TaskPager = observer(['taskList'], ({ taskList: { items, onSelect, page } }) => {
    console.log('render pager');
    return (
        <div className='text-center'>
            {items > 1 && <Pagination
              bsSize='small'
              activePage={page}
              items={items}
              onSelect={(e, data) => onSelect(data.eventKey)}
            />}
        </div>
    );
});

TaskPager.propTypes = {
    items: PropTypes.number,
    activePage: PropTypes.number,
    onSelect: PropTypes.func,
};

