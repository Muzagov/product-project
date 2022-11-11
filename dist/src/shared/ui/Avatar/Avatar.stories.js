var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Avatar } from 'shared/ui/Avatar/Avatar';
import AvatarImg from './avatar.png';
export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
};
var Template = function (args) { return _jsx(Avatar, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarImg,
};
export var Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarImg,
};
