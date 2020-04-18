import * as mock from "../utils/mock-utils"


export default class LycerAPI {
    
    constructor(key) {
        this.key = key
    }

    async castleList() {
        await mock.sleep()
        return mock.castleList
    }

    async castleDetails() {
        await mock.sleep()
        return mock.castleDetails
    }

    async productList() {
        await mock.sleep()
        return mock.productList
    }

    async latestNews() {
        await mock.sleep()
        return mock.newsOverviewList
    }

    async contactInfo() {
        await mock.sleep()
        return mock.contactInfo
    }

}