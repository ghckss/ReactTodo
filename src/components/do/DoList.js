import React from 'react';
import PropTypes from 'prop-types';
import Do from './Do';

const DoList = ({doList, todoIndex, onDoUpdate, onDoRemove}) => {
    const list = doList.map(
        (content, i) => (
            <Do
                key = {i}
                todoIndex = {todoIndex}
                doIndex = {i}
                value = {content.work}
                onDoUpdate = {onDoUpdate}
                onDoRemove = {onDoRemove}
            />
        )
    );

    return (
        <div className='doList'>
            {list}
        </div>
    )
}

DoList.propTypes = {
    doList: PropTypes.array,
    todoIndex: PropTypes.number,
    onDoUpdate: PropTypes.func,
    onDoRemove: PropTypes.func
}

DoList.defaultProps = {
    doList: [],
    todoIndex: 0,
    onDoUpdate: () => {console.log('not defined')},
    onDoRemove: () => {console.log('not defined')}
}
export default DoList;