import { ColorStyles } from '../../styles/styles';

const IconDefaultColor = ColorStyles.validation.default.text;

export const IconReload = (
  color: string = IconDefaultColor
) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9331 13.0409C19.7442 14.4809 19.167 15.8423 18.2632 16.9791C17.3595 18.1159 16.1633 18.9853 14.803 19.4939C13.4427 20.0026 11.9696 20.1314 10.5417 19.8665C9.1138 19.6016 7.78492 18.953 6.69761 17.9902C5.6103 17.0275 4.80557 15.7869 4.36973 14.4016C3.93389 13.0162 3.88338 11.5384 4.22362 10.1265C4.56385 8.71464 5.282 7.42202 6.30104 6.38728C7.32007 5.35254 8.60156 4.61471 10.0081 4.25292C13.9071 3.25292 17.9431 5.25992 19.4331 8.99992M20 4V9H15" stroke="${color}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const IconSettings = (
  color: string = IconDefaultColor
) => `<svg xmlns="http://www.w3.org/2000/svg" fill="${color}" viewBox="0 0 24 24" width="24" height="24">
  <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-1.5 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
  <path d="M12 1c.266 0 .532.009.797.028.763.055 1.345.617 1.512 1.304l.352 1.45c.019.078.09.171.225.221.247.089.49.19.728.302.13.061.246.044.315.002l1.275-.776c.603-.368 1.411-.353 1.99.147.402.349.78.726 1.128 1.129.501.578.515 1.386.147 1.99l-.776 1.274c-.042.069-.058.185.002.315.112.238.213.481.303.728.048.135.142.205.22.225l1.45.352c.687.167 1.249.749 1.303 1.512.038.531.038 1.063 0 1.594-.054.763-.616 1.345-1.303 1.512l-1.45.352c-.078.019-.171.09-.221.225-.089.248-.19.491-.302.728-.061.13-.044.246-.002.315l.776 1.275c.368.603.353 1.411-.147 1.99-.349.402-.726.78-1.129 1.128-.578.501-1.386.515-1.99.147l-1.274-.776c-.069-.042-.185-.058-.314.002a8.606 8.606 0 0 1-.729.303c-.135.048-.205.142-.225.22l-.352 1.45c-.167.687-.749 1.249-1.512 1.303-.531.038-1.063.038-1.594 0-.763-.054-1.345-.616-1.512-1.303l-.352-1.45c-.019-.078-.09-.171-.225-.221a8.138 8.138 0 0 1-.728-.302c-.13-.061-.246-.044-.315-.002l-1.275.776c-.603.368-1.411.353-1.99-.147-.402-.349-.78-.726-1.128-1.129-.501-.578-.515-1.386-.147-1.99l.776-1.274c.042-.069.058-.185-.002-.314a8.606 8.606 0 0 1-.303-.729c-.048-.135-.142-.205-.22-.225l-1.45-.352c-.687-.167-1.249-.749-1.304-1.512a11.158 11.158 0 0 1 0-1.594c.055-.763.617-1.345 1.304-1.512l1.45-.352c.078-.019.171-.09.221-.225.089-.248.19-.491.302-.728.061-.13.044-.246.002-.315l-.776-1.275c-.368-.603-.353-1.411.147-1.99.349-.402.726-.78 1.129-1.128.578-.501 1.386-.515 1.99-.147l1.274.776c.069.042.185.058.315-.002.238-.112.481-.213.728-.303.135-.048.205-.142.225-.22l.352-1.45c.167-.687.749-1.249 1.512-1.304C11.466 1.01 11.732 1 12 1Zm-.69 1.525c-.055.004-.135.05-.161.161l-.353 1.45a1.832 1.832 0 0 1-1.172 1.277 7.147 7.147 0 0 0-.6.249 1.833 1.833 0 0 1-1.734-.074l-1.274-.776c-.098-.06-.186-.036-.228 0a9.774 9.774 0 0 0-.976.976c-.036.042-.06.131 0 .228l.776 1.274c.314.529.342 1.18.074 1.734a7.147 7.147 0 0 0-.249.6 1.831 1.831 0 0 1-1.278 1.173l-1.45.351c-.11.027-.156.107-.16.162a9.63 9.63 0 0 0 0 1.38c.004.055.05.135.161.161l1.45.353a1.832 1.832 0 0 1 1.277 1.172c.074.204.157.404.249.6.268.553.24 1.204-.074 1.733l-.776 1.275c-.06.098-.036.186 0 .228.301.348.628.675.976.976.042.036.131.06.228 0l1.274-.776a1.83 1.83 0 0 1 1.734-.075c.196.093.396.176.6.25a1.831 1.831 0 0 1 1.173 1.278l.351 1.45c.027.11.107.156.162.16a9.63 9.63 0 0 0 1.38 0c.055-.004.135-.05.161-.161l.353-1.45a1.834 1.834 0 0 1 1.172-1.278 6.82 6.82 0 0 0 .6-.248 1.831 1.831 0 0 1 1.733.074l1.275.776c.098.06.186.036.228 0 .348-.301.675-.628.976-.976.036-.042.06-.131 0-.228l-.776-1.275a1.834 1.834 0 0 1-.075-1.733c.093-.196.176-.396.25-.6a1.831 1.831 0 0 1 1.278-1.173l1.45-.351c.11-.027.156-.107.16-.162a9.63 9.63 0 0 0 0-1.38c-.004-.055-.05-.135-.161-.161l-1.45-.353c-.626-.152-1.08-.625-1.278-1.172a6.576 6.576 0 0 0-.248-.6 1.833 1.833 0 0 1 .074-1.734l.776-1.274c.06-.098.036-.186 0-.228a9.774 9.774 0 0 0-.976-.976c-.042-.036-.131-.06-.228 0l-1.275.776a1.831 1.831 0 0 1-1.733.074 6.88 6.88 0 0 0-.6-.249 1.835 1.835 0 0 1-1.173-1.278l-.351-1.45c-.027-.11-.107-.156-.162-.16a9.63 9.63 0 0 0-1.38 0Z"></path>
</svg>`;

export const IconClose = (color: string = IconDefaultColor) => `<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="${color}"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>`;

export const IconLoader = (
  color: string = IconDefaultColor
) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12" stroke="${color}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const IconExternal = (
  color: string = IconDefaultColor
) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V12M11 13L20 4M20 4H15M20 4V9" stroke="${color}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const IconChevronUp = (
  color: string = IconDefaultColor
) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 15L12 9L18 15" stroke="${color}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const IconUnlink = (
  color: string = IconDefaultColor
) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 22V20M9 15L15 9M11 6.00006L11.463 5.46406C12.4008 4.52639 13.6727 3.99966 14.9989 3.99976C16.325 3.99985 17.5968 4.52676 18.5345 5.46456C19.4722 6.40237 19.9989 7.67425 19.9988 9.00042C19.9987 10.3266 19.4718 11.5984 18.534 12.5361L18 13.0001M12.9999 18L12.6029 18.534C11.6541 19.4722 10.3737 19.9984 9.0394 19.9984C7.70511 19.9984 6.42465 19.4722 5.4759 18.534C5.00825 18.0716 4.63699 17.521 4.38361 16.9141C4.13023 16.3073 3.99976 15.6561 3.99976 14.9985C3.99976 14.3408 4.13023 13.6897 4.38361 13.0829C4.63699 12.476 5.00825 11.9254 5.4759 11.463L5.9999 11M20 17H22M2 7H4M7 2V4" stroke="${color}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const IconLink = (
  color: string = IconDefaultColor
) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 15L15 9M11 6.00006L11.463 5.46406C12.4008 4.52639 13.6727 3.99966 14.9989 3.99976C16.325 3.99985 17.5968 4.52676 18.5345 5.46456C19.4722 6.40237 19.9989 7.67425 19.9988 9.00042C19.9987 10.3266 19.4718 11.5984 18.534 12.5361L18 13.0001M12.9999 18L12.6029 18.534C11.6541 19.4722 10.3737 19.9984 9.0394 19.9984C7.70511 19.9984 6.42465 19.4722 5.4759 18.534C5.00825 18.0716 4.63699 17.521 4.38361 16.9141C4.13023 16.3073 3.99976 15.6561 3.99976 14.9985C3.99976 14.3408 4.13023 13.6897 4.38361 13.0829C4.63699 12.476 5.00825 11.9254 5.4759 11.463L5.9999 11" stroke="${color}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export const IconGithub = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0095 1C5.64505 1 0.5 6.04165 0.5 12.2788C0.5 17.2646 3.79661 21.4849 8.36988 22.9786C8.94166 23.0909 9.1511 22.7359 9.1511 22.4373C9.1511 22.1758 9.13225 21.2796 9.13225 20.3457C5.93059 21.0181 5.26387 19.0012 5.26387 19.0012C4.74934 17.694 3.98697 17.3581 3.98697 17.3581C2.93906 16.6671 4.0633 16.6671 4.0633 16.6671C5.2257 16.7419 5.83564 17.8249 5.83564 17.8249C6.86446 19.5427 8.52231 19.0573 9.18927 18.7585C9.28445 18.0302 9.58953 17.5261 9.91347 17.246C7.35991 16.9845 4.67324 16.0136 4.67324 11.6812C4.67324 10.4487 5.13029 9.4404 5.85449 8.6562C5.74023 8.37616 5.33996 7.21818 5.96899 5.66833C5.96899 5.66833 6.9408 5.3695 9.13202 6.82608C10.0702 6.57919 11.0376 6.4536 12.0095 6.45254C12.9813 6.45254 13.972 6.58339 14.8868 6.82608C17.0782 5.3695 18.05 5.66833 18.05 5.66833C18.6791 7.21818 18.2786 8.37616 18.1643 8.6562C18.9076 9.4404 19.3458 10.4487 19.3458 11.6812C19.3458 16.0136 16.6591 16.9657 14.0865 17.246C14.5058 17.6008 14.8677 18.2729 14.8677 19.3374C14.8677 20.8499 14.8488 22.0638 14.8488 22.4371C14.8488 22.7359 15.0585 23.0909 15.6301 22.9788C20.2033 21.4847 23.4999 17.2646 23.4999 12.2788C23.5188 6.04165 18.3549 1 12.0095 1Z" fill="${ColorStyles.validation.inverted.text}"/>
</svg>`;

export const IconProjects = (
  color: string = IconDefaultColor
) => `<svg xmlns="http://www.w3.org/2000/svg" fill="${color}" viewBox="0 0 24 24" width="24" height="24">
  <path d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25ZM9 9v11.5h11.25a.25.25 0 0 0 .25-.25V9Zm11.5-1.5V3.75a.25.25 0 0 0-.25-.25H9v4ZM3.5 9v11.25c0 .138.112.25.25.25H7.5V9Zm4-1.5v-4H3.75a.25.25 0 0 0-.25.25V7.5Z">
  </path>
</svg>`;

export const IconMilestone = (color: string = IconDefaultColor) =>
  `<svg xmlns="http://www.w3.org/2000/svg" fill="${color}" viewBox="0 0 24 24" width="24" height="24">
  <path d="M11.75 1a.75.75 0 0 1 .75.75V4h6.532c.42 0 .826.15 1.143.425l3.187 2.75a1.75 1.75 0 0 1 0 2.65l-3.187 2.75a1.75 1.75 0 0 1-1.143.425H12.5v9.25a.75.75 0 0 1-1.5 0V13H3.75A1.75 1.75 0 0 1 2 11.25v-5.5C2 4.783 2.784 4 3.75 4H11V1.75a.75.75 0 0 1 .75-.75Zm7.282 4.5H3.75a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h15.282c.06 0 .118-.021.163-.06l3.188-2.75a.248.248 0 0 0 0-.38l-3.188-2.75a.249.249 0 0 0-.163-.06Z">
  </path>
</svg>`;
