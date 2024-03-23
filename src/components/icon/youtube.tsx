import type { _SVGProps } from "./index.type";

export const YoutubeIcon = ({ size = 24, ...props }: _SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#CE1312"
          fillRule="evenodd"
          d="M9.522 15.135V8.344l6.484 3.407-6.484 3.384ZM23.76 7.167s-.235-1.665-.954-2.399c-.913-.963-1.936-.967-2.405-1.023-3.358-.245-8.396-.245-8.396-.245h-.01s-5.038 0-8.396.245c-.47.056-1.492.06-2.406 1.023-.719.734-.953 2.4-.953 2.4S0 9.122 0 11.077v1.835c0 1.956.24 3.912.24 3.912s.234 1.665.953 2.399c.914.962 2.113.932 2.647 1.033 1.92.186 8.16.243 8.16.243s5.043-.008 8.401-.252c.47-.057 1.492-.062 2.405-1.024.72-.734.954-2.4.954-2.4s.24-1.955.24-3.911v-1.834c0-1.956-.24-3.912-.24-3.912Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
