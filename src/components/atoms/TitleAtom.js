import React from 'react';

function TitleAtom({title, style}) {
  return (
    <div style={style}>
        <p className='paragraph-title'>{title}</p>
    </div>
  )
}

export default TitleAtom;