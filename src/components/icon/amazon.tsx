import type { _SVGProps } from "./index.type";

export const AmazonIcon = ({ size = 24, ...props }: _SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
        <path
          fill="#fff"
          d="M13.202 12.98c-.371.74-1.008 1.218-1.696 1.38-.105 0-.264.051-.424.051-1.164 0-1.853-.9-1.853-2.225 0-1.697 1.007-2.49 2.277-2.863.688-.158 1.484-.211 2.278-.211v.636c0 1.219.053 2.171-.582 3.232Zm.582-6.304c-.688.052-1.484.105-2.278.21-1.218.16-2.436.372-3.44.85-1.96.794-3.286 2.49-3.286 4.978 0 3.129 2.013 4.717 4.557 4.717.846 0 1.535-.107 2.169-.264 1.008-.319 1.854-.902 2.86-1.962.583.794.744 1.167 1.748 2.014.265.105.53.105.741-.052.636-.53 1.75-1.485 2.331-2.015.265-.211.213-.53.052-.793-.581-.742-1.165-1.38-1.165-2.81V6.782c0-2.013.16-3.869-1.322-5.245C15.533.425 13.625 0 12.142 0h-.636c-2.7.157-5.559 1.323-6.197 4.662-.105.425.214.583.425.635l2.966.371c.318-.053.477-.319.53-.581.263-1.167 1.217-1.75 2.276-1.857h.213c.636 0 1.325.266 1.694.796.424.636.371 1.484.371 2.227v.423Z"
        />
        <path
          fill="#FF9A00"
          d="M24.497 17.973v-.001c-.011-.25-.063-.44-.168-.599l-.011-.015-.013-.016c-.106-.116-.207-.16-.317-.207-.329-.128-.807-.195-1.383-.197-.414 0-.87.04-1.328.14l-.001-.03-.462.153-.008.004-.261.085v.011a4.084 4.084 0 0 0-.843.473c-.16.12-.293.28-.3.524a.489.489 0 0 0 .175.375.56.56 0 0 0 .43.116l.023-.001.017-.003c.225-.048.554-.08.94-.134.33-.037.68-.064.983-.064.214-.001.408.014.54.043a.608.608 0 0 1 .164.055.476.476 0 0 1 .013.132c.003.255-.105.726-.253 1.186-.144.46-.319.922-.434 1.229a.624.624 0 0 0-.047.233.507.507 0 0 0 .155.37.52.52 0 0 0 .353.14h.006a.71.71 0 0 0 .437-.168c1.171-1.053 1.58-2.735 1.596-3.683l-.003-.15Zm-3.473 1.46a.823.823 0 0 0-.357.08c-.128.051-.26.11-.383.163l-.182.076-.238.095v.002c-2.575 1.045-5.28 1.658-7.783 1.712-.092.002-.185.002-.274.002C7.87 21.566 4.66 19.74 1.42 17.94a.741.741 0 0 0-.343-.09.599.599 0 0 0-.404.157.554.554 0 0 0-.172.402.639.639 0 0 0 .253.494C3.793 21.544 7.127 23.997 11.61 24c.087 0 .176-.003.265-.004 2.852-.064 6.076-1.028 8.58-2.6l.015-.01c.327-.197.655-.42.964-.667a.769.769 0 0 0 .324-.597c-.008-.41-.357-.69-.733-.69Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5 0h24v24H.5z" />
        </clipPath>
      </defs>
    </svg>
  );
};