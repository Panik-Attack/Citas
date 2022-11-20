
export const citaReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload]

        case 'delete':
            return state.filter(cita => cita.id !== action.payload)

        case 'toggle':
            return state.map(cita =>
                (cita.id === action.payload)
                    ? { ...cita, done: !cita.done }
                    : cita
            )

        case 'toggle-old':
            return state.map(cita => {

                if (cita.id === action.payload) {
                    return {
                        ...cita,
                        done: !cita.done
                    }
                } else {
                    return cita
                }

            })

        default:
            return state
    }

}