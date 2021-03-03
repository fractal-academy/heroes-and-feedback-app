import { firestore } from '../Firebase'
import setData from './setData'
import getCollectionRef from './getCollectionRef'
import getTimestamp from './getTimestamp'
import addData from './addData'
import deleteData from './deleteData'

export {
  deleteData,
  addData,
  setData,
  firestore,
  getCollectionRef,
  getTimestamp
}
