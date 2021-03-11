import React, { createContext, useContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import firestore from '@react-native-firebase/firestore'
import { useUserContext } from './UserContext'
import { STAFFING_CANDIDATES_MODEL_NAME } from '../constants/firestoreCollections'

const StaffingCandidateContext = createContext()
const StaffingCandidateDispatchContext = createContext()

function staffingCandidateReducer(state, action) {
  switch (action.type) {
    case 'SET_DATA': {
      return {
        ...action.data,
        _isStaffingCandidateFetching: false,
        _isStaffingCandidateExists: Boolean(action.data)
      }
    }
    case 'START_DATA_FETCHING': {
      return {
        ...state,
        _isStaffingCandidateFetching: true,
        _isStaffingCandidateExists: false
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function StaffingCandidateProvider({ children }) {
  const [staffingCandidateData, dispatch] = useReducer(
    staffingCandidateReducer,
    {
      _isStaffingCandidateFetching: false,
      _isStaffingCandidateExists: false
    }
  )

  const { _id: userId, _isUserExists, staffingCandidateId } = useUserContext()

  useEffect(() => {
    let isComponentMounted = true
    let unsubscribeFromStaffingCandidate = null

    if (isComponentMounted && _isUserExists && staffingCandidateId) {
      dispatch({ type: 'START_DATA_FETCHING' })

      unsubscribeFromStaffingCandidate = firestore()
        .collection(STAFFING_CANDIDATES_MODEL_NAME)
        .where('userId', '==', userId)
        .onSnapshot((response) => {
          const fetchedStaffingCandidateData =
            !response.empty && response.docs.map((doc) => doc.data()).shift()

          isComponentMounted &&
            dispatch({ type: 'SET_DATA', data: fetchedStaffingCandidateData })
        })
    }

    return () => {
      unsubscribeFromStaffingCandidate && unsubscribeFromStaffingCandidate()

      isComponentMounted = false
    }
  }, [userId, _isUserExists, staffingCandidateId])

  return (
    <StaffingCandidateContext.Provider value={staffingCandidateData}>
      <StaffingCandidateDispatchContext.Provider value={dispatch}>
        {children}
      </StaffingCandidateDispatchContext.Provider>
    </StaffingCandidateContext.Provider>
  )
}
function useStaffingCandidateContext() {
  const context = useContext(StaffingCandidateContext)

  if (context === undefined) {
    throw new Error(
      'useStaffingCandidateState must be used within a StaffingCandidateContext.Provider'
    )
  }

  return context
}
function useStaffingCandidateDispatch() {
  const context = useContext(StaffingCandidateDispatchContext)

  if (context === undefined) {
    throw new Error(
      'useStaffingCandidateDispatch must be used within a StaffingCandidateContext.Provider'
    )
  }

  return context
}
function useStaffingCandidate() {
  return [useStaffingCandidateContext(), useStaffingCandidateDispatch()]
}
// usage example:
// const [staffingCandidateState, staffingCandidateStateDispatch] = useStaffingCandidate()
StaffingCandidateProvider.propTypes = {
  children: PropTypes.element
}

export {
  StaffingCandidateContext,
  StaffingCandidateProvider,
  useStaffingCandidateContext,
  useStaffingCandidateDispatch,
  useStaffingCandidate
}
