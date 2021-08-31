/* eslint-disable prettier/prettier */
import { useOrder } from 'vtex.order-placed/OrderContext'
import axios from 'axios'

const OrderContext = async () => {
    const endpoint = 'https://gabrielvtex--hiringcoders202117.myvtex.com/leads'
    const tipoCliente = { tipo: 'Cliente' };

    const { clientProfileData: { email } } = await useOrder()

    await axios.put(`${endpoint}/${email}`, tipoCliente).then((message) => {
        console.log(message.status)
    })

    return
}

export default OrderContext