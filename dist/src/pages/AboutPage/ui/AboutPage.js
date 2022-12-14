import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
var AboutPage = memo(function () {
    var t = useTranslation('about').t;
    return (_jsx(Page, { children: t('О сайте') }));
});
export default AboutPage;
