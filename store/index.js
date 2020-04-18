import Vuex from 'vuex'

const initializeStore = () => {
    return new Vuex.Store({
        state: {
            contactInfo: null
        },
        mutations: {
            setContactInfo: (state, info) => state.contactInfo = info,
            clearContactInfo: state => state.contactInfo = null
        },
        actions: {
            nuxtServerInit: async (store, context) => {

            }
        },
        getters: {
            contactInfo: state => state.contactInfo
        }
    })
}

export default initializeStore