import { Select } from '@mantine/core';
import { useState } from 'react';

export default function SelectComponent({ allowDeselect = true }) {
  const [value, setValue] = useState<string | null>(null);

  const handleChange = (selectedValue: string | null) => {
    if (allowDeselect || selectedValue !== value) {
      setValue(selectedValue || null);
    } else {
      setValue(value); // Retain the current value if deselect is not allowed
    }
  };

  return (
    <Select
      label="Your favorite library"
      id="select-component"
      placeholder="Pick value"
      data={['Mona', 'Mani', 'Arn', 'Mania']}
      value={value}
      onChange={handleChange}
    />
  );
}
