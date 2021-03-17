import { firestore } from 'app/services/Firebase'

const getBatchOfFixedSizeData = async (
  limit,
  collectionName,
  condition,
  key
) => {
  try {
    const data = key
      ? condition
        ? await firestore
            .collection(collectionName)
            .where(condition.fieldName, condition.operator, condition.value)
            .orderBy('id')
            .startAfter(key)
            .limit(limit)
            .get()
        : await firestore
            .collection(collectionName)
            .orderBy('id')
            .startAfter(key)
            .limit(limit)
            .get()
      : condition
      ? await firestore
          .collection(collectionName)
          .where(condition.fieldName, condition.operator, condition.value)
          .limit(limit)
          .get()
      : await firestore.collection(collectionName).limit(limit).get()

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
