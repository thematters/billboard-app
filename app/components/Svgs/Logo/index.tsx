import type { SVGProps } from '~/types'

import { memo } from 'react'

const Logo = ({ customCss, width, height }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={customCss}
    width={width}
    height={height}
    viewBox="0 0 120 12"
    fill="none"
  >
    <path
      fill="#fff"
      d="M106.01 11.726V.274h10.948c2.115 0 3.042.96 3.042 2.912v5.596c0 1.984-.878 2.944-3.042 2.944H106.01Zm10.948-9.419h-8.784v7.337h8.784c.781 0 .862-.163.862-.862V3.186c0-.554-.292-.879-.862-.879ZM90.33 11.726V.274h11.225c2.261 0 3.009.894 3.009 2.603v.422c0 1.936-.797 2.7-2.961 2.7h-5.14c-.618 0-.83.18-.83.798v.065c0 .553.212.78.83.78h5.206c2.244 0 2.846.993 2.846 2.604v1.48h-2.147v-1.253c0-.618-.211-.797-.765-.797h-5.45c-1.984 0-2.683-.91-2.683-2.684v-.439c0-1.79.764-2.603 2.733-2.603h5.384c.618 0 .83-.211.83-.78v-.066c0-.618-.212-.797-.83-.797h-9.093v9.42H90.33ZM87.108 3.348l2.164 8.378h-2.31l-1.188-4.685h-6.507l.505-2.115h5.433l-.423-1.578c-.195-.683-.57-1.04-1.155-1.04h-3.123c-.602 0-1.009.357-1.188 1.04l-2.147 8.378h-2.294l2.147-8.378C77.543 1.282 78.65.274 80.357.274h3.4c1.708 0 2.83 1.008 3.351 3.074ZM60.35 3.186c0-1.953.928-2.912 3.026-2.912h7.809c2.114 0 3.042.96 3.042 2.912v5.596c0 1.984-.879 2.944-3.042 2.944h-7.809c-2.147 0-3.026-.96-3.026-2.944V3.186Zm10.835 6.458c.78 0 .862-.163.862-.862V3.186c0-.554-.293-.879-.862-.879h-7.809c-.57 0-.862.325-.862.879v5.596c0 .7.081.862.862.862h7.809ZM50.747 5.61c-.244 0-.374.113-.374.325v.146c0 .195.13.293.374.293h5.71c1.773 0 2.554.716 2.554 2.261v.879c0 1.383-.748 2.212-2.554 2.212H45.07V.274h11.387c1.806 0 2.554.83 2.554 2.212v.879c0 1.545-.78 2.244-2.554 2.244h-5.71Zm-3.514-3.303v7.37h9.159c.374 0 .472-.114.472-.424V8.88c0-.325-.098-.455-.472-.455h-5.694c-1.773 0-2.489-.667-2.489-2.164v-.537c0-1.464.716-2.147 2.49-2.147h5.693c.374 0 .472-.13.472-.472v-.358c0-.309-.098-.439-.472-.439h-9.159ZM43.916 9.644v2.082h-8.491c-2.262 0-3.351-1.009-3.351-3.09V.273h2.163v8.361c0 .684.407 1.009 1.188 1.009h8.491ZM30.969 9.644v2.082h-8.492c-2.261 0-3.35-1.009-3.35-3.09V.273h2.163v8.361c0 .684.406 1.009 1.187 1.009h8.492ZM17.541.274v11.452h-2.163V.274h2.163ZM5.677 5.61c-.244 0-.374.113-.374.325v.146c0 .195.13.293.374.293h5.71c1.774 0 2.554.716 2.554 2.261v.879c0 1.383-.748 2.212-2.554 2.212H0V.274h11.387c1.806 0 2.554.83 2.554 2.212v.879c0 1.545-.78 2.244-2.554 2.244h-5.71ZM2.164 2.306v7.37h9.158c.374 0 .472-.114.472-.424V8.88c0-.325-.098-.455-.472-.455H5.63c-1.774 0-2.49-.667-2.49-2.164v-.537c0-1.464.716-2.147 2.49-2.147h5.693c.374 0 .472-.13.472-.472v-.358c0-.309-.098-.439-.472-.439H2.164Z"
    />
  </svg>
)

export default memo(Logo)
