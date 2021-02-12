// importa o createSlice
import { createSlice } from '@reduxjs/toolkit';

/**
 * Cria um slice com uma função assíncrona
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */
const createAsyncSlice = (config) => {
  // cria um slice
  const slice = createSlice({
    // define um nome específico para o slice
    name: config.name,
    // o estado inicial possui propriedades específicas
    // mas podemos adicionar novas / escrever por cima das existentes
    initialState: {
      loading: false,
      data: null,
      error: null,
      ...config.initialState,
    },
    // lista de reducers padrões
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      fetchError(state, action) {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      },
      // novos reducers caso necessário
      ...config.reducers,
    },
  });

  // desestruturação das ações
  const { fetchStarted, fetchSuccess, fetchError } = slice.actions;
  // ação assíncrona (thunk), recebe um payload
 // o dispatch vem do middleware thunk - o thunk recebe o store, o next e a action
 // se typeof action for uma funcao, o thunk dispara essa funcao passando o dispatch como argumento
 // tudo isso acontece com as funcoes que vc chamar dentro do dispatch()
  const asyncAction = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStarted());
      // config.fetchConfig é um método que retorna
      // o url e as opções do fetch
      console.log(payload)
      const { url, options } = config.fetchConfig(payload);
      console.log(url)
      const response = await fetch(url, options);
      const data = await response.json();
      const teste = dispatch(fetchSuccess(data)); // set data no estado global no redux
      console.log('payload', teste)
      return teste;
    } catch (error) {
      return dispatch(fetchError(error.message));
    }
  };

  // a função retorna as propriedades de slice e a ação assíncrona
  return { ...slice, asyncAction };
};

export default createAsyncSlice;
