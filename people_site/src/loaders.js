const URL = "http://localhost:4000"

export const peopleLoader = async () => {
  const response = await fetch(URL + "/people")
  const people = await response.json()
  return people
}