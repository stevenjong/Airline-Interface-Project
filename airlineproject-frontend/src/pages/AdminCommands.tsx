import {useState} from 'react'
import {addAircraft, deleteAircraft, addContent, deleteContent, addUser, deleteUser, addDistribution, deleteDistribution} from '../services/api'

function AdminCommands(){
    const [newAirline, setAirline] = useState<string>('')
    const [newTailNumber, setTailNumber] = useState<string>('')
    const [newModel, setModel] = useState<string>('')
    const [newSoftwareVer, setSoftwareVer] = useState<string>('')
    const [newName, setName] = useState<string>('')
    const [newType, setType] = useState<string>('')
    const [newTags, setTags] = useState<string>('')
    const [newFormat, setFormat] = useState<string>('')
    const [newDuration, setDuration] = useState<number>(0)
    const [newFileSize, setFileSize] = useState<number>(0)
    const [newEmail, setEmail] = useState<string>('')
    const [newPasswordHash, setPassword] = useState<string>('')
    const [newRole, setRole] = useState<string>('')
    const [newAircraftId, setAircraftId] = useState <number>(0)
    const [newContentId, setContentId] = useState <number>(0)
    const [newStatus, setNewStatus] = useState <string>('')
    const [newDate, setNewDate] = useState <string>('')
    const handleAddAircraft = () => {
        if(newTailNumber !== ''){
            addAircraft({tail_number: newTailNumber, airline: newAirline, model: newModel, software_ver: newSoftwareVer})
        }
    }
    const handleDeleteAircraft = () => {
        if(newTailNumber !== ''){
            deleteAircraft(newTailNumber)
        }
    }
    const handleAddContent = () => {
        if(newName !== ''){
            addContent({name: newName, type: newType, tags: newTags, format: newFormat, duration: newDuration, file_size: newFileSize})
        }
    }
    const handleDeleteContent = () => {
        if(newName !== ''){
            deleteContent(newName)
        }
    }
    const handleAddUsers = () => {
        if(newEmail !== ''){
            addUser({email: newEmail, password_hash: newPasswordHash, role: newRole})
        }
    }
    const handleDeleteUsers = () => {
        if(newEmail !== ''){
            deleteUser(newEmail)
        }
    }
    const handleAddDistribution = () => {
        if(newAircraftId !== 0 && newContentId !== 0){
            addDistribution({aircraft_id: newAircraftId, content_id: newContentId, status: newStatus, scheduled_date: newDate})
        }
    }
    const handleDeleteDistribution = () => {
        if(newAircraftId !== 0 && newContentId !== 0){
            deleteDistribution(newAircraftId, newContentId)
        }
    }
    return(
        <div>
            <h1>Admin Controls</h1>
            <div>
                <button onClick = {handleAddAircraft}>Add Aircraft</button>
                <input type = 'text' placeholder='Tail Number' onChange={(e) => setTailNumber(e.target.value)} />
                <input type = 'text' placeholder='Airline' onChange={(e) => setAirline(e.target.value)} />
                <input type = 'text' placeholder='Model' onChange={(e) => setModel(e.target.value)} />
                <input type = 'text' placeholder='Software Version' onChange={(e) => setSoftwareVer(e.target.value)} />
            </div>
            <div>
                <button onClick = {handleDeleteAircraft}>Delete Aircraft</button>
                <input type = 'text' placeholder='Tail Number' onChange={(e) => setTailNumber(e.target.value)} />
            </div>
            <div>
                <button onClick = {handleAddContent}>Add Content</button>
                <input type = 'text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input type = 'text' placeholder='Type' onChange={(e) => setType(e.target.value)} />
                <input type = 'text' placeholder='Tags' onChange={(e) => setTags(e.target.value)} />
                <input type = 'text' placeholder='Format' onChange={(e) => setFormat(e.target.value)} />
                <input type = 'number' placeholder='Duration' onChange={(e) => setDuration(Number(e.target.value))} />
                <input type = 'number' placeholder='File Size' onChange={(e) => setFileSize(Number(e.target.value))} />
            </div>
            <div>
                <button onClick = {handleDeleteContent}>Delete Content</button>
                <input type = 'text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <button onClick = {handleAddUsers}>Add User</button>
                <input type = 'text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input type = 'text' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <select onChange = {(e) => setRole(e.target.value)}>
                    <option value = 'admin'>Admin</option>
                    <option value = 'support'>Support</option>
                </select>
            </div>
            <div>
                <button onClick = {handleDeleteUsers}>Delete Users</button>
                <input type = 'text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <button onClick = {handleAddDistribution}>Add Distribution</button>
                <input type = 'number' placeholder='Aircraft ID' onChange={(e) => setAircraftId(Number(e.target.value))} />
                <input type = 'number' placeholder='Content ID' onChange={(e) => setContentId(Number(e.target.value))} />
                <select onChange = {(e) => setNewStatus(e.target.value)}>
                    <option value = 'pending'>Pending</option>
                    <option value = 'completed'>Completed</option>
                    <option value = 'cancelled'>Cancelled</option>
                </select>
                <input type = 'datetime-local' onChange = {(e) => setNewDate(e.target.value)} />
            </div>
            <div>
                <button onClick = {handleDeleteDistribution}>Delete Distribution</button>
                <input type = 'number' placeholder='Aircraft ID' onChange={(e) => setAircraftId(Number(e.target.value))} />
                <input type = 'number' placeholder='Content ID' onChange={(e) => setContentId(Number(e.target.value))} />
            </div>
        </div>
    )
}

export default AdminCommands