import { $host } from './index'


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