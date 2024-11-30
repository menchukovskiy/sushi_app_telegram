import {Route, Routes } from 'react-router-dom'
import Store from './pages/Home'
import Cart from './pages/Cart'
import Offer from './pages/Cart/offer'
import Account from './pages/Account'
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
            <Route  path='/favorite' element={<Favorite/>}  />
            <Route  path='/category/*' element={<Category/>} />
        </Routes>
        
    )
}

export default BotRouter

