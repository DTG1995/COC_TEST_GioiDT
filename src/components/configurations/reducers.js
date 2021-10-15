import { getConfigurationsAPI, addConfigAPI, getConfigAPI, editConfigAPI, deleteConfigAPI  } from "../../dummy-server"

export const ACTIONS_TYPE = {
  FETCH_CONFIGURATIONS: 'FETCH_CONFIGURATIONS',
  ADD_CONFIG: 'ADD_CONFIG',
  FETCH_CONFIG: 'FETCH_CONFIG'
}
const initState = {
  configurations: [],
  config: {}
}
const configurationRedure = (configurationsState, action) => {
  switch(action.type) {
    case ACTIONS_TYPE.FETCH_CONFIGURATIONS:
      return {
        ...configurationsState,
        configurations: action.payload
      }
    case ACTIONS_TYPE.ADD_CONFIG:
      return {
        ...configurationsState
      }
      case ACTIONS_TYPE.FETCH_CONFIG:
        return {
          ...configurationsState,
          config: action.payload
        }
    default:
      return configurationsState || initState;
  }
}

export default configurationRedure;


export const getListConfigurations = () => {
  return {
    type: ACTIONS_TYPE.FETCH_CONFIGURATIONS,
    payload: getConfigurationsAPI()
  }
}

export const getConfig = (id) => {
  return {
    type: ACTIONS_TYPE.FETCH_CONFIG,
    payload: getConfigAPI(id)
  }
}
export const addConfig = (config) =>  {
  return {
    type: ACTIONS_TYPE.ADD_CONFIG,
    payload: addConfigAPI(config)
  };
}
export const editConfig = (config) =>  {
  return {
    type: ACTIONS_TYPE.ADD_CONFIG,
    payload: editConfigAPI(config)
  };
}
export const deleteConfig = (id) =>  {
  return {
    type: ACTIONS_TYPE.ADD_CONFIG,
    payload: deleteConfigAPI(id)
  };
}


