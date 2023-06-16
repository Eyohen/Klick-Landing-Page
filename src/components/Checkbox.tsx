import React, { useState } from 'react';
import { COLORS } from '../constants/Color';

type CheckListItemProp = {
    text: string
}
function CheckListItem(props: CheckListItemProp) {
    return (
        <li style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row' }}>
            <div style={{ minWidth: '120px' }}>{props.text}</div>
            <Checkbox />
        </li>
    )
}

function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        console.log('event.target.checked', event.target.checked)
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
                        marginLeft: '20px',
                    }}
                />
            </label>
        </div>
    );
}

export default CheckListItem;
