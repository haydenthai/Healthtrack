import { SideNavigation, SideNavigationProps } from '@cloudscape-design/components';
import * as React from 'react';


interface NavigationProps {
    activeHref?: string;
    header?: SideNavigationProps['header'];
    items?: SideNavigationProps['items'];
    onFollowHandler?: SideNavigationProps['onFollow'];
}

const navHeader = { text: 'Service', href: '/' };
export const navItems: SideNavigationProps['items'] = [
    {
        type: 'section',
        text: 'Reports and analytics',
        items: [
            { type: 'link', text: 'Distributions', href: '#/distributions' },
            { type: 'link', text: 'Cache statistics', href: '#/cache' },
            {
                type: 'link',
                text: 'Monitoring and alarms',
                href: '#/monitoring',
            },
            { type: 'link', text: 'Popular objects', href: '#/popular' },
            { type: 'link', text: 'Top referrers', href: '#/referrers' },
            { type: 'link', text: 'Usage', href: '#/usage' },
            { type: 'link', text: 'Viewers', href: '#/viewers' },
        ],
    },
    {
        type: 'section',
        text: 'Private content',
        items: [
            { type: 'link', text: 'How-to guide', href: '#/howto' },
            { type: 'link', text: 'Origin access identity', href: '#/origin' },
        ],
    },
];

const defaultOnFollowHandler: SideNavigationProps['onFollow'] = (event) => {
    

};

export function Navigation({
    activeHref,
    header = navHeader,
    items = navItems,
    onFollowHandler = defaultOnFollowHandler,
}: NavigationProps) {
    return (
        <SideNavigation
            items={items}
            header={header}
            activeHref={activeHref}
            onFollow={onFollowHandler}
        />
    );
}

export default Navigation
