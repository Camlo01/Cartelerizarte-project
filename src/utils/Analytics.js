
export const initGA = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-1YQM325WM7`;
    document.head.appendChild(script)

    script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments) }
        gtag('js', new Date())
        gtag('config', 'G-1YQM325WM7')
    }
}