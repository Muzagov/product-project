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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { CommentCard } from '../CommentCard/CommentCard';
export var CommentList = memo(function (props) {
    var className = props.className, comments = props.comments, isLoading = props.isLoading;
    var t = useTranslation().t;
    if (isLoading) {
        return (_jsxs(VStack, __assign({ gap: "16", max: true, className: classNames('', {}, [className]) }, { children: [_jsx(CommentCard, { isLoading: true }), _jsx(CommentCard, { isLoading: true }), _jsx(CommentCard, { isLoading: true })] })));
    }
    return (_jsx(VStack, __assign({ gap: "16", className: classNames('', {}, [className]) }, { children: (comments === null || comments === void 0 ? void 0 : comments.length) ? comments.map(function (comment) { return (_jsx(CommentCard, { isLoading: isLoading, comment: comment }, comment.id)); }) : _jsx(Text, { text: t('Комментарии отсутствуют') }) })));
});
