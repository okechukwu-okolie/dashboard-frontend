import {Home, ChartColumn,  Users,UserPlus,UserCheck,Package,PackagePlus,ShoppingBag,Settings, NotepadText} from 'lucide-react'

export const navbarLinks = [
    {
        title:'Dashboard',
        links:[
            {
              label:'Dashboard',
              icon:Home,
              path:'/'
            },
            {
                label:'Analytics',
                icon:ChartColumn,
                path:'/analytics'
            },
            {
                label:'Reports',
                icon:NotepadText,
                path:'/reports'
            },
        ],
    },
    {
        title:'Customers',
        links:[
            {
                label:'Customers',
                icon: Users,
                path:'/customers'
            },
            {
                label:'New customer',
                icon: UserPlus,
                path:'/new-customers'
            },
            {
                label:'Verified customers',
                icon: UserCheck,
                path:'/verified-customers'
            },
        ],
    },
    {
        title:'Products',
        links:[
            {
                label:'Products',
                icon: Package,
                path:'/products'
            },
           {
                label:'New product',
                icon: PackagePlus,
                path:'/new-products'
            },
            {
                label:'Inventory',
                icon: ShoppingBag,
                path:'/inventory'
            },
        ],
    },
    {
        title:'Settings',
        links:[
            {
                label:'Settings',
                icon:Settings,
                path:'/settings'
            },
        ],
    },
];