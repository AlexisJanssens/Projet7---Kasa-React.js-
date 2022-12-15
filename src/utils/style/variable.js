export const colors = {
    primary: '#FF6060',
    secondary: '#F6F6F6',
    tertiary: '#FFFFFF'
}


export const fonts = {
    tabletNormalSize: '22px',
    mobileSmallSize: '12px',
    mobileNormalSize: '14px',
    smallsize: '18px',
    normalSize: '24px',
    mediumSize: '36px',
    bigSize: '48px',
    XXLSize: '288px',
    lightWeight: '300',
    normalWeight: '500',
    boldWeight: '700'
}

const size ={
    mobileS: '320px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px'
}

export const device = {
    mobile:`(min-width: ${size.mobileS}) and (max-width: ${size.mobileL})`,

    tablet:`(min-width: ${size.mobileL}) and (max-width: ${size.tablet})`
}