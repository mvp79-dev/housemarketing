import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

const GoogleAnalytics: FC<{ trackingId: string }> = ({ trackingId }) => {
    const router = useRouter();

    useEffect(() => {
        const handleLoad = () => {
            // Check if user has provided consent
            if (document.cookie.includes('cookieConsent=true')) {
                // User has provided consent, enable tracking code
                (window as any).gtag('config', trackingId, {
                    page_path: router.pathname,
                    anonymize_ip: true,
                });
            }
        };

        const handleOptOut = () => {
            // User has not provided consent, disable tracking code
            (window as any)[`ga-disable-${trackingId}`] = true;
        };

        // Load Google Analytics script
        const script = document.createElement('script');

        script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
        
        script.async = true;
        script.onload = handleLoad;
        script.onerror = handleOptOut;

        document.body.appendChild(script);

        (window as any).dataLayer = (window as any).dataLayer || [];

        (window as any).gtag = function () {
            (window as any).dataLayer.push(arguments);
        };

        (window as any).gtag('js', new Date());
        (window as any).gtag('config', trackingId);

        return () => {
            // Cleanup
            document.body.removeChild(script);
            delete (window as any).dataLayer;
            delete (window as any).gtag;
            delete (window as any)[`ga-disable-${trackingId}`];
        };
    }, [trackingId, router.pathname]);

    return null;
};

export default GoogleAnalytics;