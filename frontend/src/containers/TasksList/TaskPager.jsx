import { connect } from 'react-redux';

import TaskPager from 'components/TaskPager';
import { changeTaskPage } from 'reduxApp/modules/tasks';

export default connect(
    state => ({
        items: state.tasks.items,
        activePage: state.tasks.page,
    }),
    {
        onSelect: changeTaskPage,
    }
)(TaskPager);
