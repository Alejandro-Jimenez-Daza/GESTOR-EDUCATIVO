/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'apps',
        title   : 'Applications',
        subtitle: 'Custom made application designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'apps.academy',
                title: 'Academy',
                type : 'basic',
                icon : 'heroicons_outline:academic-cap',
                link : '/apps/academy'
            },
            {
                id   : 'apps.chat',
                title: 'Chat',
                type : 'basic',
                icon : 'heroicons_outline:chat-alt',
                link : '/apps/chat'
            },
            {
                id   : 'apps.contacts',
                title: 'Contacts',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/apps/contacts'
            },
            {
                id      : 'apps.ecommerce',
                title   : 'ECommerce',
                type    : 'collapsable',
                icon    : 'heroicons_outline:shopping-cart',
                children: [
                    {
                        id   : 'apps.ecommerce.inventory',
                        title: 'Inventory',
                        type : 'basic',
                        link : '/apps/ecommerce/inventory'
                    }
                ]
            },
            {
                id   : 'apps.file-manager',
                title: 'File Manager',
                type : 'basic',
                icon : 'heroicons_outline:cloud',
                link : '/apps/file-manager'
            },
            {
                id      : 'apps.help-center',
                title   : 'Help Center',
                type    : 'collapsable',
                icon    : 'heroicons_outline:support',
                link    : '/apps/help-center',
                children: [
                    {
                        id        : 'apps.help-center.home',
                        title     : 'Home',
                        type      : 'basic',
                        link      : '/apps/help-center',
                        exactMatch: true
                    },
                    {
                        id   : 'apps.help-center.faqs',
                        title: 'FAQs',
                        type : 'basic',
                        link : '/apps/help-center/faqs'
                    },
                    {
                        id   : 'apps.help-center.guides',
                        title: 'Guides',
                        type : 'basic',
                        link : '/apps/help-center/guides'
                    },
                    {
                        id   : 'apps.help-center.support',
                        title: 'Support',
                        type : 'basic',
                        link : '/apps/help-center/support'
                    }
                ]
            },
            {
                id   : 'apps.mailbox',
                title: 'Mailbox',
                type : 'basic',
                icon : 'heroicons_outline:mail',
                link : '/apps/mailbox',
                badge: {
                    title  : '27',
                    classes: 'px-2 bg-pink-600 text-white rounded-full'
                }
            },
            {
                id   : 'apps.notes',
                title: 'Notes',
                type : 'basic',
                icon : 'heroicons_outline:pencil-alt',
                link : '/apps/notes'
            },
            {
                id   : 'apps.scrumboard',
                title: 'Scrumboard',
                type : 'basic',
                icon : 'heroicons_outline:view-boards',
                link : '/apps/scrumboard'
            },
            {
                id   : 'apps.tasks',
                title: 'Tasks',
                type : 'basic',
                icon : 'heroicons_outline:check-circle',
                link : '/apps/tasks'
            },
            {
                id   : 'apps.users',
                title: 'USUARIOS',
                type : 'basic',
                icon : 'mat_outline:person_outline',
                link : '/apps/usuarios'
            }
        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        tooltip : 'Dashboards',
        type    : 'aside',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        tooltip : 'Apps',
        type    : 'aside',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        tooltip : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        tooltip : 'UI',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation',
        tooltip : 'Navigation',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'DASHBOARDS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'APPS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id   : 'others',
        title: 'OTHERS',
        type : 'group'
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation Features',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        type    : 'group',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Misc',
        type    : 'group',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
