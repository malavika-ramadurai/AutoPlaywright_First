import{test,expect} from "@playwright/test"
import { auto } from "auto-playwright";

test("auto playwright exampe", async ({page})=>{
await page.goto("http://saucedemo.com");

await auto('Login as standard user',{page,test})
//await auto('get list of items ',{page,test})
await page.pause()
await auto('Get all "Add to cart" buttons and click on random three buttons',{page,test})
//await auto('Select three random buttons and click ',{page,test})

await auto('goto the cart',{page,test})
await auto('Get all "Remove" buttons and click on the lowest price item',{page,test})
//await auto('remove first item from sorted list',{page,test})
await page.pause()

})