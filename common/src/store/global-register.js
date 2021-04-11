function registerGlobalModule (store, props = {}) {

  if (!store || !store.hasModule) {
    return;
  }

  const initState = props.getGlobalState && props.getGlobalState() || {}
  console.log('initstate----')
  console.log(initState)

  // ! https://vuex.vuejs.org/api/#registermodule
  if (!store.hasModule('global')) {
    console.log('not regist!!!')

    const globalModule = {
      namespaced: true,
      state: initState,
      actions: {
        // ! 子应用改变state并通知父应用
        setGlobalState ({ commit }, payload) {
          commit('setGlobalState', payload);
          commit('emitGlobalState', payload);
        },

        // ! 初始化，只用于mount时同步父应用的数据
        initGlobalState ({ commit }, payload) {
          commit('setGlobalState', payload);
        }
      },
      mutations: {
        setGlobalState (state, payload) {
          // eslint-disable-next-line
          state = Object.assign(state, payload);
        },

        emitGlobalState (state) {
          if (props.setGlobalState) {
            // ! setGlobalState: (state: Record<string, any>) => boolean
            props.setGlobalState(state);
          }
        }
      }
    };

    store.registerModule('global', globalModule);
  } else {
    // 每次mount时，都同步一次父应用数据
    store.dispatch('global/initGlobalState', initState);
  }
};

export default registerGlobalModule;
