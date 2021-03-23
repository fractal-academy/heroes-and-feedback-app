import { firestore } from 'app/services/Firebase'

const getBatchOfFixedSizeData = async (
  limit,
  collectionName,
  condition,
  key
) => {
  try {
    let docsRef = await firestore.collection(collectionName)
    if (condition)
      docsRef = await docsRef.where(
        condition.fieldName,
        condition.operator,
        condition.value
      )
    if (key) docsRef = await docsRef.orderBy('id').startAfter(key)
    const data = await docsRef.limit(limit).get()

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
