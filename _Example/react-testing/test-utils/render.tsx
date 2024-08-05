// test-utils.tsx
import React, { ReactNode } from 'react';
import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';

export function render(ui: React.ReactElement) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <MantineProvider>
        {children}
      </MantineProvider>
    ),
  });
}

