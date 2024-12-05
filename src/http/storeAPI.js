import { $host, $hostCart } from './index'


export const getCategorys = async () => {
    try {
        const { data } = await $host.post('', { action: 'get_all_category' })
        return data
    } catch (e) {
        return false
    }

}

export const get_data = async () => {
    try {
        const { data } = await $host.post('', { action: 'get_data' })
        return data
    } catch (e) {
        return false
    }
}

export const get_customer = async ( $id ) => {
    try {
        const { data } = await $host.post('', { action: 'init_customer', id: $id })
        return data
    } catch (e) {
        return false
    }
}

export const add_favorite = async ( $id, $user_id ) => {
    try {
        const { data } = await $host.post('', { action: 'add_favorite', id: $id, user_id: $user_id })
        return data
    } catch (e) {
        return false
    }
}

export const edit_customer = async ( $id, $name, $birthday, $phone ) => {
    try {
        const { data } = await $host.post('', { 
            action: 'edit_customer', 
            id: $id,  
            name: $name, 
            birthday: $birthday,
            phone: $phone
        })
        return data
    } catch (e) {
        return false
    }
}

export const edit_customer_address = async ( $id, $address ) => {
    try {
        const { data } = await $host.post('', { 
            action: 'edit_customer_address', 
            id: $id,  
            address: $address, 
        })
        return data
    } catch (e) {
        return false
    }
}

export const get_customer_orders = async ( $id ) => {
    try {
        const { data } = await $host.post('', { 
            action: 'get_customer_orders', 
            id: $id
        })
        return data
    } catch (e) {
        return false
    }
}

export const finish_order =  async ( $formData ) => {
    try {
        const { data } = await $hostCart.post('', { 
            action: 'finish_order', 
            user_id: $formData.get('user_id'),
            phone: $formData.get('phone'),
            address: $formData.get('address'),
            valueDate: $formData.get('valueDate'),
            time: $formData.get('time'),
            comment: $formData.get('comment'),
            appliances: $formData.get('appliances'),
            appliancesChild: $formData.get('appliancesChild'),
            paymentMethod: $formData.get('paymentMethod'),
            cartData: $formData.get('cartData'),
            sale: $formData.get('sale'),
            bonus: $formData.get('bonus')
        })
        return data
    } catch (e) {
        return false
    }
}