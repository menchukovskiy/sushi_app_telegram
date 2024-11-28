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