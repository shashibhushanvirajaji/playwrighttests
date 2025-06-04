import { test, request, expect} from '@playwright/test'

let reqContext1

test.beforeAll('before all tests', async()=>{
     reqContext1 = await request.newContext(
        {
            baseURL:"https://restful-booker.herokuapp.com"
        }
    )
   
})

test('Simple get call', async({request})=>{
    const response = await request.get('https://restful-booker.herokuapp.com/booking')
    console.log(  await response.json())
})

test("test 2",async()=>{
    
    const reqcon =  await reqContext1.get("/booking")
    console.log(await reqcon.json())
})

test("testing api - mention baseurl in config file",async({request})=>{
    
    const reqcon =  await request.get("/booking")
    console.log(await reqcon.json())
})

test("testing api - fetching single booking details",async({request})=>{
    
    const reqcon =  await request.get("/booking/3711")
    console.log(await reqcon.json())
})

test("testing api - query parameter ",async({request})=>{
    
    const reqcon =  await request.get("/booking",{
        params:{
            firstname:'John',
            lastname:'Smith'
        }
    })
    console.log(await reqcon.json())
})

test("testing api - validate status",async({request})=>{
    
    const response =  await request.get("/booking/1056")
   // console.log(await response.json())
   //expect( response.status()).toBe(203)
   //expect(response.json()).toBeTruthy()
   expect((await response.json())).toMatchObject({
    firstname: 'Josh',
    lastname: 'Allen',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'super bowls'
  })
})

test('demo blaze test', async({request})=>{
    const response = await request.get('https://api.demoblaze.com/entries')
    expect(( response).status()).toBe(200)
   const jsonResponse =  await response.json()
    console.log(jsonResponse.Items[6].title)

})