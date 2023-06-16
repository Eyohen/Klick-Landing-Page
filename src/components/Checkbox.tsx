import React, { useState } from 'react';
import { COLORS } from '../constants/Color';

type CheckListItemProp = {
    text: string,
    id: 'seller' | 'buyer',
    updateSelectedOption: (selectedOption: 'seller' | 'buyer') => void,
}
function CheckListItem(props: CheckListItemProp) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event, updateSelectedOption: CheckListItemProp['updateSelectedOption']) => {
        setIsChecked(event.target.checked);
        updateSelectedOption(props.id)
    };

    return (
        <li style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row' }}>
            <div style={{ minWidth: '120px' }}>{props.text}</div>
            <div>
                <label style={{
                    innerHeight: '20px',
                }}>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(event) => handleCheckboxChange(event, props.updateSelectedOption)}
                        style={{
                            width: '25px',
                            height: '25px',
                            marginLeft: '20px',
                        }}
                    />
                </label>
            </div>
        </li>
    )
}

export default CheckListItem;
