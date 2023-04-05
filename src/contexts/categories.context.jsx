import { createContext, useState, useEffect } from 'react'

// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js'

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'

import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }

    getCategoriesMap()
  }, [])

  /*
   Run only once to add data to firebase
  
  useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA)
  }, [])
  */

  const value = { categoriesMap, setCategoriesMap }
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
