import wildCardSearch from 'utils/wildCardSearch'

export default function projectFakeApi(server, apiPrefix) {

    server.get(`${apiPrefix}/project/dashboard`, (schema) => {
        return schema.db.projectDashboardData[0]
    })

    server.post(`${apiPrefix}/project/list`, (schema, { requestBody }) => {
        const { sort, search } = JSON.parse(requestBody)
        let data = schema.db.projectList
        if (sort === 'asc') {
            data = data.sort((a, b) => (a.name > b.name) ? 1 : -1)
        }
        if (sort === 'desc') {
            data = data.sort((a, b) => (a.name > b.name) ? -1 : 1)
        }

        if (search) {
            data = wildCardSearch(data, search)
        }

        return data
    })
    server.post(`${apiPrefix}/project/miscellaneous`, (schema, { requestBody }) => {

        const { sort, search } = JSON.parse(requestBody)
        let data = schema.db.miscellaneousData
        if (sort === 'asc') {
            data = data.sort((a, b) => (a.name > b.name) ? 1 : -1)
        }
        if (sort === 'desc') {
            data = data.sort((a, b) => (a.name > b.name) ? -1 : 1)
        }

        if (search) {
            data = wildCardSearch(data, search)
        }

        return data
    })
    server.post(`${apiPrefix}/project/business`, (schema, { requestBody }) => {
        const { sort, search } = JSON.parse(requestBody)
        let data = schema.db.businessData
        if (sort === 'asc') {
            data = data.sort((a, b) => (a.name > b.name) ? 1 : -1)
        }
        if (sort === 'desc') {
            data = data.sort((a, b) => (a.name > b.name) ? -1 : 1)
        }

        if (search) {
            data = wildCardSearch(data, search)
        }

        return data

    })
    server.post(`${apiPrefix}/project/marketing`, (schema, { requestBody }) => {
        const { sort, search } = JSON.parse(requestBody)
        let data = schema.db.marketingData
        if (sort === 'asc') {
            data = data.sort((a, b) => (a.name > b.name) ? 1 : -1)
        }
        if (sort === 'desc') {
            data = data.sort((a, b) => (a.name > b.name) ? -1 : 1)
        }

        if (search) {
            data = wildCardSearch(data, search)
        }

        return data
    })

    server.post(`${apiPrefix}/project/writing`, (schema, { requestBody }) => {
        const { sort, search } = JSON.parse(requestBody)
        let data = schema.db.writingData
        if (sort === 'asc') {
            data = data.sort((a, b) => (a.name > b.name) ? 1 : -1)
        }
        if (sort === 'desc') {
            data = data.sort((a, b) => (a.name > b.name) ? -1 : 1)
        }

        if (search) {
            data = wildCardSearch(data, search)
        }

        return data
    })

    server.post(`${apiPrefix}/project/all`, (schema, { requestBody }) => {
        const { sort, search } = JSON.parse(requestBody)
        let data = schema.db.allServiceData
        if (sort === 'asc') {
            data = data.sort((a, b) => (a.name > b.name) ? 1 : -1)
        }
        if (sort === 'desc') {
            data = data.sort((a, b) => (a.name > b.name) ? -1 : 1)
        }

        if (search) {
            data = wildCardSearch(data, search)
        }

        return data

    })

    server.put(`${apiPrefix}/project/list/add`, (schema, { requestBody }) => {
        const data = JSON.parse(requestBody)

        schema.db.projectList.insert(data)

        return schema.db.projectList
    })

    server.post(`${apiPrefix}/project/scrum-board/members`, schema => {
        const borderMembersId = ['3', '2', '5', '7', '1', '10', '9']
        const participantMembers = schema.db.usersData.filter(user => borderMembersId.includes(user.id))
        const allMembers = schema.db.usersData
        return {
            participantMembers,
            allMembers
        }
    })

    server.post(`${apiPrefix}/project/scrum-board/boards`, schema => {
        const data = schema.db.scrumboardData[0]
        delete data.id
        return data
    })

    server.get(`${apiPrefix}/project/scrum-board/tickets/detail`, schema => schema.db.issueData[0])
}