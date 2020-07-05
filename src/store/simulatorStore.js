// store.js
import React, { createContext, useContext, useReducer, useState } from 'react'

const StoreContext = createContext()
const initialState = {
  scenarioLabels: [],
  coverage: 90, // $("#MDACoverage").val(),
  mda: 2, // $("#inputMDARounds").val(),
  mdaSixMonths: 6, // $("input:radio[name=mdaSixMonths]:checked").val(),
  endemicity: 10, // $("#endemicity").val(),
  covN: 0, // $("#bedNetCoverage").val(),
  v_to_hR: 0, // $("#insecticideCoverage").val(),
  vecCap: 0, // $("#vectorialCapacity").val(),
  vecComp: 0, //$("#vectorialCompetence").val(),
  vecD: 0, //$("#vectorialDeathRate").val(),
  mdaRegimen: 'xIA', // $("input[name=mdaRegimenRadios]:checked").val(),
  rho: 0.2, // $("#sysAdherence").val(),
  rhoBComp: 0, // $("#brMda").val(),
  rhoCN: 0, // $("#bedNetMda").val(),
  species: 0, // $("input[name=speciesRadios]:checked").val(),
  /* macrofilaricide: 65, // $("#Macrofilaricide").val(),
  microfilaricide: 65, // $("#Microfilaricide").val(), */
  runs: 5, // $("#runs").val()
  defaultParams: null,
  IUData: {
    id: null, //which IU is loaded if any
    mdaObj: null, // historic mdaObj for IU
    params: null, // parms object for IU
  },
  defaultPrediction: null, // future mdaObjPrediction for IU - user sets on setup page
  tweakedPrediction: null, // future mdaObjPrediction for IU
  specificPrediction: null, // null or {}
  specificPredictionIndex: -1, // null or {}
  needsRerun: false,
}

const reducer = (simParams, action) => {
  switch (action.type) {
    case 'everything':
      return {
        ...simParams,
        ...action.payload,
      }
    case 'needsRerun':
      return {
        ...simParams,
        needsRerun: action.payload,
      }
    case 'scenarioLabel':
      let newLabels = [...simParams.scenarioLabels]
      newLabels[JSON.parse(window.localStorage.getItem('scenarioIndex')) || 0] =
        action.payload
      return {
        ...simParams,
        scenarioLabels: newLabels,
      }
    case 'specificPrediction':
      return {
        ...simParams,
        specificPrediction: action.payload,
      }
    case 'specificPredictionIndex':
      return {
        ...simParams,
        specificPredictionIndex: action.payload,
      }
    case 'defaultPrediction':
      return {
        ...simParams,
        defaultPrediction: action.payload,
      }
    case 'tweakedPrediction':
      return {
        ...simParams,
        tweakedPrediction: action.payload,
      }
    case 'tweakedCoverage':
      return {
        ...simParams,
        tweakedPrediction: {
          ...simParams.tweakedPrediction,
          coverage: action.payload,
        },
      }
    case 'tweakedAdherence':
      return {
        ...simParams,
        tweakedPrediction: {
          ...simParams.tweakedPrediction,
          adherence: action.payload,
        },
      }
    case 'tweakedBednets':
      return {
        ...simParams,
        tweakedPrediction: {
          ...simParams.tweakedPrediction,
          bednets: action.payload,
        },
      }
    case 'tweakedRegimen':
      return {
        ...simParams,
        tweakedPrediction: {
          ...simParams.tweakedPrediction,
          regimen: action.payload,
        },
      }
    case 'tweakedActive':
      return {
        ...simParams,
        tweakedPrediction: {
          ...simParams.tweakedPrediction,
          active: action.payload,
        },
      }
    case 'tweakedBeenFiddledWith':
      console.log(action.payload)
      let newBeenFiddledWith = [...simParams.tweakedPrediction.beenFiddledWith]
      newBeenFiddledWith[action.payload] = true
      return {
        ...simParams,
        tweakedPrediction: {
          ...simParams.tweakedPrediction,
          beenFiddledWith: [...newBeenFiddledWith],
        },
      }
    case 'resetScenario':
      return {
        ...simParams,
        ...simParams.defaultParams,
        tweakedPrediction: {
          time: [...simParams.defaultPrediction.time],
          coverage: [...simParams.defaultPrediction.coverage],
          adherence: [...simParams.defaultPrediction.adherence],
          bednets: [...simParams.defaultPrediction.bednets],
          regimen: [...simParams.defaultPrediction.regimen],
          active: [...simParams.defaultPrediction.active],
          beenFiddledWith: [...simParams.defaultPrediction.beenFiddledWith],
        },
        needsRerun: false,
      }
    case 'everythingbuthistoric':
      let newIUDataall = { ...simParams.IUData }
      return {
        ...simParams,
        ...action.payload,
        IUData: newIUDataall,
      }
    case 'IUData':
      return {
        ...simParams,
        IUData: action.payload,
      }
    /*     case 'IUid':
      let newIUData = { ...simParams.IUData }
      newIUData.id = action.payload
      return {
        ...simParams,
        IUData: newIUData,
      } */
    case 'mdaObj':
      let newIUDatamda = { ...simParams.IUData }
      newIUDatamda.mdaObj = action.payload
      return {
        ...simParams,
        IUData: newIUDatamda,
      }
    case 'params':
      let newIUDataparams = { ...simParams.IUData }
      newIUDataparams.params = action.payload
      return {
        ...simParams,
        IUData: newIUDataparams,
      }
    case 'coverage':
      return {
        ...simParams,
        coverage: action.payload,
        defaultParams: { ...simParams.defaultParams, coverage: action.payload },
      }
    case 'adherence':
      return {
        ...simParams,
        adherence: action.payload,
        defaultParams: {
          ...simParams.defaultParams,
          adherence: action.payload,
        },
      }
    case 'mda':
      return {
        ...simParams,
        mda: action.payload,
      }
    case 'mdaSixMonths':
      return {
        ...simParams,
        mdaSixMonths: action.payload,
        defaultParams: {
          ...simParams.defaultParams,
          mdaSixMonths: action.payload,
        },
      }
    case 'endemicity':
      return {
        ...simParams,
        endemicity: action.payload,
      }
    case 'covN':
      return {
        ...simParams,
        covN: action.payload,
        defaultParams: { ...simParams.defaultParams, covN: action.payload },
      }
    case 'v_to_hR':
      return {
        ...simParams,
        v_to_hR: action.payload,
      }
    case 'vecCap':
      return {
        ...simParams,
        vecCap: action.payload,
      }
    case 'vecComp':
      return {
        ...simParams,
        vecComp: action.payload,
      }
    case 'vecD':
      return {
        ...simParams,
        vecD: action.payload,
      }
    case 'mdaRegimen':
      return {
        ...simParams,
        mdaRegimen: action.payload,
        defaultParams: {
          ...simParams.defaultParams,
          mdaRegimen: action.payload,
        },
      }
    case 'rho':
      return {
        ...simParams,
        rho: action.payload,
        defaultParams: { ...simParams.defaultParams, rho: action.payload },
      }
    case 'rhoBComp':
      return {
        ...simParams,
        rhoBComp: action.payload,
      }
    case 'rhoCN':
      return {
        ...simParams,
        rhoCN: action.payload,
      }
    case 'species':
      return {
        ...simParams,
        species: action.payload,
        defaultParams: { ...simParams.defaultParams, species: action.payload },
      }
    case 'macrofilaricide':
      return {
        ...simParams,
        macrofilaricide: action.payload,
      }
    case 'microfilaricide':
      return {
        ...simParams,
        microfilaricide: action.payload,
      }
    case 'runs':
      return {
        ...simParams,
        runs: action.payload,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const StoreProvider = ({ children }) => {
  const [simParams, dispatchSimParams] = useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={{ simParams, dispatchSimParams }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
