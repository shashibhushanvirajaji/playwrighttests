import { test, request, expect} from '@playwright/test'

test('basic authentication', async({request})=>{

   const response =  await request.put('/booking/1',{
        headers:{
            Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="
            },
            data:{
                "firstname" : "shashi",
                "lastname" : "bhushan",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
    })
    console.log(response.statusText())
    expect(response.status()).toBe(200)
})