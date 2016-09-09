import React from 'react';
import { Button, Label, ListGroupItem, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router';

const ProductItem = ({ product, removeProject }) => {
    const users = (product.users || [])
        .map(user => <span>&nbsp;<Label bsStyle='default'>{user.name}</Label></span>);

    return (
        <ListGroupItem>
            <div className='clearfix'>
                <div className='pull-left'>
                    <Link to={`/projects/${product.id}/tasks`}>{product.title}</Link>
                </div>
                <div className='pull-right'>
                    <Button
                      onClick={() => removeProject(product)}
                      bsStyle='danger'
                      bsSize='xsmall'
                    >remove</Button>
                </div>
                <div className='pull-right'>
                    {users}&nbsp;
                </div>
            </div>
        </ListGroupItem>
    );
};

const ProjectsList = ({ openPopup, projects, removeProject }) => (
    <ListGroup>
        <ListGroupItem>
            <div className='clearfix'>
                <div className='pull-left'>
                    <h5>My projects</h5>
                </div>
            </div>

        </ListGroupItem>

        {projects.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              removeProject={removeProject}
            />)
        )}

    </ListGroup>
);

export default ProjectsList;
