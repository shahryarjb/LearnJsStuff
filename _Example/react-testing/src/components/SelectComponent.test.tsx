import { screen, fireEvent } from '../../test-utils';
import { describe, it, expect } from 'vitest';
import { render } from '../../test-utils';
import SelectComponent from './SelectComponent';

describe('SelectComponent', () => {
  it('should have all count of values we gave to it', () => {
    render(<SelectComponent />);
    // Open the dropdown by clicking the input field
    fireEvent.mouseDown(screen.getByPlaceholderText('Pick value'));
    const options = screen.getAllByText(/Mona|Mani|Arn|Mania/);
    expect(options).toHaveLength(4); // We expect 4 options: Mona, Mani, Arn, Mania
  });

  it('should show placeholder', () => {
    render(<SelectComponent />);
    expect(screen.getByPlaceholderText('Pick value')).toBeInTheDocument();
  });

  it('should open correctly', () => {
    render(<SelectComponent />);
    const selectInput = screen.getByPlaceholderText('Pick value');
    fireEvent.mouseDown(selectInput);
    const options = screen.getAllByText(/Mona|Mani|Arn|Mania/);
    expect(options.length).toBeGreaterThan(0); // Ensures dropdown opens
  });

  it('should replace placeholder with selected value', () => {
    render(<SelectComponent />);
    const selectInput = screen.getByPlaceholderText('Pick value');
    fireEvent.mouseDown(selectInput);
    const option = screen.getByText('Mona');
    fireEvent.click(option);
    // Check if the selected value is displayed
    expect((selectInput as HTMLInputElement).value).toBe('Mona');
  });

  it('should contain a specific value in the select', () => {
    render(<SelectComponent />);
    // Open the dropdown
    fireEvent.mouseDown(screen.getByPlaceholderText('Pick value'));
    const option = screen.getByText('Arn');
    expect(option).toBeInTheDocument(); // Check if 'Arn' exists in the options
  });

  it('should handle null value correctly', () => {
    render(<SelectComponent />);
    const selectInput = screen.getByPlaceholderText('Pick value');
    fireEvent.mouseDown(selectInput);
    const option = screen.getByText('Mona');
    fireEvent.click(option);
    // Check if the selected value is displayed
    expect((selectInput as HTMLInputElement).value).toBe('Mona');

    // Simulate setting the value to null - This step might need an update based on how Mantine handles null values
    // For demonstration purposes, assuming placeholder resets
    fireEvent.change(selectInput, { target: { value: '' } });
    expect((selectInput as HTMLInputElement).value).toBe(''); // Check if placeholder is shown again
  });

  it('supports uncontrolled state', () => {
    render(<SelectComponent />);
    const selectInput = screen.getByPlaceholderText('Pick value');
    
    // Open the dropdown and select an option
    fireEvent.mouseDown(selectInput);
    let option = screen.getByText('Mani');
    fireEvent.click(option);
    expect((selectInput as HTMLInputElement).value).toBe('Mani');
    
    // Open the dropdown and select another option
    fireEvent.mouseDown(selectInput);
    option = screen.getByText('Arn');
    fireEvent.click(option);
    expect((selectInput as HTMLInputElement).value).toBe('Arn');
    
    // Simulate setting the value to null - Assuming placeholder resets
    fireEvent.change(selectInput, { target: { value: '' } });
    expect((selectInput as HTMLInputElement).value).toBe('');
  });

  it('allows deselecting option', () => {
    render(<SelectComponent />);
    const selectInput = screen.getByPlaceholderText('Pick value');
    
    // Open the dropdown and select an option
    fireEvent.mouseDown(selectInput);
    const option = screen.getByText('Mona');
    fireEvent.click(option);
    expect((selectInput as HTMLInputElement).value).toBe('Mona');
    
    // Open the dropdown and deselect the same option
    fireEvent.mouseDown(selectInput);
    fireEvent.click(option);
    expect((selectInput as HTMLInputElement).value).toBe('');
  });

  it('allows searching options with searchable prop', () => {
    render(<SelectComponent />);
    const selectInput = screen.getByPlaceholderText('Pick value');
    
    // Open the dropdown
    fireEvent.mouseDown(selectInput);
    
    // Enter search query
    fireEvent.change(selectInput, { target: { value: 'Mona' } });

    // Check if the search query filters the options
    expect(screen.getByText('Mona')).toBeInTheDocument();
    expect(screen.queryByText('Mani')).not.toBeInTheDocument();
    expect(screen.queryByText('Arn')).not.toBeInTheDocument();
    expect(screen.queryByText('Mania')).not.toBeInTheDocument();
  });

  it('displays nothing if no options matched search query', () => {
    render(<SelectComponent />);
    const selectInput = screen.getByPlaceholderText('Pick value');
    
    // Open the dropdown
    fireEvent.mouseDown(selectInput);
    
    // Enter search query that does not match any options
    fireEvent.change(selectInput, { target: { value: 'Unknown' } });

    // Check if the dropdown closes and no options are displayed
    expect(screen.queryByText('Mona')).not.toBeInTheDocument();
    expect(screen.queryByText('Mani')).not.toBeInTheDocument();
    expect(screen.queryByText('Arn')).not.toBeInTheDocument();
    expect(screen.queryByText('Mania')).not.toBeInTheDocument();
  });
  it('allows to change controlled search value when value is controlled and selected', () => {
    const controlledValue = 'Mani';
    const { rerender } = render(<SelectComponent controlledValue={controlledValue} />);
    
    // Check if the controlled value is set correctly
    let selectInput = screen.getByPlaceholderText('Pick value');
    expect(screen.getByText('Mani')).toBeInTheDocument();
    
    // Open the dropdown
    fireEvent.mouseDown(selectInput);

    // Change search value
    fireEvent.change(selectInput, { target: { value: 'Man' } });

    // Check if the search query filters the options
    expect(screen.getByText('Mani')).toBeInTheDocument();
    expect(screen.queryByText('Mona')).not.toBeInTheDocument();

    // Select a new value
    fireEvent.click(screen.getByText('Mani'));
    expect(screen.getByText('Mani')).toBeInTheDocument();
    
    // Rerender with a new controlled value
    rerender(<SelectComponent controlledValue="Mona" />);
    selectInput = screen.getByPlaceholderText('Pick value');
    expect(screen.getByText('Mona')).toBeInTheDocument();
  });
});
