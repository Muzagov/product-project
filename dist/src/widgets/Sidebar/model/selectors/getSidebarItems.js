import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
export var getSidebarItems = createSelector(getUserAuthData, function (userData) {
    var sidebarItemList = [
        {
            path: RoutePath.main,
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: 'О сайте',
        },
    ];
    if (userData) {
        sidebarItemList.push({
            path: RoutePath.profile + userData.id,
            Icon: ProfileIcon,
            text: 'Профиль',
            authOnly: true,
        }, {
            path: RoutePath.articles,
            Icon: ArticleIcon,
            text: 'Статьи',
            authOnly: true,
        });
    }
    return sidebarItemList;
});
