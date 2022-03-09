import { addDoc, collection } from 'firebase/firestore'
import db from '../../../database/firebase'

export const uploadData = async (_data, _collection, callback) => {
    try {
        const data = await addDoc(collection(db, _collection), _data)
        console.log("Documento escrito con exito: ", data)
    } catch(err) {
        console.log(err)
    }

    callback()
}
