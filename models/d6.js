import { DiceRoller } from '../node_modules/rpg-dice-roller/lib/esm/bundle.min.js';
import Base64 from '../components/helpers/Base64.js';


// create a new instance of the DiceRoller
const roller = new DiceRoller();

export default class {
  svgFaces = [
    // 1
    '<svg viewBox="0 0 319.17 313.18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter id="g" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="0.74285713"/></filter><linearGradient id="f" x1="264.29" x2="264.29" y1="573.26" y2="649.32" gradientTransform="translate(-156.86 344.61)" gradientUnits="userSpaceOnUse"><stop stop-color="#f9f8f8" offset="0"/><stop stop-color="#ececec" offset=".070067"/><stop stop-color="#e8e7e7" offset=".93328"/><stop stop-color="#b4b3b4" offset="1"/></linearGradient><linearGradient id="e" x1="248.76" x2="249.81" y1="634.69" y2="664.5" gradientTransform="translate(-156.86 344.61)" gradientUnits="userSpaceOnUse"><stop stop-color="#dad9d9" offset="0"/><stop stop-color="#dad9d9" offset=".27966"/><stop offset="1"/></linearGradient><radialGradient id="a" cx="103.59" cy="94.288" r="25.809" gradientTransform="matrix(1 0 0 .84932 0 14.208)" gradientUnits="userSpaceOnUse" xlink:href="#c"/><linearGradient id="c"><stop stop-color="#fff" offset="0"/><stop stop-color="#fff" stop-opacity="0" offset="1"/></linearGradient><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="0.71376063"/></filter><linearGradient id="d" x1="72.832" x2="72.832" y1="20.395" y2="36.658" gradientUnits="userSpaceOnUse"><stop stop-color="#a40000" offset="0"/><stop stop-color="#ef2929" offset="1"/></linearGradient></defs><g transform="translate(-740.41 -164.34)"><g transform="matrix(4 0 0 4 462.3 -3508.7)"><rect x="73.032" y="920.25" width="74.286" height="74.286" ry="9.2857" fill="#888a85" filter="url(#g)" opacity=".72245" stroke="#888a85" stroke-width=".44291"/><rect x="70.282" y="918.75" width="74.286" height="74.286" ry="9.2857" fill="url(#f)" stroke="url(#e)" stroke-width=".44291"/><path transform="matrix(.85722 0 0 .54844 4.3209 879.78)" d="m129.4 94.288c0 12.106-11.555 21.92-25.809 21.92-14.254 0-25.809-9.8141-25.809-21.92 0-12.106 11.555-21.92 25.809-21.92 14.254 0 25.809 9.8141 25.809 21.92z" fill="url(#a)" filter="url(#b)" opacity=".76327"/><path transform="matrix(.35623 0 0 .43954 96.878 941.41)" d="m129.4 94.288c0 12.106-11.555 21.92-25.809 21.92-14.254 0-25.809-9.8141-25.809-21.92 0-12.106 11.555-21.92 25.809-21.92 14.254 0 25.809 9.8141 25.809 21.92z" fill="url(#a)" filter="url(#b)" opacity=".76327"/><path transform="matrix(.87676 0 0 .87676 43.569 930.89)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#d)"/><path d="m100.33 956.68c-0.0243 0.23968-0.0238 0.4673-0.0238 0.7134 0 3.9375 3.1727 7.134 7.1102 7.134 3.9376 0 7.134-3.1964 7.134-7.134 0-0.2461 5.5e-4 -0.47372-0.0237-0.7134-0.39709 3.5615-3.4427 6.3255-7.1102 6.3255-3.6675 0-6.6894-2.7639-7.0864-6.3255z" fill="#fff"/></g></g></svg>',
    // 2
    '<svg viewBox="0 0 319.17 313.18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="b" x1="72.832" x2="72.832" y1="20.395" y2="36.658" gradientUnits="userSpaceOnUse" xlink:href="#e"/><linearGradient id="e"><stop stop-color="#a40000" offset="0"/><stop stop-color="#ef2929" offset="1"/></linearGradient><radialGradient id="a" cx="103.59" cy="94.288" r="25.809" gradientTransform="matrix(1 0 0 .84932 0 14.208)" gradientUnits="userSpaceOnUse" xlink:href="#d"/><linearGradient id="d"><stop stop-color="#fff" offset="0"/><stop stop-color="#fff" stop-opacity="0" offset="1"/></linearGradient><filter id="c" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="0.71376063"/></filter><linearGradient id="g" x1="264.29" x2="264.29" y1="573.26" y2="649.32" gradientTransform="matrix(4 0 0 4 -715.14 -2044.8)" gradientUnits="userSpaceOnUse"><stop stop-color="#f9f8f8" offset="0"/><stop stop-color="#ececec" offset=".070067"/><stop stop-color="#e8e7e7" offset=".93328"/><stop stop-color="#b4b3b4" offset="1"/></linearGradient><linearGradient id="f" x1="248.76" x2="249.81" y1="634.69" y2="664.5" gradientTransform="matrix(4 0 0 4 -715.14 -2044.8)" gradientUnits="userSpaceOnUse"><stop stop-color="#dad9d9" offset="0"/><stop stop-color="#dad9d9" offset=".27966"/><stop offset="1"/></linearGradient><filter id="h" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="0.74285713"/></filter></defs><g transform="translate(-190.41 -249.81)"><rect transform="matrix(4 0 0 4 -180 -2477.1)" x="96.107" y="683.72" width="74.286" height="74.286" ry="9.2857" fill="#888a85" filter="url(#h)" opacity=".72245" stroke="#888a85" stroke-width=".44291"/><rect x="193.43" y="251.82" width="297.14" height="297.14" ry="37.143" fill="url(#g)" stroke="url(#f)" stroke-width="1.7717"/><path transform="matrix(3.4289 0 0 2.1938 -70.417 95.92)" d="m129.4 94.288c0 12.106-11.555 21.92-25.809 21.92-14.254 0-25.809-9.8141-25.809-21.92 0-12.106 11.555-21.92 25.809-21.92 14.254 0 25.809 9.8141 25.809 21.92z" fill="url(#a)" filter="url(#c)" opacity=".76327"/><path transform="matrix(1.4249 0 0 1.7581 299.81 342.45)" d="m129.4 94.288c0 12.106-11.555 21.92-25.809 21.92-14.254 0-25.809-9.8141-25.809-21.92 0-12.106 11.555-21.92 25.809-21.92 14.254 0 25.809 9.8141 25.809 21.92z" fill="url(#a)" filter="url(#c)" opacity=".76327"/><path transform="matrix(3.507 0 0 3.507 174.57 204.35)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#b)"/><path transform="matrix(3.507 0 0 3.507 -1.4262 388.35)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#b)"/><path d="m225.6 491.54c-0.0972 0.95872-0.0952 1.8692-0.0952 2.8536 0 15.75 12.691 28.536 28.441 28.536 15.75 0 28.536-12.786 28.536-28.536 0-0.9844 2e-3 -1.8949-0.0948-2.8536-1.5884 14.246-13.771 25.302-28.441 25.302-14.67 0-26.757-11.056-28.346-25.302z" fill="#fff"/><path d="m401.6 307.54c-0.0972 0.95872-0.0952 1.8692-0.0952 2.8536 0 15.75 12.691 28.536 28.441 28.536 15.75 0 28.536-12.786 28.536-28.536 0-0.9844 0-1.8949-0.095-2.8536-1.5884 14.246-13.771 25.302-28.441 25.302-14.67 0-26.757-11.056-28.346-25.302z" fill="#fff"/></g></svg>',
    // 3
    '<svg viewBox="0 0 319.17 313.18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="72.832" x2="72.832" y1="20.395" y2="36.658" gradientUnits="userSpaceOnUse" xlink:href="#e"/><linearGradient id="e"><stop stop-color="#a40000" offset="0"/><stop stop-color="#ef2929" offset="1"/></linearGradient><radialGradient id="b" cx="103.59" cy="94.288" r="25.809" gradientTransform="matrix(1 0 0 .84932 0 14.208)" gradientUnits="userSpaceOnUse" xlink:href="#d"/><linearGradient id="d"><stop stop-color="#fff" offset="0"/><stop stop-color="#fff" stop-opacity="0" offset="1"/></linearGradient><filter id="c" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="0.71376063"/></filter><linearGradient id="g" x1="264.29" x2="264.29" y1="573.26" y2="649.32" gradientTransform="matrix(4 0 0 4 -715.14 -1918.8)" gradientUnits="userSpaceOnUse"><stop stop-color="#f9f8f8" offset="0"/><stop stop-color="#ececec" offset=".070067"/><stop stop-color="#e8e7e7" offset=".93328"/><stop stop-color="#b4b3b4" offset="1"/></linearGradient><linearGradient id="f" x1="248.76" x2="249.81" y1="634.69" y2="664.5" gradientTransform="matrix(4 0 0 4 -715.14 -1918.8)" gradientUnits="userSpaceOnUse"><stop stop-color="#dad9d9" offset="0"/><stop stop-color="#dad9d9" offset=".27966"/><stop offset="1"/></linearGradient><filter id="h" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="0.74285713"/></filter></defs><g transform="translate(-190.41 -375.77)"><rect transform="matrix(4 0 0 4 220 -2751.1)" x="-3.8929" y="783.72" width="74.286" height="74.286" ry="9.2857" fill="#888a85" filter="url(#h)" opacity=".72245" stroke="#888a85" stroke-width=".44291"/><rect x="193.43" y="377.79" width="297.14" height="297.14" ry="37.143" fill="url(#g)" stroke="url(#f)" stroke-width="1.7717"/><path transform="matrix(3.4289 0 0 2.1938 -70.417 221.89)" d="m129.4 94.288c0 12.106-11.555 21.92-25.809 21.92-14.254 0-25.809-9.8141-25.809-21.92 0-12.106 11.555-21.92 25.809-21.92 14.254 0 25.809 9.8141 25.809 21.92z" fill="url(#b)" filter="url(#c)" opacity=".76327"/><path transform="matrix(1.4249 0 0 1.7581 299.81 468.42)" d="m129.4 94.288c0 12.106-11.555 21.92-25.809 21.92-14.254 0-25.809-9.8141-25.809-21.92 0-12.106 11.555-21.92 25.809-21.92 14.254 0 25.809 9.8141 25.809 21.92z" fill="url(#b)" filter="url(#c)" opacity=".76327"/><path transform="matrix(3.507 0 0 3.507 86.574 426.32)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path transform="matrix(3.507 0 0 3.507 174.57 330.32)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path transform="matrix(3.507 0 0 3.507 -1.4262 514.32)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path d="m313.6 529.51c-0.0972 0.95872-0.0952 1.8692-0.0952 2.8536 0 15.75 12.691 28.536 28.441 28.536 15.75 0 28.536-12.786 28.536-28.536 0-0.9844 2e-3 -1.8949-0.0948-2.8536-1.5884 14.246-13.771 25.302-28.441 25.302-14.67 0-26.757-11.056-28.346-25.302z" fill="#fff"/><path d="m225.6 617.51c-0.0972 0.95872-0.0952 1.8692-0.0952 2.8536 0 15.75 12.691 28.536 28.441 28.536 15.75 0 28.536-12.786 28.536-28.536 0-0.9844 2e-3 -1.8949-0.0948-2.8536-1.5884 14.246-13.771 25.302-28.441 25.302-14.67 0-26.757-11.056-28.346-25.302z" fill="#fff"/><path d="m401.6 433.51c-0.0972 0.95872-0.0952 1.8692-0.0952 2.8536 0 15.75 12.691 28.536 28.441 28.536 15.75 0 28.536-12.786 28.536-28.536 0-0.9844 2e-3 -1.8949-0.0948-2.8536-1.5884 14.246-13.771 25.302-28.441 25.302-14.67 0-26.757-11.056-28.346-25.302z" fill="#fff"/></g></svg>',
    // 4
    '<svg viewBox="0 0 319.17 313.18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="72.832" x2="72.832" y1="20.395" y2="36.658" gradientUnits="userSpaceOnUse" xlink:href="#e"/><linearGradient id="e"><stop stop-color="#a40000" offset="0"/><stop stop-color="#ef2929" offset="1"/></linearGradient><radialGradient id="b" cx="103.59" cy="94.288" r="25.809" gradientTransform="matrix(1 0 0 .84932 0 14.208)" gradientUnits="userSpaceOnUse" xlink:href="#d"/><linearGradient id="d"><stop stop-color="#fff" offset="0"/><stop stop-color="#fff" stop-opacity="0" offset="1"/></linearGradient><filter id="c" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="0.71376063"/></filter><linearGradient id="g" x1="264.29" x2="264.29" y1="573.26" y2="649.32" gradientTransform="matrix(4 0 0 4 -715.14 -1918.8)" gradientUnits="userSpaceOnUse"><stop stop-color="#f9f8f8" offset="0"/><stop stop-color="#ececec" offset=".070067"/><stop stop-color="#e8e7e7" offset=".93328"/><stop stop-color="#b4b3b4" offset="1"/></linearGradient><linearGradient id="f" x1="248.76" x2="249.81" y1="634.69" y2="664.5" gradientTransform="matrix(4 0 0 4 -715.14 -1918.8)" gradientUnits="userSpaceOnUse"><stop stop-color="#dad9d9" offset="0"/><stop stop-color="#dad9d9" offset=".27966"/><stop offset="1"/></linearGradient><filter id="h" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="0.74285713"/></filter></defs><g transform="translate(-190.41 -375.77)"><rect transform="matrix(4 0 0 4 -180 -2751.1)" x="96.107" y="783.72" width="74.286" height="74.286" ry="9.2857" fill="#888a85" filter="url(#h)" opacity=".72245" stroke="#888a85" stroke-width=".44291"/><rect x="193.43" y="377.79" width="297.14" height="297.14" ry="37.143" fill="url(#g)" stroke="url(#f)" stroke-width="1.7717"/><path transform="matrix(3.4289 0 0 2.1938 -70.417 221.89)" d="m129.4 94.288c0 12.106-11.555 21.92-25.809 21.92-14.254 0-25.809-9.8141-25.809-21.92 0-12.106 11.555-21.92 25.809-21.92 14.254 0 25.809 9.8141 25.809 21.92z" fill="url(#b)" filter="url(#c)" opacity=".76327"/><path transform="matrix(1.4249 0 0 1.7581 299.81 468.42)" d="m129.4 94.288c0 12.106-11.555 21.92-25.809 21.92-14.254 0-25.809-9.8141-25.809-21.92 0-12.106 11.555-21.92 25.809-21.92 14.254 0 25.809 9.8141 25.809 21.92z" fill="url(#b)" filter="url(#c)" opacity=".76327"/><path transform="matrix(3.507 0 0 3.507 -1.4262 330.32)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path transform="matrix(3.507 0 0 3.507 174.57 330.32)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path transform="matrix(3.507 0 0 3.507 -1.4262 514.32)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path transform="matrix(3.507 0 0 3.507 174.57 514.32)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path d="m401.6 617.51c-0.0972 0.95872-0.0952 1.8692-0.0952 2.8536 0 15.75 12.691 28.536 28.441 28.536 15.75 0 28.536-12.786 28.536-28.536 0-0.9844 2e-3 -1.8949-0.0948-2.8536-1.5883 14.246-13.771 25.302-28.441 25.302-14.67 0-26.757-11.056-28.346-25.302z" fill="#fff"/><path d="m225.6 617.51c-0.0972 0.95872-0.0952 1.8692-0.0952 2.8536 0 15.75 12.691 28.536 28.441 28.536 15.75 0 28.536-12.786 28.536-28.536 0-0.9844 2e-3 -1.8949-0.0948-2.8536-1.5884 14.246-13.771 25.302-28.441 25.302s-26.757-11.056-28.346-25.302z" fill="#fff"/><path d="m225.6 433.51c-0.0972 0.95872-0.0952 1.8692-0.0952 2.8536 0 15.75 12.691 28.536 28.441 28.536 15.75 0 28.536-12.786 28.536-28.536 0-0.9844 2e-3 -1.8949-0.0948-2.8536-1.5884 14.246-13.771 25.302-28.441 25.302s-26.757-11.056-28.346-25.302z" fill="#fff"/><path d="m401.6 433.51c-0.0972 0.95872-0.0952 1.8692-0.0952 2.8536 0 15.75 12.691 28.536 28.441 28.536 15.75 0 28.536-12.786 28.536-28.536 0-0.9844 2e-3 -1.8949-0.0948-2.8536-1.5883 14.246-13.771 25.302-28.441 25.302-14.67 0-26.757-11.056-28.346-25.302z" fill="#fff"/></g></svg>',
    // 5
    '<svg viewBox="0 0 319.17 313.18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="72.832" x2="72.832" y1="20.395" y2="36.658" gradientUnits="userSpaceOnUse" xlink:href="#e"/><linearGradient id="e"><stop stop-color="#a40000" offset="0"/><stop stop-color="#ef2929" offset="1"/></linearGradient><radialGradient id="b" cx="103.59" cy="94.288" r="25.809" gradientTransform="matrix(1 0 0 .84932 0 14.208)" gradientUnits="userSpaceOnUse" xlink:href="#d"/><linearGradient id="d"><stop stop-color="#fff" offset="0"/><stop stop-color="#fff" stop-opacity="0" offset="1"/></linearGradient><filter id="c" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="0.71376063"/></filter><linearGradient id="g" x1="264.29" x2="264.29" y1="573.26" y2="649.32" gradientTransform="matrix(4 0 0 4 -715.14 -1918.8)" gradientUnits="userSpaceOnUse"><stop stop-color="#f9f8f8" offset="0"/><stop stop-color="#ececec" offset=".070067"/><stop stop-color="#e8e7e7" offset=".93328"/><stop stop-color="#b4b3b4" offset="1"/></linearGradient><linearGradient id="f" x1="248.76" x2="249.81" y1="634.69" y2="664.5" gradientTransform="matrix(4 0 0 4 -715.14 -1918.8)" gradientUnits="userSpaceOnUse"><stop stop-color="#dad9d9" offset="0"/><stop stop-color="#dad9d9" offset=".27966"/><stop offset="1"/></linearGradient><filter id="h" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="0.74285713"/></filter></defs><g transform="translate(-190.41 -375.77)"><rect transform="matrix(4 0 0 4 220 -3151.1)" x="-3.8929" y="883.72" width="74.286" height="74.286" ry="9.2857" fill="#888a85" filter="url(#h)" opacity=".72245" stroke="#888a85" stroke-width=".44291"/><rect x="193.43" y="377.79" width="297.14" height="297.14" ry="37.143" fill="url(#g)" stroke="url(#f)" stroke-width="1.7717"/><path transform="matrix(3.4289 0 0 2.1938 -70.417 221.89)" d="m129.4 94.288c0 12.106-11.555 21.92-25.809 21.92-14.254 0-25.809-9.8141-25.809-21.92 0-12.106 11.555-21.92 25.809-21.92 14.254 0 25.809 9.8141 25.809 21.92z" fill="url(#b)" filter="url(#c)" opacity=".76327"/><path transform="matrix(1.4249 0 0 1.7581 299.81 468.42)" d="m129.4 94.288c0 12.106-11.555 21.92-25.809 21.92-14.254 0-25.809-9.8141-25.809-21.92 0-12.106 11.555-21.92 25.809-21.92 14.254 0 25.809 9.8141 25.809 21.92z" fill="url(#b)" filter="url(#c)" opacity=".76327"/><path transform="matrix(3.507 0 0 3.507 86.574 426.32)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path transform="matrix(3.507 0 0 3.507 -1.4262 330.32)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path transform="matrix(3.507 0 0 3.507 174.57 330.32)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path transform="matrix(3.507 0 0 3.507 -1.4262 514.32)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path transform="matrix(3.507 0 0 3.507 174.57 514.32)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path d="m313.6 529.51c-0.0972 0.9588-0.0952 1.8694-0.0952 2.8536 0 15.75 12.691 28.536 28.441 28.536 15.75 0 28.536-12.786 28.536-28.536 0-0.9842 2e-3 -1.8948-0.0948-2.8536-1.5884 14.246-13.771 25.302-28.441 25.302-14.67 0-26.757-11.056-28.346-25.302z" fill="#fff"/><path d="m401.6 617.51c-0.0972 0.9588-0.0952 1.8694-0.0952 2.8538 0 15.75 12.691 28.536 28.441 28.536 15.75 0 28.536-12.786 28.536-28.536 0-0.9844 2e-3 -1.895-0.0948-2.8538-1.5884 14.246-13.771 25.302-28.441 25.302-14.67 0-26.757-11.056-28.346-25.302z" fill="#fff"/><path d="m225.6 617.51c-0.0972 0.9588-0.0952 1.8694-0.0952 2.8538 0 15.75 12.691 28.536 28.441 28.536 15.75 0 28.536-12.786 28.536-28.536 0-0.9844 2e-3 -1.895-0.0948-2.8538-1.5884 14.246-13.771 25.302-28.441 25.302-14.67 0-26.757-11.056-28.346-25.302z" fill="#fff"/><path d="m225.6 433.51c-0.0972 0.9588-0.0952 1.8692-0.0952 2.8536 0 15.75 12.691 28.536 28.441 28.536 15.75 0 28.536-12.786 28.536-28.536 0-0.9844 2e-3 -1.8948-0.0948-2.8536-1.5884 14.246-13.771 25.302-28.441 25.302-14.67 0-26.757-11.056-28.346-25.302z" fill="#fff"/><path d="m401.6 433.51c-0.0972 0.9588-0.0952 1.8692-0.0952 2.8536 0 15.75 12.691 28.536 28.441 28.536 15.75 0 28.536-12.786 28.536-28.536 0-0.9844 2e-3 -1.8948-0.0948-2.8536-1.5884 14.246-13.771 25.302-28.441 25.302-14.67 0-26.757-11.056-28.346-25.302z" fill="#fff"/></g></svg>',
    // 6
    '<svg viewBox="0 0 319.17 313.18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter id="h" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="0.74285713"/></filter><linearGradient id="g" x1="264.29" x2="264.29" y1="573.26" y2="649.32" gradientTransform="translate(-156.86 344.61)" gradientUnits="userSpaceOnUse"><stop stop-color="#f9f8f8" offset="0"/><stop stop-color="#ececec" offset=".070067"/><stop stop-color="#e8e7e7" offset=".93328"/><stop stop-color="#b4b3b4" offset="1"/></linearGradient><linearGradient id="f" x1="248.76" x2="249.81" y1="634.69" y2="664.5" gradientTransform="translate(-156.86 344.61)" gradientUnits="userSpaceOnUse"><stop stop-color="#dad9d9" offset="0"/><stop stop-color="#dad9d9" offset=".27966"/><stop offset="1"/></linearGradient><radialGradient id="b" cx="103.59" cy="94.288" r="25.809" gradientTransform="matrix(1 0 0 .84932 0 14.208)" gradientUnits="userSpaceOnUse" xlink:href="#d"/><linearGradient id="d"><stop stop-color="#fff" offset="0"/><stop stop-color="#fff" stop-opacity="0" offset="1"/></linearGradient><filter id="c" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="0.71376063"/></filter><linearGradient id="a" x1="72.832" x2="72.832" y1="20.395" y2="36.658" gradientUnits="userSpaceOnUse" xlink:href="#e"/><linearGradient id="e"><stop stop-color="#a40000" offset="0"/><stop stop-color="#ef2929" offset="1"/></linearGradient></defs><g transform="translate(-190.41 -375.77)"><g transform="matrix(4 0 0 4 -87.701 -3297.2)"><rect x="73.032" y="920.25" width="74.286" height="74.286" ry="9.2857" fill="#888a85" filter="url(#h)" opacity=".72245" stroke="#888a85" stroke-width=".44291"/><rect x="70.282" y="918.75" width="74.286" height="74.286" ry="9.2857" fill="url(#g)" stroke="url(#f)" stroke-width=".44291"/><path transform="matrix(.85722 0 0 .54844 4.3209 879.78)" d="m129.4 94.288c0 12.106-11.555 21.92-25.809 21.92-14.254 0-25.809-9.8141-25.809-21.92 0-12.106 11.555-21.92 25.809-21.92 14.254 0 25.809 9.8141 25.809 21.92z" fill="url(#b)" filter="url(#c)" opacity=".76327"/><path transform="matrix(.35623 0 0 .43954 96.878 941.41)" d="m129.4 94.288c0 12.106-11.555 21.92-25.809 21.92-14.254 0-25.809-9.8141-25.809-21.92 0-12.106 11.555-21.92 25.809-21.92 14.254 0 25.809 9.8141 25.809 21.92z" fill="url(#b)" filter="url(#c)" opacity=".76327"/><path transform="matrix(.87676 0 0 .87676 21.569 930.89)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path transform="matrix(.87676 0 0 .87676 65.569 930.89)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path transform="matrix(.87676 0 0 .87676 21.569 906.89)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path transform="matrix(.87676 0 0 .87676 65.569 906.89)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path transform="matrix(.87676 0 0 .87676 21.569 952.89)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path transform="matrix(.87676 0 0 .87676 65.569 952.89)" d="m80.964 28.527c0 4.491-3.6407 8.1317-8.1317 8.1317-4.491 0-8.1317-3.6407-8.1317-8.1317 0-4.491 3.6407-8.1317 8.1317-8.1317 4.491 0 8.1317 3.6407 8.1317 8.1317z" fill="url(#a)"/><path d="m78.326 956.68c-0.0243 0.23968-0.0238 0.4673-0.0238 0.7134 0 3.9375 3.1727 7.134 7.1102 7.134 3.9376 0 7.134-3.1964 7.134-7.134 0-0.2461 5.5e-4 -0.47372-0.0237-0.7134-0.39709 3.5615-3.4427 6.3255-7.1102 6.3255-3.6675 0-6.6894-2.7639-7.0864-6.3255z" fill="#fff"/><path d="m122.33 956.68c-0.0243 0.23968-0.0238 0.4673-0.0238 0.7134 0 3.9375 3.1727 7.134 7.1102 7.134 3.9376 0 7.134-3.1964 7.134-7.134 0-0.2461 5.5e-4 -0.47372-0.0237-0.7134-0.39709 3.5615-3.4427 6.3255-7.1102 6.3255-3.6675 0-6.6894-2.7639-7.0864-6.3255z" fill="#fff"/><path d="m122.33 978.68c-0.0243 0.23968-0.0238 0.4673-0.0238 0.7134 0 3.9375 3.1727 7.134 7.1102 7.134 3.9376 0 7.134-3.1964 7.134-7.134 0-0.2461 5.5e-4 -0.47372-0.0237-0.7134-0.39709 3.5615-3.4427 6.3255-7.1102 6.3255-3.6675 0-6.6894-2.7639-7.0864-6.3255z" fill="#fff"/><path d="m78.326 978.68c-0.0243 0.23968-0.0238 0.4673-0.0238 0.7134 0 3.9375 3.1727 7.134 7.1102 7.134 3.9376 0 7.134-3.1964 7.134-7.134 0-0.2461 5.5e-4 -0.47372-0.0237-0.7134-0.39709 3.5615-3.4427 6.3255-7.1102 6.3255-3.6675 0-6.6894-2.7639-7.0864-6.3255z" fill="#fff"/><path d="m78.326 932.68c-0.0243 0.23968-0.0238 0.4673-0.0238 0.7134 0 3.9375 3.1727 7.134 7.1102 7.134 3.9376 0 7.134-3.1964 7.134-7.134 0-0.2461 5.5e-4 -0.47372-0.0237-0.7134-0.39709 3.5615-3.4427 6.3255-7.1102 6.3255-3.6675 0-6.6894-2.7639-7.0864-6.3255z" fill="#fff"/><path d="m122.33 932.68c-0.0243 0.23968-0.0238 0.4673-0.0238 0.7134 0 3.9375 3.1727 7.134 7.1102 7.134 3.9376 0 7.134-3.1964 7.134-7.134 0-0.2461 5.5e-4 -0.47372-0.0237-0.7134-0.39709 3.5615-3.4427 6.3255-7.1102 6.3255-3.6675 0-6.6894-2.7639-7.0864-6.3255z" fill="#fff"/></g></g></svg>',
  ];

  constructor(props = {}) {
    Object.assign(this, props);
  }

  checkRange(pips, method) {
    let maxPip = this.svgFaces.length;
    if (pips < 1 || pips > maxPip) {
      throw new Error(`Error in D6.${method}() - pips must be integer between 1-${maxPip}, not ${pips}`);
    }
  }

  svgFace(pips=1) {
    this.checkRange(pips, 'svgFace');
    return this.svgFaces[pips-1];
  }

  base64Face(pips=1) {
    this.checkRange(pips, 'base64Face');
    let base64Face = Base64.encode(this.svgFace(pips));
    return Base64.encode(this.svgFace(pips));
  }

  /**
   * Returns result pips 1-6 (inclusive), svgFace, base64Face;
   * @returns {object}
   */
  roll() {
    let pips = roller.roll('1d6').total;
    return {
      pips: parseInt(pips, 10),
      svgFace: this.svgFace(pips),
      base64Face: this.base64Face(pips),
    };
  }
}
