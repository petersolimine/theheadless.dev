/*
This snippet can be re-purposed to select any eement by its inner text. 
I use this snippet often, it always comes in handy.
When an element / button has no ID or unique class, 
Hope this is helpful to someone!
*/

const aTags = await page.$$('a');
for (const aTag of aTags) {
    const label = await page.evaluate((el) => el.innerText, aTag);
    console.log(label.toString());
    if (label.toString().toLowerCase().includes('the text you need goes here (lowercase)')) {
        await aTag.click();
        
        //If there are multiple instances of the same text but only one is a button, don't 'break'
        break;
    }
}
