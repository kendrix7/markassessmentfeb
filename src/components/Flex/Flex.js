import React from 'react';
import './Flex.css';

const Flex = (props) => {
	return (
        <div className='main_container' >
            <div className='first_level_box' >
                <div className='second_level_box' >1</div>
                <div className='second_level_box' >2</div>
                <div className='second_level_box' >3</div>
            </div>
            <div className='first_level_box' >
                <div className='second_level_box' >1</div>
                <div className='second_level_box' >2</div>
                <div className='second_level_box' >3</div>
            </div>
            <div className='first_level_box' >
                <div className='second_level_box' >1</div>
                <div className='second_level_box' >2</div>
                <div className='second_level_box' >3</div>
            </div>
        </div>
	);
};

export default Flex;