# Icons

The PWA manifest expects these files in this folder:

- `icon-192.png`            (192×192, any purpose)
- `icon-512.png`            (512×512, any purpose)
- `icon-maskable-192.png`   (192×192, safe-area padded for maskable purpose)
- `icon-maskable-512.png`   (512×512, safe-area padded for maskable purpose)
- `apple-touch-icon.png`    (180×180, iOS home screen)
- `favicon-32.png`          (32×32)
- `favicon-16.png`          (16×16)

Easiest path: take your Veya logo, drop it into
https://realfavicongenerator.net/ and download the generated set.

For maskable icons specifically, the logo needs ~20% padding on all sides
so it doesn't get cut off by the OS shape mask. Check yours with
https://maskable.app/.

Until these files are added, the favicon falls back to `/favicon.svg`
(which is checked in) and the PWA install prompt will refuse to appear on
Android (iOS will still install).
