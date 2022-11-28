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
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions, ProfileCard, profileReducer, ValidateProfileError, } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
var reducers = {
    profile: profileReducer,
};
var ProfilePage = memo(function (_a) {
    var _b;
    var className = _a.className;
    var t = useTranslation('profile').t;
    var dispatch = useAppDispatch();
    var formData = useSelector(getProfileForm);
    var error = useSelector(getProfileError);
    var isLoading = useSelector(getProfileIsLoading);
    var readonly = useSelector(getProfileReadonly);
    var validateErrors = useSelector(getProfileValidateErrors);
    var id = useParams().id;
    var validateErrorTranslates = (_b = {},
        _b[ValidateProfileError.SERVER_ERROR] = t('Серверная ошибка при сохранении'),
        _b[ValidateProfileError.INCORRECT_COUNTRY] = t('Некорректный регион'),
        _b[ValidateProfileError.NO_DATA] = t('Данные не указаны'),
        _b[ValidateProfileError.INCORRECT_USER_DATA] = t('Имя и фамилия обязательны'),
        _b[ValidateProfileError.INCORRECT_AGE] = t('Некорректный возраст'),
        _b);
    useInitialEffect(function () {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });
    var onChangeFirstname = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);
    var onChangeLastname = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);
    var onChangeAge = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);
    var onChangeCity = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    var onChangeUsername = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);
    var onChangeAvatar = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);
    var onChangeCurrency = useCallback(function (currency) {
        dispatch(profileActions.updateProfile({ currency: currency }));
    }, [dispatch]);
    var onChangeCountry = useCallback(function (country) {
        dispatch(profileActions.updateProfile({ country: country }));
    }, [dispatch]);
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsx(Page, __assign({ className: classNames('', {}, [className]) }, { children: _jsxs(VStack, __assign({ gap: "16", max: true }, { children: [_jsx(ProfilePageHeader, {}), (validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors.length)
                        && validateErrors.map(function (err) { return (_jsx(Text, { theme: TextTheme.ERROR, text: validateErrorTranslates[err] }, err)); }), _jsx(ProfileCard, { data: formData, error: error, isLoading: isLoading, readonly: readonly, onChangeFirstname: onChangeFirstname, onChangeLastname: onChangeLastname, onChangeAge: onChangeAge, onChangeCity: onChangeCity, onChangeUsername: onChangeUsername, onChangeAvatar: onChangeAvatar, onChangeCurrency: onChangeCurrency, onChangeCountry: onChangeCountry })] })) })) })));
});
export default ProfilePage;
