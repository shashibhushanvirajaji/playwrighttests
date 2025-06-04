import { expect, test } from '@playwright/test'
import { json } from 'stream/consumers'


test('creating booking', async ({ request }) => {

    const postResponse = await request.post('/booking', {
        data: {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    }
    )
    const jsonResponse = await postResponse.json()
    expect(postResponse.status()).toBe(200)
    expect(jsonResponse.bookingid).not.toBeNull()
    console.log(jsonResponse.bookingid)
    console.log(jsonResponse)
})