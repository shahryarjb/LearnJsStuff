import { screen, waitFor, fireEvent } from '@testing-library/react';
import { render as customRender } from '../../test-utils/render';
import CharacterSelect from './CharacterSelect';
import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';

describe('CharacterSelect Component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('loads characters from API and displays them in the select dropdown', async () => {
    customRender(<CharacterSelect />);

    const selectElement = screen.getByPlaceholderText('Pick one');
    expect(selectElement).toHaveAttribute('data-disabled', 'true');

    await waitFor(() => {
      expect(selectElement).not.toHaveAttribute('data-disabled', 'true');
    });

    fireEvent.mouseDown(selectElement);
    const option = screen.getByText('Adanel');
    expect(option).toBeInTheDocument();
  });

  it('keeps the Select component disabled when the API request fails', async () => {
    server.use(
      http.get('https://the-one-api.dev/v2/character', () => {
        return HttpResponse.json({}, { status: 500 });
      })
    );

    customRender(<CharacterSelect />);

    const selectElement = screen.getByPlaceholderText('Pick one');
    expect(selectElement).toHaveAttribute('data-disabled', 'true');

    await waitFor(() => {
      expect(selectElement).toHaveAttribute('data-disabled', 'true');
    });

    fireEvent.mouseDown(selectElement);
    const options = screen.queryAllByRole('option');
    expect(options.length).toBe(0);
  });

  it('displays no options when the API returns an empty list', async () => {
    // Mock the server to return an empty docs array
    server.use(
      http.get('https://the-one-api.dev/v2/character', () => {
        return HttpResponse.json({ docs: [] }, { status: 200 });
      })
    );

    // Render the component
    customRender(<CharacterSelect />);

    // Assert: The Select component should be disabled while loading
    const selectElement = screen.getByPlaceholderText('Pick one');
    expect(selectElement).toHaveAttribute('data-disabled', 'true');

    // Wait for the component to load the empty data and update
    await waitFor(() => {
      expect(selectElement).not.toHaveAttribute('data-disabled', 'true');
    });

    // Open the dropdown to check for options
    fireEvent.mouseDown(selectElement);

    // Assert: Ensure that no options are available in the dropdown
    const options = screen.queryAllByRole('option');
    expect(options.length).toBe(0); // No options should be present
  });
  it('updates the selected value when an option is clicked', async () => {
    server.use(
      http.get('https://the-one-api.dev/v2/character', () => {
        return HttpResponse.json({
          docs: [
            { _id: '5cd99d4bde30eff6ebccfbbe', name: 'Adanel' },
            { _id: '5cd99d4bde30eff6ebccfbbf', name: 'Adrahil I' },
          ],
        }, { status: 200 });
      })
    );
  
    customRender(<CharacterSelect />);
  
    const selectElement = screen.getByPlaceholderText('Pick one');
  
    // Wait for the component to load the data
    await waitFor(() => {
      expect(selectElement).not.toHaveAttribute('data-disabled', 'true');
    });
  
    // Open the dropdown and select an option
    fireEvent.mouseDown(selectElement);
    fireEvent.click(screen.getByText('Adrahil I'));
  
    // Assert the value has been updated
    expect(selectElement).toHaveValue('Adrahil I');
  });
  it('initializes with a default selected value if provided', async () => {
    // Mock API response
    server.use(
      http.get('https://the-one-api.dev/v2/character', () => {
        return HttpResponse.json({
          docs: [
            { _id: '5cd99d4bde30eff6ebccfbbe', name: 'Adanel' },
            { _id: '5cd99d4bde30eff6ebccfbbf', name: 'Adrahil I' },
          ],
        }, { status: 200 });
      })
    );
  
    // Render the component with a default value
    customRender(<CharacterSelect defaultValue="5cd99d4bde30eff6ebccfbbe" />);
  
    // Wait for the component to load the data
    await waitFor(() => {
      const selectElement = screen.getByPlaceholderText('Pick one');
      expect(selectElement).toHaveValue('Adanel');
    });
  });
    
});
