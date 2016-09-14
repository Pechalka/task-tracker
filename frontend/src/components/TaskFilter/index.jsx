import React from 'react';

import { Button, Grid, Col, Row } from 'react-bootstrap';

import Select from 'react-select';

const TaskFilter = ({ statuses, users, userId, status, changeFilter, findTask }) => {
    const options = statuses.map(str => (
        { value: str, label: str }
    ));

    const allUsers = users.map(user => (
        { value: user.id, label: user.name })
    );

    return (
        <div>
            <Grid style={{ padding: 0 }} fluid={true}>
                <Row>
                    <Col xs={3}>
                        <Select
                          value={status}
                          onChange={newValue => changeFilter('status', newValue.value)}
                          searchable={false}
                          clearable={false}
                          options={options}
                        />
                    </Col>
                    <Col xs={3} xsOffset={2}>
{/*
// http://stackoverflow.com/questions/36187522/react-select-with-value-null
// TODO: fix
*/}
                        <Select
                          value={userId || ''}
                          onChange={newValue => changeFilter('userId', newValue.value || null)}
                          searchable={false}
                          clearable={false}
                          options={allUsers.concat([{ value: '', label: 'All' }])}
                        />
                    </Col>
                </Row>
            </Grid>
            <div style={{ marginTop: 10 }}>
                <Button onClick={findTask}>Find</Button>
            </div>
        </div>
    );
};


export default TaskFilter;
