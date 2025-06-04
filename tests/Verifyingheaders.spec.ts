import { test, request, expect} from '@playwright/test'

test('verifying headers', async({request})=>{

    const response = await request.get('/booking/1')
 
   const responseHeaders =  response.headers()
  


  const responseArray = response.headersArray()
  expect( responseArray.length).toBe(10)
  console.log(responseArray)
  responseArray.forEach((header)=>{
    console.log(header.name+" = "+header.value)
  })
})