import { addDoc, collection } from 'firebase/firestore'
import db from '../../../database/firebase'

export const uploadData = async (_data, _collection, _callback) => {
    try {
        const data = await addDoc(collection(db, _collection), _data)
            .then(() =>  _callback())
    } catch(err) {
        console.log(err)
    }
}
