import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoreComponent: Story) => (
    <BrowserRouter>
        <StoreComponent />
    </BrowserRouter>
);
