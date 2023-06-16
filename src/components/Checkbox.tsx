import React, { useState } from 'react';

function CheckboxExample() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div>
            <label style={{
                innerHeight: '20px',
            }}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    style={{
                        width: '25px',
                        height: '25px',
                        marginLeft: '20px'
                    }}
                />
            </label>
        </div>
    );
}

export default CheckboxExample;
