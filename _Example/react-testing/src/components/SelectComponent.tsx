import { Select } from '@mantine/core';
import { useState } from 'react';

interface SelectComponentProps {
  allowDeselect?: boolean;
  controlledValue?: string | null;
}

export default function SelectComponent({
  allowDeselect = true,
  controlledValue = null,
}: SelectComponentProps) {
  const [value, setValue] = useState<string | null>(controlledValue);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (selectedValue: string | null) => {
    if (allowDeselect || selectedValue !== value) {
      setValue(selectedValue || null);
    } else {
      setValue(value); // Retain the current value if deselect is not allowed
    }
  };

  const handleSearchChange = (search: string) => {
    setSearchValue(search);
  };

  return (
    <Select
      label="Your favorite library"
      id="select-component"
      placeholder="Pick value"
      data={['Mona', 'Mani', 'Arn', 'Mania']}
      value={value}
      onChange={handleChange}
      searchable
      searchValue={searchValue}
      onSearchChange={handleSearchChange}
    />
  );
}
