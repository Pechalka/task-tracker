
import { connect } from 'react-redux';
import { addComment } from 'reduxApp/modules/comments';

import AddComentFormComponent from 'components/AddComentForm/';


const AddComentForm = connect(
    null,
    { addComment }
)(AddComentFormComponent);


export default AddComentForm;
