import {test,expect} from '@playwright/test'
import TestCases from '../../../pages/TestCasePage'

test.describe('Test Cases Page',()=>{
    test('TC07: Verify Test Cases Page',async({page})=>{
        const testcases = new TestCases(page)
        //navigate to test cases page and assert
        await testcases.goToTestCases()

    })
})