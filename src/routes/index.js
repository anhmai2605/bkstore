import { ProductLayout } from '~/components/Layout';
import Home from '~/pages/Home';
import Product from '~/pages/Product';


const publicRoutes = [
    {path: '/' , component: Home},
    {path: '/Product' , component: Product, layout: ProductLayout},
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}