import { test, expect } from '../../../fixtures/pageFixtures';

test.describe('Test Cases Page',()=>{
    test('TC07: Verify Test Cases Page',async({testCases})=>{
        //navigate to test cases page and assert
        await testCases.goToTestCases()

    })
})