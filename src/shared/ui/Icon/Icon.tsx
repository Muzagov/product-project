import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted } = props;
    const { t } = useTranslation();

    return (
        <Svg className={classNames(inverted
            ? cls.inverted
            : cls.Icon, {}, [className])}
        />
    );
});
