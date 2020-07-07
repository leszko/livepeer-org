/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui"
import Link from "next/link"
import { useMemo } from "react"

type Props = {
  pushSx?: SxStyleProp
  isDark?: boolean
  isLink?: boolean
}

const LivepeerLogo = ({ pushSx, isDark, isLink = true }: Props) => {
  const markup = useMemo(
    () => (
      <svg
        viewBox="0 0 123 34"
        sx={{ width: "123px", height: "34px", ...pushSx }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.28774 0H0V26.5496H3.28774V0ZM43.4171 6.87455C40.0734 6.87455 37.4673 8.57416 36.0904 10.8565C35.0086 12.6532 34.6152 14.6928 34.6152 16.9751C34.6152 19.6945 35.402 22.2196 37.0247 24.0649C38.4999 25.8131 40.7126 26.93 43.4663 26.93C45.2857 26.93 47.0067 26.3958 48.3836 25.4732C49.9571 24.4049 51.0881 22.6567 51.3831 20.7628H48.1869C47.941 21.7826 47.5968 22.3168 47.0559 22.8509C46.2692 23.6765 44.9907 24.1135 43.4663 24.1135C41.9911 24.1135 40.811 23.6279 39.9259 22.7538C38.7457 21.5884 38.0573 19.6945 38.0573 17.9463H51.7765L51.8257 16.0039C51.8748 13.4302 50.9406 10.9536 49.367 9.25401C47.8919 7.79719 45.9249 6.87455 43.4171 6.87455ZM38.1057 15.227C38.2041 12.4105 39.9251 9.59396 43.4164 9.59396C45.1374 9.59396 46.4159 10.2738 47.2518 11.3421C48.0386 12.3619 48.432 13.8187 48.432 15.227H38.1057ZM63.0029 7.06837C60.8511 7.06837 58.3569 8.134 57.2321 10.0231L56.6453 7.55275H54.1511V34H57.3788V24.3608C58.4058 26.1046 60.9 27.0733 62.954 27.0733C65.2036 27.0733 66.9642 26.2983 68.2357 25.1358C70.1919 23.2951 71.17 20.292 71.17 16.9982C71.17 13.8497 70.2408 10.9434 68.3824 9.10277C67.2087 7.84338 65.3503 7.06837 63.0029 7.06837ZM62.4663 24.4114C61.0481 24.4114 60.1189 23.8301 59.3364 23.152C57.7225 21.7473 57.1846 19.4707 57.1846 17.0972C57.1846 14.7238 57.7225 12.3987 59.3364 11.0425C60.1189 10.3643 61.0481 9.78306 62.4663 9.78306C66.7699 9.78306 67.8947 13.6097 67.8947 17.0972C67.8947 20.5848 66.7699 24.4114 62.4663 24.4114ZM74.9661 10.8565C76.343 8.57416 78.9491 6.87455 82.2929 6.87455C84.8007 6.87455 86.7676 7.79719 88.2428 9.25401C89.8163 10.9536 90.7506 13.4302 90.7014 16.0039L90.6522 17.9463H76.9331C76.9331 19.6945 77.6215 21.5884 78.8016 22.7538C79.6867 23.6279 80.8669 24.1135 82.342 24.1135C83.8664 24.1135 85.1449 23.6765 85.9317 22.8509C86.4725 22.3168 86.8168 21.7826 87.0626 20.7628H90.2589C89.9638 22.6567 88.8328 24.4049 87.2593 25.4732C85.8825 26.3958 84.1614 26.93 82.342 26.93C79.5884 26.93 77.3756 25.8131 75.9004 24.0649C74.2777 22.2196 73.491 19.6945 73.491 16.9751C73.491 14.6928 73.8843 12.6532 74.9661 10.8565ZM82.2919 9.59396C78.8006 9.59396 77.0795 12.4105 76.9812 15.227H87.3075C87.3075 13.8187 86.9141 12.3619 86.1273 11.3421C85.2914 10.2738 84.0129 9.59396 82.2919 9.59396ZM101.631 6.87527C98.287 6.87527 95.6809 8.57488 94.304 10.8572C93.2222 12.654 92.8289 14.6935 92.8289 16.9758C92.8289 19.6952 93.6156 22.2204 95.2383 24.0657C96.7135 25.8138 98.9263 26.9307 101.68 26.9307C103.499 26.9307 105.22 26.3966 106.597 25.4739C108.171 24.4056 109.302 22.6574 109.597 20.7635H106.401C106.155 21.7833 105.81 22.3175 105.27 22.8516C104.483 23.6772 103.204 24.1142 101.68 24.1142C100.205 24.1142 99.0246 23.6286 98.1395 22.7545C96.9594 21.5891 96.2709 19.6952 96.2709 17.947H109.99L110.039 16.0046C110.088 13.4309 109.154 10.9543 107.581 9.25473C106.105 7.79791 104.139 6.87527 101.631 6.87527ZM96.3196 15.227C96.4179 12.4105 98.139 9.59395 101.63 9.59395C103.351 9.59395 104.63 10.2738 105.466 11.3421C106.252 12.3619 106.646 13.8187 106.646 15.227H96.3196ZM123 9.87911L122.265 7.54623L115.451 9.92771L114.863 7.44903H112.363V26.5495H115.598V12.9896L123 9.87911ZM6.57544 7.44903H9.86318V26.5495H6.57544V7.44903ZM10.2503 0H6.57573V3.62908H10.2503V0Z"
          className="word"
          sx={{ fill: isDark ? "background" : "text" }}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.8261 7.44922H13.1516V11.0783H16.8261V7.44922ZM25.3333 7.44922H21.6588V11.0783H25.3333V7.44922ZM25.3332 23.1124H21.6587V26.7415H25.3332V23.1124ZM29.9775 7.44922H33.652V11.0783H29.9775V7.44922ZM25.917 15.2808H29.5915V18.9098H25.917V15.2808ZM21.0796 15.2808H17.405V18.9098H21.0796V15.2808Z"
          className="logo"
          fill="url(#livepeer-logo-paint0_linear)"
        />
        <defs>
          <linearGradient
            id="livepeer-logo-paint0_linear"
            x1="13.1519"
            y1="17.0848"
            x2="33.6519"
            y2="17.0849"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00A55F" />
            <stop offset="1" stopColor="#4CF1AC" />
          </linearGradient>
        </defs>
      </svg>
    ),
    [pushSx, isDark]
  )

  if (!isLink) return markup
  return (
    <Link href="/" passHref>
      <a
        sx={{
          ":hover": {
            ".word": { fill: "primary" },
            ".logo": { fill: isDark ? "background" : "text" }
          }
        }}
      >
        {markup}
      </a>
    </Link>
  )
}

export default LivepeerLogo
