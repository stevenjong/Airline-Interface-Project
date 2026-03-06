import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000'
})

export function getAircrafts(){
    return api.get(`/aircraft`)
}

export function getOneAircraftTN(tailNumber: string){
    return api.get(`/aircraft/${tailNumber}`)
}

export function addAircraft(newAircraft: any){
    return api.post(`/aircraft`, newAircraft)
}

export function updateAircraft(tailNumber: string, connected: boolean){
    return api.put(`/aircraft/${tailNumber}`, null, {params: {connected}})
}

export function deleteAircraft(tailNumber: string){
    return api.delete(`/aircraft/${tailNumber}`)
}

export function getContent(){
    return api.get(`/content`)
}

export function getOneContent(namevar: string){
    return api.get(`/content/${namevar}`)
}

export function addContent(newContent: any){
    return api.post(`/content`, newContent)
}

export function deleteContent(namevar: string){
    return api.delete(`/content/${namevar}`)
}

export function getUsers(){
    return api.get(`/users`)
}

export function getOneUser(emailvar: string){
    return api.get(`/users/${emailvar}`)
}

export function addUser(newUser: any){
    return api.post(`/users`, newUser)
}

export function deleteUser(emailvar: string){
    return api.delete(`/users/${emailvar}`)
}

export function getDistribution(){
    return api.get(`/distribution`)
}

export function getOneDistribution(aircraftId: number, contentId: number){
    return api.get(`/distribution/${aircraftId}/${contentId}`)
}

export function addDistribution(newDistribution: any){
    return api.post(`/distribution`, newDistribution)
}

export function deleteDistribution(aircraftId: number, contentId: number){
    return api.delete(`/distribution/${aircraftId}/${contentId}`)
}

export function scheduleOneDistribution(aircraftId: number, contentId: number, datevar: string){
    return api.put(`/distribution/${aircraftId}/${contentId}/scheduled_date`, null, {params: {scheduled_date: datevar}})
}

export function changeStatusDistribution(aircraftId: number, contentId: number, statusvar: string){
    return api.put(`/distribution/${aircraftId}/${contentId}/status`, null, {params: {status: statusvar}})
}
