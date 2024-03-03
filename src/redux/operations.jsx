import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://65d4ad673f1ab8c63435ba02.mockapi.io/'

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    try{
        const res = await axios.get('tasks')
        return res.data
    } catch (error) {

    }
})