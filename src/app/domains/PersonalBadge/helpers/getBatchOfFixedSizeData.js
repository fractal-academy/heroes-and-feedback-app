import { firestore } from 'app/services/Firebase'

const getBatchOfFixedSizeData = async (
  limit,
  collectionName,
  condition,
  key
) => {
  try {
    const data = key
      ? await firestore
          .collection(collectionName)
          .where('userId', '==', condition)
          .orderBy('id')
          .startAfter(key)
          .limit(limit)
          .get()
      : await firestore
          .collection(collectionName)
          .where('userId', '==', condition)
          .limit(limit)
          .get()

    let resData = []
    let lastKey = ''
    data.forEach((doc) => {
      resData.push(doc.data())
      lastKey = doc.id
    })

    return { resData, lastKey }
  } catch (e) {
    console.log(e)
  }
}

export default getBatchOfFixedSizeData
