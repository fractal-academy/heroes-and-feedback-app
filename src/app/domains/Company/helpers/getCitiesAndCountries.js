export const getCitiesAndContries = async () => {
  const url = 'https://countriesnow.space/api/v0.1/countries/population/cities'
  const response = await fetch(url)
  if (response.ok) {
    const json = await response.json()
    const citiesAndContries = []
    json.data.forEach((element) => {
      citiesAndContries[element.country]
        ? (citiesAndContries[element.country] = [
            ...citiesAndContries[element.country],
            element.city
          ])
        : (citiesAndContries[element.country] = [element.city])
    })

    return citiesAndContries
  }
}
