import React from 'react';
import Contact from './Contact';

function List(props) {
    return (
        <div>
        {/* commented this out on account of adding the constructor and messing with props as a result */}
            {props.details.map(c => <Contact key={c.id} name={c.name} email={c.email} phone={c.phone} />)} 
        </div>
    );
}
export default List;