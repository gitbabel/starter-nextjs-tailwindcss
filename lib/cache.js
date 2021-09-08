
// Upgrade to Apollo/Client 3.x has all interfaces under one package now
import { InMemoryCache, makeVar } from '@apollo/client'

// import { loadProgressStateFromLocal } from './lib/models/ProgressState'

// config is a InMemoryCache configuration
// Documentation: /configuration
// The root-level key is `typePolicies` which are then defined/mounted
// const config =
// localStorage.setItem('myTest', JSON.stringify([{ uuid: 'ane2nd', active: true, completed: false }, { uuid: '09bso2p', active: true, completed: false }]))

// our progressState interface has a wrapper to load data out of local-storage and
// initialize our reactive-variable with what was previously-stored
export const progressTasksVar = makeVar(() => { return [] })

// console.log('have value: ', progressTasksVar())
// console.log(JSON.parse(localStorage.getItem('myTest')))
// export our cache
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        progressTasks: {
          read () {
            console.log('should resolve')
            // will return the list of progressions
            // using the hoisted makeVar
            return progressTasksVar()
          }
        }
      }
    }
  }
})
