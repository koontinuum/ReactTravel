import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch() {
  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)
  }

  return (
    <div className="app" style={{rotate: 180  }}>
      <ReactSwitch
        checked={checked}
        checkedIcon={false}
        height={21}
        width={43}
        onColor={'#FA541C'}
        uncheckedIcon={false}
        onChange={handleChange}
      />
    </div>
  );
}

export default ToggleSwitch;