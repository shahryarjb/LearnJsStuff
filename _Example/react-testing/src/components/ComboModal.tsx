import { useState } from 'react';
import { Select, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

type DataItem = {
  value: string;
  label: string;
};

const ComboModal: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);

  const data: DataItem[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' },
    { value: 'honeydew', label: 'Honeydew' },
    { value: 'kiwi', label: 'Kiwi' },
    { value: 'lemon', label: 'Lemon' },
    { value: 'mango', label: 'Mango' },
    { value: 'nectarine', label: 'Nectarine' },
    { value: 'orange', label: 'Orange' },
    { value: 'papaya', label: 'Papaya' },
    { value: 'quince', label: 'Quince' },
    { value: 'raspberry', label: 'Raspberry' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'tangerine', label: 'Tangerine' },
    { value: 'ugli fruit', label: 'Ugli Fruit' },
    { value: 'watermelon', label: 'Watermelon' },
  ];

  const handleItemClick = (value: string | null, option: DataItem | undefined) => {
    if (value !== null && option !== undefined) {
      setSelectedItem(option);
      open();
    }
  };

  return (
    <div>
      <Select 
        data={data}
        onChange={(value, option) => handleItemClick(value, option)}
        placeholder="Pick a fruit"
      />
      <Modal opened={opened} onClose={close} title="Selected Item">
        <div>{selectedItem ? selectedItem.label : ''}</div>
        <button onClick={close}>Close</button>
      </Modal>
    </div>
  );
};

export default ComboModal;
