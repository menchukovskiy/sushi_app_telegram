import {Route, Routes } from 'react-router-dom'
import Store from './pages/Home'
import Cart from './pages/Cart'
import Account from './pages/Account'


const BotRouter =  () => {
    
    return(
        <Routes>
            <Route  path='/' element={<Store/>}  />
            <Route  path='/cart' element={<Cart/>}  />
            <Route  path='/account' element={<Account/>}  />
        </Routes>
        
    )
}

export default BotRouter

