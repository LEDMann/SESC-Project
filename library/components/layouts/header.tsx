// import React, { Fragment } from "react";
import { Book, User } from "lucide-react";
import { Button } from "../elements/button";
import { Dark_Mode_Toggle } from "../elements/dark-mode-toggle";
import { BookmanagePopover } from "../elements/BookManagePopover";
import Link from "next/link";
// import { Combobox, Popover, Tab } from '@headlessui/react'

export function Header() {
    return (
        <>
            <div className="flex gap-8 items-center flex-shrink-0">
                <svg aria-hidden="true" width="0" height="0">
                    <defs>
                        <clipPath id="ces-books-icon">
                            <path transform="matrix(1.6,0,0,1.6,0,-48)" d="M 8.386 38.473 C 9.254 38.473 9.98 37.746 9.98 36.878 C 9.98 36.011 9.254 35.281 8.386 35.281 C 7.519 35.281 6.792 36.011 6.792 36.878 C 6.792 37.746 7.519 38.473 8.386 38.473 Z M 7.519 49.744 C 7.519 49.985 7.728 50.196 7.972 50.196 C 8.213 50.196 8.421 49.985 8.421 49.744 C 8.421 49.5 8.213 49.293 7.972 49.293 C 7.728 49.293 7.519 49.5 7.519 49.744 Z M 10.711 40.485 C 11.091 40.485 11.368 40.172 11.368 39.825 C 11.368 39.442 11.058 39.166 10.711 39.166 C 10.329 39.166 10.051 39.478 10.051 39.825 C 10.051 40.172 10.329 40.485 10.711 40.485 Z M 5.474 46.484 C 6.342 46.484 7.069 45.757 7.069 44.89 C 7.069 44.022 6.342 43.295 5.474 43.295 C 4.607 43.295 3.877 44.022 3.877 44.89 C 3.912 45.757 4.607 46.484 5.474 46.484 Z M 3.185 42.74 C 3.567 42.74 3.845 42.427 3.845 42.08 C 3.845 41.697 3.532 41.42 3.185 41.42 C 2.803 41.42 2.525 41.733 2.525 42.08 C 2.525 42.462 2.803 42.74 3.185 42.74 Z M 2.942 44.194 C 2.942 43.952 2.734 43.744 2.489 43.744 C 2.248 43.744 2.04 43.952 2.04 44.194 C 2.04 44.437 2.248 44.646 2.489 44.646 C 2.734 44.646 2.942 44.437 2.942 44.194 Z M 5.057 40.45 C 5.682 40.45 6.166 39.965 6.166 39.34 C 6.166 38.715 5.682 38.23 5.057 38.23 C 4.432 38.23 3.948 38.715 3.948 39.34 C 3.948 39.965 4.432 40.45 5.057 40.45 Z M 18.549 34.346 C 18.793 34.346 18.999 34.138 18.999 33.893 C 18.999 33.652 18.793 33.444 18.549 33.444 C 18.304 33.444 18.096 33.652 18.096 33.893 C 18.096 34.138 18.304 34.346 18.549 34.346 Z M 6.409 49.571 C 6.409 48.496 5.542 47.629 4.467 47.629 C 3.392 47.629 2.525 48.496 2.525 49.571 C 2.525 50.646 3.392 51.513 4.467 51.513 C 5.542 51.513 6.409 50.646 6.409 49.571 Z M 25.866 41.384 C 26.733 41.384 27.464 40.658 27.464 39.79 C 27.464 38.923 26.733 38.195 25.866 38.195 C 24.998 38.195 24.271 38.923 24.271 39.79 C 24.271 40.658 24.966 41.384 25.866 41.384 Z M 22.293 52.346 C 22.293 52.97 22.779 53.456 23.403 53.456 C 24.028 53.456 24.513 52.97 24.513 52.346 C 24.513 51.72 24.028 51.235 23.403 51.235 C 22.779 51.235 22.293 51.72 22.293 52.346 Z M 23.403 37.57 C 24.028 37.57 24.513 37.086 24.513 36.46 C 24.513 35.836 24.028 35.352 23.403 35.352 C 22.779 35.352 22.293 35.836 22.293 36.46 C 22.293 37.086 22.779 37.57 23.403 37.57 Z M 20.942 40.45 C 21.567 40.45 22.052 39.965 22.052 39.34 C 22.052 38.715 21.567 38.23 20.942 38.23 C 20.317 38.23 19.831 38.715 19.831 39.34 C 19.831 39.965 20.317 40.45 20.942 40.45 Z M 24.93 44.37 C 24.93 45.445 25.798 46.312 26.873 46.312 C 27.948 46.312 28.815 45.445 28.815 44.37 C 28.815 43.295 27.948 42.427 26.873 42.427 C 25.798 42.427 24.93 43.295 24.93 44.37 Z M 23.821 44.194 C 23.821 43.952 23.611 43.744 23.368 43.744 C 23.127 43.744 22.919 43.952 22.919 44.194 C 22.919 44.437 23.127 44.646 23.368 44.646 C 23.611 44.646 23.821 44.437 23.821 44.194 Z M 20.629 35.214 C 21.012 35.214 21.289 34.9 21.289 34.553 C 21.289 34.206 20.977 33.893 20.629 33.893 C 20.249 33.893 19.971 34.206 19.971 34.553 C 19.971 34.9 20.282 35.214 20.629 35.214 Z M 22.711 42.74 C 23.091 42.74 23.368 42.427 23.368 42.08 C 23.368 41.697 23.056 41.42 22.711 41.42 C 22.364 41.42 22.052 41.733 22.052 42.08 C 22.052 42.462 22.364 42.74 22.711 42.74 Z M 9.047 41.595 C 9.047 40.969 8.562 40.485 7.936 40.485 C 7.312 40.485 6.826 40.969 6.826 41.595 C 6.826 42.217 7.312 42.704 7.936 42.704 C 8.562 42.704 9.047 42.217 9.047 41.595 Z M 20.629 53.456 C 20.249 53.456 19.971 53.768 19.971 54.115 C 19.971 54.494 20.282 54.772 20.629 54.772 C 21.012 54.772 21.289 54.46 21.289 54.115 C 21.289 53.768 21.012 53.456 20.629 53.456 Z M 18.375 56.125 C 17.3 56.125 16.432 56.992 16.432 58.066 C 16.432 59.144 17.3 60.009 18.375 60.009 C 19.45 60.009 20.317 59.144 20.317 58.066 C 20.317 56.992 19.45 56.125 18.375 56.125 Z M 22.954 55.467 C 22.087 55.467 21.359 56.195 21.359 57.062 C 21.359 57.929 22.087 58.656 22.954 58.656 C 23.821 58.656 24.548 57.929 24.548 57.062 C 24.548 56.195 23.821 55.467 22.954 55.467 Z M 18.096 54.772 C 18.096 55.014 18.304 55.224 18.549 55.224 C 18.793 55.224 18.999 55.014 18.999 54.772 C 18.999 54.53 18.793 54.323 18.549 54.323 C 18.304 54.357 18.096 54.53 18.096 54.772 Z M 28.85 49.293 C 28.605 49.293 28.397 49.5 28.397 49.744 C 28.397 49.985 28.605 50.196 28.85 50.196 C 29.093 50.196 29.3 49.985 29.3 49.744 C 29.3 49.5 29.057 49.293 28.85 49.293 Z M 28.154 51.2 C 27.773 51.2 27.495 51.513 27.495 51.861 C 27.495 52.24 27.807 52.518 28.154 52.518 C 28.538 52.518 28.815 52.208 28.815 51.861 C 28.815 51.479 28.538 51.2 28.154 51.2 Z M 17.647 38.473 C 18.514 38.473 19.242 37.746 19.242 36.878 C 19.242 36.011 18.514 35.281 17.647 35.281 C 16.78 35.281 16.052 36.011 16.052 36.878 C 16.052 37.746 16.78 38.473 17.647 38.473 Z M 25.866 47.456 C 24.998 47.456 24.271 48.184 24.271 49.051 C 24.271 49.918 24.998 50.646 25.866 50.646 C 26.733 50.646 27.464 49.918 27.464 49.051 C 27.428 48.184 26.733 47.456 25.866 47.456 Z M 5.474 52.553 C 4.607 52.553 3.877 53.283 3.877 54.15 C 3.877 55.014 4.607 55.744 5.474 55.744 C 6.342 55.744 7.069 55.014 7.069 54.15 C 7.069 53.283 6.374 52.553 5.474 52.553 Z M 26.283 53.49 C 25.658 53.49 25.174 53.975 25.174 54.6 C 25.174 55.224 25.658 55.711 26.283 55.711 C 26.908 55.711 27.393 55.224 27.393 54.6 C 27.393 53.975 26.908 53.49 26.283 53.49 Z M 8.629 51.2 C 8.248 51.2 7.972 51.513 7.972 51.861 C 7.972 52.24 8.284 52.518 8.629 52.518 C 8.976 52.518 9.288 52.208 9.288 51.861 C 9.288 51.479 8.976 51.2 8.629 51.2 Z M 10.398 53.49 C 9.773 53.49 9.288 53.975 9.288 54.6 C 9.288 55.224 9.773 55.711 10.398 55.711 C 11.023 55.711 11.507 55.224 11.507 54.6 C 11.507 53.975 11.023 53.49 10.398 53.49 Z M 10.711 58.726 C 10.329 58.726 10.051 59.038 10.051 59.386 C 10.051 59.731 10.364 60.045 10.711 60.045 C 11.091 60.045 11.368 59.731 11.368 59.386 C 11.368 59.038 11.058 58.726 10.711 58.726 Z M 7.936 56.37 C 7.312 56.37 6.826 56.854 6.826 57.479 C 6.826 58.102 7.312 58.589 7.936 58.589 C 8.562 58.589 9.047 58.102 9.047 57.479 C 9.047 56.854 8.562 56.37 7.936 56.37 Z M 12.375 39.166 C 12.375 39.41 12.582 39.617 12.826 39.617 C 13.068 39.617 13.278 39.41 13.278 39.166 C 13.278 38.923 13.068 38.715 12.826 38.715 C 12.548 38.715 12.375 38.923 12.375 39.166 Z M 14.908 35.836 C 14.908 34.761 14.041 33.893 12.966 33.893 C 11.891 33.893 11.023 34.761 11.023 35.836 C 11.023 36.913 11.891 37.778 12.966 37.778 C 14.041 37.813 14.908 36.946 14.908 35.836 Z M 12.79 59.593 C 12.548 59.593 12.341 59.801 12.341 60.045 C 12.341 60.286 12.548 60.497 12.79 60.497 C 13.034 60.497 13.242 60.286 13.242 60.045 C 13.242 59.801 13.034 59.593 12.79 59.593 Z M 13.693 55.467 C 12.826 55.467 12.098 56.195 12.098 57.062 C 12.098 57.929 12.826 58.656 13.693 58.656 C 14.561 58.656 15.288 57.929 15.288 57.062 C 15.288 56.195 14.561 55.467 13.693 55.467 Z"/>
                            <path transform="matrix(2.1,0,0,2.1,-15,-73)" d="M 38.489 49.163 L 40.245 49.721 C 39.976 50.698 39.528 51.421 38.903 51.898 C 38.276 52.37 37.483 52.611 36.522 52.611 C 35.332 52.611 34.354 52.204 33.589 51.392 C 32.822 50.575 32.442 49.463 32.442 48.056 C 32.442 46.564 32.827 45.405 33.597 44.584 C 34.362 43.757 35.376 43.345 36.63 43.345 C 37.726 43.345 38.619 43.67 39.303 44.317 C 39.708 44.701 40.013 45.25 40.223 45.969 L 38.428 46.396 C 38.321 45.931 38.103 45.564 37.766 45.296 C 37.426 45.027 37.019 44.894 36.539 44.894 C 35.874 44.894 35.336 45.129 34.926 45.604 C 34.511 46.082 34.304 46.854 34.304 47.923 C 34.304 49.056 34.508 49.861 34.914 50.343 C 35.319 50.823 35.851 51.065 36.506 51.065 C 36.984 51.065 37.398 50.913 37.745 50.609 C 38.09 50.299 38.34 49.816 38.489 49.163 Z M 41.794 52.456 L 41.794 43.497 L 48.434 43.497 L 48.434 45.014 L 43.6 45.014 L 43.6 47 L 48.099 47 L 48.099 48.511 L 43.6 48.511 L 43.6 50.948 L 48.606 50.948 L 48.606 52.456 L 41.794 52.456 Z M 49.686 49.543 L 51.443 49.374 C 51.546 49.963 51.761 50.396 52.089 50.676 C 52.411 50.948 52.848 51.089 53.4 51.089 C 53.981 51.089 54.418 50.963 54.715 50.715 C 55.013 50.473 55.162 50.181 55.162 49.854 C 55.162 49.64 55.1 49.46 54.972 49.31 C 54.848 49.163 54.63 49.036 54.319 48.926 C 54.111 48.853 53.626 48.723 52.872 48.536 C 51.905 48.291 51.224 48 50.83 47.648 C 50.279 47.154 50.007 46.551 50.007 45.844 C 50.007 45.387 50.136 44.958 50.398 44.564 C 50.656 44.166 51.026 43.865 51.516 43.657 C 51.998 43.447 52.588 43.345 53.275 43.345 C 54.403 43.345 55.248 43.592 55.817 44.082 C 56.383 44.577 56.677 45.234 56.71 46.059 L 54.902 46.137 C 54.823 45.677 54.656 45.347 54.405 45.144 C 54.148 44.942 53.768 44.845 53.261 44.845 C 52.73 44.845 52.323 44.947 52.026 45.166 C 51.831 45.302 51.741 45.486 51.741 45.721 C 51.741 45.934 51.825 46.113 52.005 46.266 C 52.231 46.457 52.788 46.657 53.668 46.867 C 54.547 47.071 55.199 47.285 55.622 47.509 C 56.041 47.728 56.37 48.034 56.612 48.421 C 56.845 48.806 56.97 49.281 56.97 49.848 C 56.97 50.361 56.823 50.844 56.54 51.293 C 56.252 51.737 55.85 52.071 55.33 52.288 C 54.805 52.507 54.152 52.617 53.381 52.617 C 52.248 52.617 51.376 52.355 50.774 51.83 C 50.161 51.308 49.803 50.547 49.686 49.543 Z M 61.967 43.497 L 65.543 43.497 C 66.251 43.497 66.78 43.524 67.133 43.589 C 67.483 43.644 67.795 43.772 68.067 43.96 C 68.34 44.144 68.568 44.394 68.755 44.707 C 68.937 45.02 69.03 45.367 69.03 45.754 C 69.03 46.171 68.918 46.554 68.687 46.907 C 68.463 47.259 68.155 47.52 67.77 47.699 C 68.318 47.854 68.737 48.128 69.03 48.511 C 69.322 48.893 69.473 49.343 69.473 49.861 C 69.473 50.266 69.372 50.664 69.185 51.051 C 68.993 51.433 68.737 51.743 68.408 51.97 C 68.08 52.198 67.678 52.337 67.196 52.395 C 66.895 52.427 66.165 52.45 65.016 52.456 L 61.967 52.456 L 61.967 43.497 Z M 63.773 44.992 L 63.773 47.058 L 64.958 47.058 C 65.663 47.058 66.098 47.052 66.273 47.034 C 66.58 46.991 66.826 46.884 67.003 46.706 C 67.18 46.534 67.271 46.301 67.271 46.014 C 67.271 45.732 67.193 45.509 67.038 45.334 C 66.886 45.164 66.66 45.06 66.361 45.02 C 66.178 44.999 65.666 44.992 64.813 44.992 L 63.773 44.992 Z M 63.773 48.554 L 63.773 50.948 L 65.446 50.948 C 66.096 50.948 66.51 50.928 66.693 50.894 C 66.955 50.844 67.175 50.726 67.348 50.535 C 67.512 50.346 67.598 50.094 67.598 49.775 C 67.598 49.505 67.533 49.279 67.404 49.091 C 67.271 48.903 67.083 48.763 66.837 48.679 C 66.588 48.593 66.058 48.554 65.233 48.554 L 63.773 48.554 Z M 70.589 49.122 C 70.589 48.551 70.729 47.994 71.012 47.463 C 71.295 46.932 71.692 46.524 72.209 46.244 C 72.722 45.965 73.297 45.819 73.935 45.819 C 74.914 45.819 75.718 46.137 76.347 46.779 C 76.973 47.412 77.291 48.218 77.291 49.196 C 77.291 50.173 76.973 50.986 76.338 51.635 C 75.704 52.283 74.906 52.604 73.946 52.604 C 73.349 52.604 72.785 52.47 72.244 52.198 C 71.704 51.93 71.295 51.533 71.012 51.018 C 70.729 50.498 70.589 49.863 70.589 49.122 Z M 72.349 49.211 C 72.349 49.854 72.502 50.346 72.807 50.69 C 73.114 51.033 73.494 51.208 73.937 51.208 C 74.384 51.208 74.764 51.033 75.069 50.69 C 75.369 50.346 75.521 49.848 75.521 49.199 C 75.521 48.561 75.369 48.074 75.069 47.734 C 74.764 47.389 74.384 47.221 73.937 47.221 C 73.494 47.221 73.114 47.389 72.807 47.734 C 72.502 48.074 72.349 48.567 72.349 49.211 Z M 78.234 49.122 C 78.234 48.551 78.378 47.994 78.658 47.463 C 78.941 46.932 79.333 46.524 79.851 46.244 C 80.368 45.965 80.94 45.819 81.583 45.819 C 82.558 45.819 83.362 46.137 83.993 46.779 C 84.616 47.412 84.935 48.218 84.935 49.196 C 84.935 50.173 84.616 50.986 83.984 51.635 C 83.353 52.283 82.555 52.604 81.59 52.604 C 80.997 52.604 80.431 52.47 79.888 52.198 C 79.35 51.93 78.941 51.533 78.658 51.018 C 78.378 50.498 78.234 49.863 78.234 49.122 Z M 79.997 49.211 C 79.997 49.854 80.151 50.346 80.453 50.69 C 80.758 51.033 81.138 51.208 81.586 51.208 C 82.028 51.208 82.408 51.033 82.713 50.69 C 83.015 50.346 83.17 49.848 83.17 49.199 C 83.17 48.561 83.015 48.074 82.713 47.734 C 82.408 47.389 82.028 47.221 81.586 47.221 C 81.138 47.221 80.758 47.389 80.453 47.734 C 80.151 48.074 79.997 48.567 79.997 49.211 Z M 86.217 52.456 L 86.217 43.497 L 87.936 43.497 L 87.936 48.253 L 89.947 45.969 L 92.061 45.969 L 89.845 48.338 L 92.216 52.456 L 90.366 52.456 L 88.736 49.543 L 87.936 50.38 L 87.936 52.456 L 86.217 52.456 Z M 92.63 50.609 L 94.353 50.343 C 94.423 50.677 94.573 50.93 94.801 51.103 C 95.022 51.277 95.334 51.363 95.743 51.363 C 96.183 51.363 96.515 51.281 96.743 51.117 C 96.892 51 96.973 50.85 96.973 50.664 C 96.973 50.529 96.927 50.423 96.845 50.339 C 96.757 50.255 96.573 50.181 96.275 50.111 C 94.885 49.806 94.006 49.523 93.636 49.273 C 93.121 48.921 92.868 48.438 92.868 47.816 C 92.868 47.254 93.088 46.779 93.535 46.396 C 93.975 46.014 94.668 45.819 95.603 45.819 C 96.487 45.819 97.144 45.966 97.58 46.254 C 98.01 46.547 98.309 46.969 98.472 47.536 L 96.855 47.839 C 96.781 47.586 96.648 47.389 96.458 47.257 C 96.263 47.121 95.987 47.056 95.628 47.056 C 95.175 47.056 94.855 47.119 94.658 47.244 C 94.525 47.334 94.465 47.452 94.465 47.591 C 94.465 47.713 94.517 47.818 94.635 47.906 C 94.788 48.018 95.322 48.179 96.239 48.385 C 97.155 48.593 97.792 48.846 98.153 49.153 C 98.512 49.459 98.692 49.878 98.692 50.428 C 98.692 51.023 98.442 51.531 97.947 51.963 C 97.447 52.387 96.71 52.604 95.743 52.604 C 94.858 52.604 94.157 52.427 93.641 52.065 C 93.123 51.706 92.785 51.22 92.63 50.609 Z" />
                        </clipPath>
                    </defs>
                </svg>
                <Link className="icon-a pr-4" href="/">
                    <div className="icon-div svg-clip-container w-48 h-14" >
                        <span />
                    </div>
                </Link>
                <Link href="/library" className="w-24 h-14 transition-colors duration-200 hover:bg-slate-300 dark:hover:bg-slate-800 rounded-lg flex items-center">
                    <span className="text-lg text-slate-800 dark:text-slate-200 w-full text-center">
                        Library
                    </span>
                </Link>
                <Link href="/owned" className="w-24 h-14 transition-colors duration-200  hover:bg-slate-300 dark:hover:bg-slate-800 rounded-lg flex items-center">
                    <span className="text-lg text-slate-800 dark:text-slate-200 w-full text-center">
                        Owned
                    </span>
                </Link>
                <BookmanagePopover />
            </div>
            <div className="flex gap-6 px-4 items-center flex-shrink-0">
                <Dark_Mode_Toggle />
                <Link href="/login">
                    <Button background="default" size="icon">
                        <User className="text-slate-900 dark:text-slate-200"/>
                    </Button>
                </Link>
            </div>
        </>
    )
}