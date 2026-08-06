import { SVGProps } from "react";

/** Long right-pointing arrow used on "APPLY FOR SCREENING" style text links. */
export function ArrowRightLongIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      aria-hidden="true"
      {...props}
    >
      <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
    </svg>
  );
}

/** Long left-pointing arrow (mirror of ArrowRightLongIcon). */
export function ArrowLeftLongIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      aria-hidden="true"
      {...props}
    >
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
    </svg>
  );
}

/** Small triangular play icon used on the video thumbnail's flower-shaped play button. */
export function PlayTriangleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 135.39 149.4" aria-hidden="true" {...props}>
      <path d="M371.2,398.69l-127.79,71c-1.47.83-2.74.93-3.8.28a3.69,3.69,0,0,1-1.59-3.46V324.88a3.73,3.73,0,0,1,1.59-3.47,3.66,3.66,0,0,1,3.8.29l127.79,71c1.47.84,2.21,1.82,2.21,3S372.67,397.85,371.2,398.69Z" transform="translate(-238.02 -321)" />
    </svg>
  );
}

/** Facebook "square" glyph used in the footer social row. */
export function FacebookSquareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      aria-hidden="true"
      {...props}
    >
      <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
    </svg>
  );
}
