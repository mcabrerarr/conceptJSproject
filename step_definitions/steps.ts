const { I } = inject();
const mongoInstance = require("../helpers/mongoSingleton");
const {ok} = require("assert");
// Add in your custom step files

Given('I have a defined step', () => {
    // TODO: replace with your own step
    //I.amOnPage('/');
    I.wait(5);
    I.amOnPage("/");
});
When(/^I do something$/, async function () {

});
Then(/^I expect a result$/, function () {

});
When(/^I verify my bd that my collection is not empty$/, async function () {
    const db = await mongoInstance.connect();
    const testCollection = mongoInstance.getCollection("person");
    console.log(testCollection);
    const result = await testCollection.find().toArray();
    ok(result.length > 0);
});