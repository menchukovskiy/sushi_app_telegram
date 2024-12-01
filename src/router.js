import {Route, Routes } from 'react-router-dom'
import Store from './pages/Home'
import Cart from './pages/Cart'
import Offer from './pages/Cart/offer'
import Account from './pages/Account'
import Personal from './pages/Account/personal'
import Address from './pages/Account/address'
import Orders from './pages/Account/orders'
import Code from './pages/Account/code'
import Bonus from './pages/Account/bonus'
import Favorite from './pages/Favorite'
import Category from './pages/Category'


const BotRouter =  () => {
    
    return(
        <Routes>
            <Route  path='/*' element={<Store/>}  />
            <Route  path='*' element={<Store/>}  />
            <Route  path='/cart' element={<Cart/>}  />
            <Route  path='/cart/offer' element={<Offer/>}  />
            <Route  path='/account' element={<Account/>}  />
            <Route  path='/account/personal' element={<Personal/>}  />
            <Route  path='/account/address' element={<Address/>}  />
            <Route  path='/account/orders' element={<Orders/>}  />
            <Route  path='/account/code' element={<Code/>}  />
            <Route  path='/account/bonus' element={<Bonus/>}  />
            <Route  path='/favorite' element={<Favorite/>}  />
            <Route  path='/category/*' element={<Category/>} />
        </Routes>
        
    )
}

export default BotRouter

