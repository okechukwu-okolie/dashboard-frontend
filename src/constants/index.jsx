import {Home, ChartColumn,  Users,UserPlus,UserCheck,Package,PackagePlus,ShoppingBag,Settings, NotepadText} from 'lucide-react'

import profileImage from '@/assets/profile-image.jpg'
import ProductImage from '../assets/product-image.jpg'



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

export const overviewData =[
    {
        name:"Jan",
        total:1500,
    },
    {
        name:"Feb",
        total:2700,
    },
    {
        name:"Mar",
        total:1100,
    },
    {
        name:"Apr",
        total:2500,
    },
    {
        name:"May",
        total:1800,
    },
    {
        name:"Jun",
        total:2200,
    },
    {
        name:"Jul",
        total:6700,
    },
    {
        name:"Aug",
        total:3200,
    },
    {
        name:"Sep",
        total:7500,
    },
    {
        name:"Oct",
        total:500,
    },
    {
        name:"Nov",
        total:4500,
    },
    {
        name:"Dec",
        total:2500,
    },
]


export const recentSalesData =[
    {
        id:1,
        name:'Noah Wilson',
        email:'noah.wilson@gmail.com',
        image:profileImage,
        total:3000
    },
    {
        id:2,
        name:'Noah Wilson',
        email:'noah.wilson@gmail.com',
        image:profileImage,
        total:3000
    },
    {
        id:3,
        name:'Noah Wilson',
        email:'noah.wilson@gmail.com',
        image:profileImage,
        total:3000
    },
    {
        id:4,
        name:'Noah Wilson',
        email:'noah.wilson@gmail.com',
        image:profileImage,
        total:3000
    },
    {
        id:5,
        name:'Noah Wilson',
        email:'noah.wilson@gmail.com',
        image:profileImage,
        total:3000
    },
    {
        id:6,
        name:'Noah Wilson',
        email:'noah.wilson@gmail.com',
        image:profileImage,
        total:3000
    },
    {
        id:7,
        name:'Noah Wilson',
        email:'noah.wilson@gmail.com',
        image:profileImage,
        total:3000
    },
]


export const topProducts =[
    {
        number:1,
        name:'wireless mouse',
        image:ProductImage,
        description:'waterproof action camera with 4k video recording.',
        price:249.99,
        status:'In Stock',
        rating:4.8
    },
    {
        number:2,
        name:'wireless mouse',
        image:ProductImage,
        description:'waterproof action camera with 4k video recording.',
        price:249.99,
        status:'In Stock',
        rating:4.8
    },
    {
        number:3,
        name:'wireless mouse',
        image:ProductImage,
        description:'waterproof action camera with 4k video recording.',
        price:249.99,
        status:'In Stock',
        rating:4.8
    },
    {
        number:4,
        name:'wireless mouse',
        image:ProductImage,
        description:'waterproof action camera with 4k video recording.',
        price:249.99,
        status:'In Stock',
        rating:4.8
    },
    {
        number:5,
        name:'wireless mouse',
        image:ProductImage,
        description:'waterproof action camera with 4k video recording.',
        price:249.99,
        status:'In Stock',
        rating:4.8
    },
    {
        number:6,
        name:'wireless mouse',
        image:ProductImage,
        description:'waterproof action camera with 4k video recording.',
        price:249.99,
        status:'In Stock',
        rating:4.8
    },
    {
        number:7,
        name:'wireless mouse',
        image:ProductImage,
        description:'waterproof action camera with 4k video recording.',
        price:249.99,
        status:'In Stock',
        rating:4.8
    },
    {
        number:8,
        name:'wireless mouse',
        image:ProductImage,
        description:'waterproof action camera with 4k video recording.',
        price:249.99,
        status:'In Stock',
        rating:4.8
    },
    {
        number:9,
        name:'wireless mouse',
        image:ProductImage,
        description:'waterproof action camera with 4k video recording.',
        price:249.99,
        status:'In Stock',
        rating:4.8
    },
    {
        number:10,
        name:'wireless mouse',
        image:ProductImage,
        description:'waterproof action camera with 4k video recording.',
        price:249.99,
        status:'In Stock',
        rating:4.8
    },
]
