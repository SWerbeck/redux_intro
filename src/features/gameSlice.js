import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    points: 0
}


export const gameSlice = createSlice({
     name: "game",
     initialState,
     reducers: {
        addPoint: (state) => {
            state.points += 1
        },
        subtractPoint: (state) => {
            state.points -= 1
        },
        resetPoints: (state) => {
            state.points = 0
        },

        timesTwo: (state) => {
            state.points *= 2
        }
     }

})

export const { addPoint, subtractPoint, resetPoints, timesTwo } = gameSlice.actions
export default gameSlice.reducer