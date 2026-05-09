export default function HrefLink({ href, children, className = "" }) {
    if (!href) return null;

    function normalizeUrl(url) {
        if (!url) return '#';
        return url.startsWith('http') ? url : `https://${url}`;
    }

    return (
        <a
            href={normalizeUrl(href)}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}