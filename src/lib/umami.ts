import umami from '@umami/node';

umami.init({
    websiteId: '0ce639a8-cf7f-4850-8699-d1a7880be232', // Your website id
    hostUrl: 'https://cloud.umami.is', // URL to your Umami instance
});

export const umamiTrackCheckoutSuccessEvent = async (payload: {
    [key: string]: string | number | Date
}) => {
    await umami.track('checkout_success', payload);
}