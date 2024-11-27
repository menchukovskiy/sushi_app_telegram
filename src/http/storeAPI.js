import { $host } from './index'


export const getCategorys = async () => {
        try{
            const {data} = await $host.post( '', { action : 'get_all_category' } )
            return data
        } catch(e){
            return false
        }
    
}