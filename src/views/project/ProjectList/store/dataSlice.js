import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetBusiness, apiGetMiscellaneous, apiGetProjectList, apiGetScrumBoardtMembers, apiPutProjectList } from 'services/ProjectService'

export const getList = createAsyncThunk('projectList/getList', async (data) => {
    const response = await apiGetProjectList(data)
    return response.data
})
export const getMmiscellaneous = createAsyncThunk('projectList/miscellaneous', async (data) => {
    const response = await apiGetMiscellaneous(data)
    return response.data
})
export const getbusiness = createAsyncThunk('projectList/business', async (data) => {
    const response = await apiGetBusiness(data)
    return response.data
})

export const getMembers = createAsyncThunk('projectList/getMembers', async () => {
    const response = await apiGetScrumBoardtMembers()
    const data = response.data.map(item => ({ value: item.id, label: item.name, img: item.img }))
    return data
})

export const putProject = createAsyncThunk('projectList/putProject', async (data) => {
    const response = await apiPutProjectList(data)
    return response.data
})


const dataSlice = createSlice({
    name: 'projectList/data',
    initialState: {
        loading: false,
        projectList: [],
        miscellaneousData: [],
        allMembers: [],

    },
    reducers: {

    },
    extraReducers: {
        [getList.fulfilled]: (state, action) => {
            state.projectList = action.payload
            state.loading = false
        },
        [getMmiscellaneous.fulfilled]: (state, action) => {
            state.projectList = action.payload
            state.loading = false
        },
        [getbusiness.fulfilled]: (state, action) => {
            state.projectList = action.payload
            state.loading = false
        },
        [getList.pending]: (state) => {
            state.loading = true
        },
        [getMmiscellaneous.pending]: (state) => {
            state.loading = true
        },
        [getbusiness.pending]: (state) => {
            state.loading = true
        },
        [getMembers.fulfilled]: (state, action) => {
            state.allMembers = action.payload
        },
        [putProject.fulfilled]: (state, action) => {
            state.projectList = action.payload
        },
    }
})


export default dataSlice.reducer
