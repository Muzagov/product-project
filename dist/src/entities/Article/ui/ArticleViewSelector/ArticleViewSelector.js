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
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonType } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/consts/articleConsts';
var viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];
export var ArticleViewSelector = memo(function (props) {
    var className = props.className, view = props.view, onViewClick = props.onViewClick;
    var onClick = function (newView) { return function () {
        onViewClick === null || onViewClick === void 0 ? void 0 : onViewClick(newView);
    }; };
    return (_jsx("div", __assign({ className: classNames(cls.ArticleViewSelector, {}, [className]) }, { children: viewTypes.map(function (viewType) {
            var _a;
            return (_jsx(Button, __assign({ theme: ButtonType.CLEAR, onClick: onClick(viewType.view) }, { children: _jsx(Icon, { Svg: viewType.icon, className: classNames('', (_a = {}, _a[cls.notSelected] = viewType.view !== view, _a)) }) }), viewType.view));
        }) })));
});
