import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
export var RouterDecorator = function (StoreComponent) { return (_jsx(BrowserRouter, { children: _jsx(StoreComponent, {}) })); };
