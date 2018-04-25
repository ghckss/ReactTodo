import React from 'react';
import PropTypes from 'prop-types';

const Do = ({todoIndex, doIndex, value, onDoUpdate, onDoRemove}) => {
    return (
        <div className='do'>
            <div className='content'>
                {value}
            </div>
            <button onClick={ () => onDoUpdate(todoIndex, doIndex, 'updateValue') }>수정</button>
            <button onClick={ () => onDoRemove(todoIndex, doIndex) }>삭제</button>
        </div>
    );
};

Do.propTypes = {
    todoIndex: PropTypes.number,
    doIndex: PropTypes.number,
    value: PropTypes.string,
    onDoUpdate: PropTypes.func,
    onDoRemove: PropTypes.func
}

Do.defaultProps = {
    todoIndex: 0,
    doIndex: 0,
    value: 'value not defined',
    onDoUpdate: () => console.warn('onUpdate not defined'),
    onDoRemove: () => console.warn('onDelete not defined')
}

export default Do;