import { useEffect, useState } from 'react';
import { Select } from '@mantine/core';

type Character = {
  _id: string;
  name: string;
};

type CharacterSelectProps = {
  defaultValue?: string;
};

const CharacterSelect = ({ defaultValue }: CharacterSelectProps) => {
  const [characterOptions, setCharacterOptions] = useState<{ value: string; label: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState<string | null>(defaultValue || null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://the-one-api.dev/v2/character', {
          headers: {
            Authorization: 'Bearer A0PZt1k6QEJMXHALHZAQ',
          },
        });
        const data = await response.json();
        const options = data.docs.map((character: Character) => ({
          value: character._id,
          label: character.name,
        }));
        setCharacterOptions(options);

        // If a default value is provided, set the selected value to it
        if (defaultValue) {
          const defaultOption = options.find((option: { value: string; label: string }) => option.value === defaultValue);
          if (defaultOption) {
            setSelectedValue(defaultOption.value);
          }
        }
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [defaultValue]);

  return (
    <Select
      label="Select Character"
      placeholder="Pick one"
      data={characterOptions}
      disabled={loading}
      value={selectedValue}
      onChange={setSelectedValue}
    />
  );
};

export default CharacterSelect;
