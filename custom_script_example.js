
document.addEventListener('userConsentClickTriggered', function(event) {
    __sendDataLayer(event.detail.type);
});

let __sendDataLayer = (type) => {
    let defaultValue = 'ON';
    if (type === 'denyAll') {
        defaultValue  = 'OFF';
    }
    let dataLayerDefaultObject = {
        event: 'cookie_guard_consent_interaction',
        url: window.location.href,
        buttonAction: type,
        preferences: defaultValue,
        statistics: defaultValue,
        marketing: defaultValue
    }
    if (type === 'selection') {
        const cookieConsentCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('cookieConsentGlobalHolder='));
        // If the cookie exists
        if (cookieConsentCookie) {
            const cookieConsentString = cookieConsentCookie.split('=')[1];
            const cookieConsentObject = JSON.parse(cookieConsentString);
            ['preferences', 'statistics', 'marketing'].forEach(cookieCategory => {
                dataLayerDefaultObject[cookieCategory] = cookieConsentObject[cookieCategory] ? 'ON' : 'OFF';
            });
        }
    }
    if (type === 'closeModal') {
        dataLayerDefaultObject = {
            event: 'cookie_guard_consent_interaction',
            url: window.location.href,
            buttonAction: type
        }
    }

    if (window.dataLayer) {
        window.dataLayer.push(dataLayerDefaultObject);
    } else {
        console.error('Data layer not found.');
    }
}
