import React, { useState, useEffect } from 'react'

function ProgressBar({ percentage }) {
    const [ widths, setWidths ] = useState(0);

    useEffect(() => {
        requestAnimationFrame(() => {
          setWidths(percentage);
        });
      }, [percentage]);


    return (
        <div className="progress-bar">
            <div className="filler" style={{width: widths}} />
        </div>
    )
}

export default ProgressBar;
