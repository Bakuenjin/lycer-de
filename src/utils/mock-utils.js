export function sleep(ms = 100) {
    return new Promise((resolve, reject) => {
        try { setTimeout(resolve, ms) }
        catch (err) { reject(err) }
    })
}

export const castleList = [
    { id: 42, title: 'Multiplay-Center SUMMER', thumbnail: 'http://lycer.de/mediac/400_0/media/e8a767505d181f2effff8009fffffff1.jpg' },
    { id: 27, title: 'Tropen-Insel', thumbnail: 'http://lycer.de/mediac/400_0/media/1e7171969ea64260ffff8046ffffffef.jpg' }
]

export const castleDetails = {
    id: 42,
    name: 'Multiplay-Center SUMMER',
    description: 'Mit unserer Profihüpfburg "Multiplay-Center SUMMER" machen Sie nichts verkehrt. Ideal für das größere Sommerfest, den Tag der offenen Tür, Neueröffnungen oder auch eine großartige Geburtstagsfeier.',
    type: 'Profi',
    dimensions: { width: 5, height: 5, depth: 11 },
    maxCapacity: 750,
    childHeightRange: { min: 0.9, max: 1.7 },
    childMaxWeight: 70,
    priceList: { fourHours: 80, eightHours: 140, twoDays: 230 }
}

export const productAreas = [
    {
        name: 'Hüpfburgen',
        products: [
            {
                name: 'Profi',
                thumbnail: 'http://lycer.de/mediac/400_0/media/1e7171969ea64260ffff8046ffffffef.jpg',
                route: '/burgen/profi'
            },
            {
                name: 'Klein (bis 4 Jahre)',
                thumbnail: 'http://lycer.de/mediac/400_0/media/4dc74f2a747c01d9ffff8004fffffff1.jpg',
                route: '/burgen/klein'
            },
            {
                name: 'Wasserparks',
                thumbnail: 'http://lycer.de/mediac/400_0/media/63787353a265389dffff80a4fffffff0.jpg',
                route: '/burgen/wasser'
            }
        ]
    },
    {
        name: 'Party-Food',
        products: [
            {
                name: 'Slush-Eis',
                thumbnail: 'https://miet-event.de/wp-content/uploads/2019/01/slush-eis-maschine-mieten-muenchen1.png',
                route: '/food/slush-ice'
            },
            {
                name: 'Soft-Eis',
                thumbnail: 'http://lycer.de/mediac/400_0/media/8033ba44b4c31013ffff800afffffff1.jpg',
                route: '/food/soft-ice'
            },
            {
                name: 'Popcorn',
                thumbnail: 'http://lycer.de/mediac/400_0/media/4c59a40f17543d0affff809ffffffff0.jpg',
                route: '/food/popcorn'
            }
        ]
    },
    {
        name: 'Elektronische Geräte',
        products: [
            {
                name: 'Crazy Carts',
                thumbnail: 'http://lycer.de/mediac/400_0/media/e1180e3411c8017effff801afffffff1.JPG',
                route: '/devices/crazy-carts'
            },
            {
                name: 'Hoverboards',
                thumbnail: 'http://lycer.de/mediac/400_0/media/4c59a40f17543d0affff80affffffff0.jpg',
                route: '/devices/hoverboards'
            },
            {
                name: 'Lautsprecher',
                thumbnail: 'http://lycer.de/mediac/400_0/media/4c59a40f17543d0affff80a4fffffff0.jpg',
                route: '/devices/speaker'
            }
        ]
    }
]

export const productList = [
    {
        name: 'Hüpfburgen',
        thumbnail: 'http://lycer.de/mediac/400_0/media/1e7171969ea64260ffff8046ffffffef.jpg',
        route: '/products/castles'
    },
    {
        name: 'Slush-Eis',
        thumbnail: 'https://miet-event.de/wp-content/uploads/2019/01/slush-eis-maschine-mieten-muenchen1.png',
        route: '/products/slush-ice'
    },
    {
        name: 'Soft-Eis',
        thumbnail: 'http://lycer.de/mediac/400_0/media/8033ba44b4c31013ffff800afffffff1.jpg',
        route: '/products/soft-ice'
    },
    {
        name: 'Popcorn',
        thumbnail: 'http://lycer.de/mediac/400_0/media/4c59a40f17543d0affff809ffffffff0.jpg',
        route: '/products/popcorn'
    },
    {
        name: 'Crazy Carts',
        thumbnail: 'http://lycer.de/mediac/400_0/media/e1180e3411c8017effff801afffffff1.JPG',
        route: '/products/crazy-carts'
    },
    {
        name: 'Hoverboards',
        thumbnail: 'http://lycer.de/mediac/400_0/media/4c59a40f17543d0affff80affffffff0.jpg',
        route: '/products/hoverboards'
    },
    {
        name: 'Lautsprecher',
        thumbnail: 'http://lycer.de/mediac/400_0/media/4c59a40f17543d0affff80a4fffffff0.jpg',
        route: '/products/speaker'
    }
]

export const newsOverviewList = [
    { id: 42, title: 'Neue Hüpfburg: Die Megaparty!', thumbnail: 'http://lycer.de/mediac/400_0/media/2a6a40065d849154ffff8004fffffff1.jpg' },
    { id: 41, title: 'Informationen bezüglich Corona', thumbnail: 'https://www.n-joy.de/corona1884_v-contentgross.jpg' },
    { id: 40, title: 'Frohes Neues 2020 von dem Lycer-Team!', thumbnail: 'https://www.moewius.de/wp-content/uploads/2019/01/happy-new-year-1400x933.jpg' }
]

export const contactInfo = {
    address: {
        city: 'Büren / Steinhausen',
        postalCode: '33142',
        street: 'Lippstädter Weg 40',
    },
    phone: '02951 9338982',
    mobile: '0174 2508180',
    email: 'lycer@t-online.de'
}

export const tagList = [
    { id: 1, title: 'dach', description: 'Überdachte Springfläche' },
    { id: 2, title: 'rutsche', description: 'Mit Rutsche' },
    { id: 3, title: 'wasser', description: 'Mit Wasser verwendbar' },
    { id: 4, title: 'bälle', description: 'Mit Bällen buchbar' },
    { id: 5, title: 'profi', description: 'Profihüpfburg' },
    { id: 6, title: 'klein', description: 'Kleine Hüpfburg' },
    { id: 6, title: 'wasserburg', description: 'Wasserhüpfburg' },
]