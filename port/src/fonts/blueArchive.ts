import localFont from 'next/font/local'

export const blueArchive = localFont({
  src: [
    {
      path: './blueArchiveLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './blueArchiveMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './blueArchive.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-bluearchive',
})


