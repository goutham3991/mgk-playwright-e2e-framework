import {test,expect} from '@playwright/test'


class TestCases {
    constructor(page){
        this.page=page
        this.testCasesList = page.getByText('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:')
    }

    async goToTestCases(){
        await this.page.goto('/test_cases')
        await expect(this.testCasesList).toBeVisible()
    }
}

export default TestCases