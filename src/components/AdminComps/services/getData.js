import { getDocs, collection } from 'firebase/firestore'
import db from '../../../database/firebase'

export const getData = async (_collection, callback) => {
    const dataFetch = await getDocs(collection(db, _collection))
    const data = []

    dataFetch.forEach(doc => {
        data.push(doc.data())
    })

    callback(data)
}