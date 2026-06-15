export default function IsometricLogo({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 1113 441" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto ${className || ""}`}>
            <style dangerouslySetInnerHTML={{ __html: `
                .logo-stripe {
                    stroke: var(--foreground);
                    stroke-opacity: 0.25;
                }
                .logo-rect-stripe {
                    stroke: var(--foreground);
                    stroke-opacity: 0.35;
                }
                .logo-rect-outline {
                    stroke: var(--foreground);
                    stroke-opacity: 0.35;
                    fill: var(--background);
                }
                .logo-path {
                    fill: var(--foreground);
                    fill-opacity: 0.35;
                }
                .dark .logo-stripe {
                    stroke-opacity: 0.15;
                }
                .dark .logo-rect-stripe {
                    stroke-opacity: 0.2;
                }
                .dark .logo-rect-outline {
                    stroke-opacity: 0.2;
                }
                .dark .logo-path {
                    fill-opacity: 0.2;
                }
            `}} />
            <defs>
                <pattern id="stripes" width="10" height="10" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                    <rect width="10" height="10" fill="var(--background)" />
                    <line x1="0" y1="0" x2="0" y2="10" className="logo-stripe" strokeWidth="3" />
                </pattern>
            </defs>
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 347.719 80.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 278.43 120.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <path d="M417.001 120.25L417.217 120.125V119.875L417.001 120V120.25ZM417.001 160.25V160.5L417.217 160.375V160.125L417.001 160.25ZM347.719 160.25V160.5L417.001 120.5V120.25V120L347.719 160V160.25ZM417.001 120.25L416.784 120.375V160.375L417.001 160.25L417.217 160.125V120.125L417.001 120.25ZM417.001 160.25V160L347.719 200V200.25V200.5L417.001 160.5V160.25Z" className="logo-path" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 69.7188 240.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 0.429688 280.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 69.7188 320.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 208.719 240.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 139.43 280.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 208.719 320.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 347.719 160.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 278.43 200.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 347.719 240.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 347.719 240.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 278.43 280.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 347.719 320.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 416.719 280.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 347.43 320.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 416.719 360.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 486.719 320.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 417.43 360.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 486.719 400.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 625.719 0.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 556.43 40.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 625.719 80.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 764.719 0.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 695.43 40.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 764.719 80.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 903.719 0.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 834.43 40.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 903.719 80.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 1042.72 0.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 973.43 40.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 1042.72 80.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 625.719 80.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 556.43 120.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 625.719 160.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 625.719 160.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 556.43 200.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 625.719 240.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 971.719 40.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 902.43 80.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 971.719 120.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 902.719 80.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 833.43 120.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 902.719 160.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 833.719 120.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 764.43 160.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 833.719 200.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 764.719 160.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 695.43 200.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 764.719 240.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 695.719 200.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 626.43 240.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 695.719 280.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="80" transform="matrix(0.866025 0.5 -0.866025 0.5 625.719 240.25)" fill="url(#stripes)" strokeWidth="0.5" className="logo-rect-stripe" />
            <rect width="80" height="40" transform="matrix(0.866025 0.5 0 1 556.43 280.25)" strokeWidth="0.5" className="logo-rect-outline" />
            <rect width="80" height="40" transform="matrix(0.866025 -0.5 0 1 625.719 320.25)" strokeWidth="0.5" className="logo-rect-outline" />
        </svg>


    )
}