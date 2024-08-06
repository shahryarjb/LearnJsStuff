import { screen, fireEvent,waitFor } from '../../test-utils';
import { describe, it, expect } from 'vitest';
import { render } from '../../test-utils';
import ComboModal from './ComboModal';

describe('ComboModal Component', () => {
  it('renders Select and Modal', () => {
    render(<ComboModal />);
    
    // Check if Select is rendered
    const select = screen.getByPlaceholderText('Pick a fruit');
    expect(select).toBeInTheDocument();
  });

  it('opens modal when an item is selected', async () => {
    render(<ComboModal />);
    
    // Select an item
    const select = screen.getByPlaceholderText('Pick a fruit');
    fireEvent.mouseDown(select);
    
    // Click on the item in the dropdown
    const appleOption = screen.getByText('Apple');
    fireEvent.click(appleOption);

    // Wait for Modal to open and check if Modal title is displayed
    await waitFor(() => {
      const modalTitle = screen.getByText('Selected Item');
      expect(modalTitle).toBeInTheDocument();
    });
  });

  it('displays selected item in modal', async () => {
    render(<ComboModal />);
    
    // Select an item
    const select = screen.getByPlaceholderText('Pick a fruit');
    fireEvent.mouseDown(select);
    
    // Click on the item in the dropdown
    const appleOption = screen.getByText('Apple');
    fireEvent.click(appleOption);

    // Wait for Modal to open and check if selected item is displayed
    await waitFor(() => {
      const selectedItem = screen.getByText('Apple');
      expect(selectedItem).toBeInTheDocument();
    });
  });

  it('closes modal when close button is clicked', async () => {
    render(<ComboModal />);
    
    // Select an item and open modal
    const select = screen.getByPlaceholderText('Pick a fruit');
    fireEvent.mouseDown(select);
    const appleOption = screen.getByText('Apple');
    fireEvent.click(appleOption);

    // Wait for Modal to open
    await waitFor(() => {
      const modalTitle = screen.getByText('Selected Item');
      expect(modalTitle).toBeInTheDocument();
    });
    
    // Click close button
    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);
    
    // Wait for Modal to close and check if it is closed
    await waitFor(() => {
      const modalTitle = screen.queryByText('Selected Item');
      expect(modalTitle).not.toBeInTheDocument();
    });
  });
});