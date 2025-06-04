import { test, expect} from '@playwright/test'
import apidata from '../testdata/apitestdata.json'

test('api post call with json', async({request})=>{

    const response = request.post('/booking',{
        data:apidata.postcalltestdata
    })

    expect((await response).status()).toBe(200)
})