import { ColorStyles } from '../../styles';

const IconDefaultColor = ColorStyles.validation.default.text;

export const IconIssueDraft = (
  color: string = IconDefaultColor
) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7886_139824)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.74902 0.0970175C7.57793 -0.0333157 8.42211 -0.0333157 9.25102 0.0970175C9.34833 0.112317 9.44167 0.146632 9.52572 0.198005C9.60977 0.249379 9.68287 0.316803 9.74086 0.396429C9.79885 0.476056 9.84059 0.566324 9.86369 0.662081C9.8868 0.757838 9.89082 0.857208 9.87552 0.954518C9.86022 1.05183 9.8259 1.14517 9.77453 1.22922C9.72316 1.31327 9.65573 1.38637 9.57611 1.44436C9.49648 1.50235 9.40621 1.54409 9.31045 1.56719C9.2147 1.5903 9.11533 1.59432 9.01802 1.57902C8.34349 1.47296 7.65654 1.47296 6.98202 1.57902C6.78549 1.60992 6.58474 1.56148 6.42393 1.44436C6.26312 1.32725 6.15542 1.15104 6.12452 0.954518C6.09362 0.757992 6.14206 0.557242 6.25917 0.396429C6.37629 0.235617 6.55249 0.127915 6.74902 0.0970175V0.0970175ZM4.34502 1.69302C4.46184 1.85379 4.51008 2.05435 4.47915 2.25066C4.44821 2.44697 4.34062 2.62297 4.18002 2.74002C3.62779 3.14191 3.14191 3.62779 2.74002 4.18002C2.62091 4.33531 2.44582 4.4379 2.25212 4.46587C2.05842 4.49385 1.86145 4.445 1.70327 4.32976C1.54509 4.21452 1.43822 4.04201 1.40547 3.84905C1.37273 3.6561 1.41671 3.45799 1.52802 3.29702C2.02171 2.61833 2.6186 2.0211 3.29702 1.52702C3.37672 1.46907 3.46705 1.42739 3.56287 1.40437C3.65868 1.38135 3.75809 1.37744 3.85542 1.39285C3.95274 1.40827 4.04608 1.44271 4.13008 1.49422C4.21409 1.54572 4.28713 1.61327 4.34502 1.69302V1.69302ZM11.655 1.69302C11.713 1.61335 11.7861 1.54589 11.8701 1.49448C11.9542 1.44307 12.0475 1.40872 12.1448 1.3934C12.2422 1.37807 12.3415 1.38208 12.4373 1.40518C12.5331 1.42827 12.6234 1.47002 12.703 1.52802C13.3817 2.02169 13.979 2.61858 14.473 3.29702C14.5901 3.458 14.6385 3.65891 14.6074 3.85554C14.5764 4.05218 14.4685 4.22842 14.3075 4.34552C14.1465 4.46261 13.9456 4.51096 13.749 4.47992C13.5524 4.44888 13.3761 4.341 13.259 4.18002C12.8574 3.62787 12.3719 3.14199 11.82 2.74002C11.6594 2.62297 11.5518 2.44697 11.5209 2.25066C11.49 2.05435 11.5382 1.85379 11.655 1.69302V1.69302ZM0.955018 6.12502C1.15136 6.15601 1.32737 6.26369 1.44438 6.42438C1.56138 6.58507 1.60981 6.78564 1.57902 6.98202C1.47296 7.65654 1.47296 8.34349 1.57902 9.01802C1.60992 9.21454 1.56148 9.41529 1.44436 9.57611C1.32725 9.73692 1.15104 9.84462 0.954518 9.87552C0.757992 9.90641 0.557242 9.85798 0.396429 9.74086C0.235617 9.62374 0.127915 9.44754 0.0970175 9.25102C-0.0333157 8.42211 -0.0333157 7.57793 0.0970175 6.74902C0.11236 6.6517 0.146726 6.55835 0.198154 6.47432C0.249581 6.39029 0.317061 6.31721 0.396739 6.25926C0.476417 6.20131 0.566732 6.15963 0.662523 6.1366C0.758314 6.11356 0.857705 6.10963 0.955018 6.12502V6.12502ZM15.045 6.12502C15.1423 6.10963 15.2417 6.11356 15.3375 6.1366C15.4333 6.15963 15.5236 6.20131 15.6033 6.25926C15.683 6.31721 15.7505 6.39029 15.8019 6.47432C15.8533 6.55835 15.8877 6.6517 15.903 6.74902C16.0333 7.57793 16.0333 8.42211 15.903 9.25102C15.8721 9.44754 15.7644 9.62374 15.6036 9.74086C15.4428 9.85798 15.242 9.90641 15.0455 9.87552C14.849 9.84462 14.6728 9.73692 14.5557 9.57611C14.4386 9.41529 14.3901 9.21454 14.421 9.01802C14.5271 8.3435 14.5271 7.65654 14.421 6.98202C14.3902 6.78564 14.4387 6.58507 14.5557 6.42438C14.6727 6.26369 14.8487 6.15601 15.045 6.12502V6.12502ZM1.69302 11.655C1.77266 11.597 1.86294 11.5553 1.95872 11.5322C2.05449 11.5091 2.15388 11.5051 2.2512 11.5204C2.34852 11.5357 2.44187 11.5701 2.52592 11.6215C2.60996 11.6729 2.68305 11.7404 2.74102 11.82C3.1426 12.3722 3.62815 12.858 4.18002 13.26C4.33531 13.3791 4.4379 13.5542 4.46587 13.7479C4.49385 13.9416 4.445 14.1386 4.32976 14.2968C4.21452 14.4549 4.04201 14.5618 3.84905 14.5946C3.6561 14.6273 3.45799 14.5833 3.29702 14.472C2.6183 13.9783 2.02107 13.3815 1.52702 12.703C1.46907 12.6233 1.42739 12.533 1.40437 12.4372C1.38135 12.3414 1.37744 12.2419 1.39285 12.1446C1.40827 12.0473 1.44271 11.954 1.49422 11.8699C1.54572 11.7859 1.61327 11.7129 1.69302 11.655V11.655ZM14.307 11.655C14.3867 11.713 14.4541 11.7861 14.5056 11.8701C14.557 11.9542 14.5913 12.0475 14.6066 12.1448C14.622 12.2422 14.618 12.3415 14.5949 12.4373C14.5718 12.5331 14.53 12.6234 14.472 12.703C13.9784 13.3818 13.3815 13.979 12.703 14.473C12.6233 14.531 12.533 14.5727 12.4371 14.5958C12.3413 14.6188 12.2419 14.6228 12.1445 14.6074C12.0471 14.5921 11.9537 14.5577 11.8697 14.5062C11.7856 14.4547 11.7125 14.3872 11.6545 14.3075C11.5965 14.2278 11.5548 14.1375 11.5318 14.0416C11.5087 13.9458 11.5047 13.8464 11.5201 13.749C11.5355 13.6516 11.5699 13.5582 11.6213 13.4742C11.6728 13.3901 11.7403 13.317 11.82 13.259C12.3722 12.8574 12.858 12.3719 13.26 11.82C13.3771 11.6594 13.5531 11.5518 13.7494 11.5209C13.9457 11.49 14.1462 11.5382 14.307 11.655V11.655ZM6.12502 15.045C6.15601 14.8487 6.26369 14.6727 6.42438 14.5557C6.58507 14.4387 6.78564 14.3902 6.98202 14.421C7.65654 14.5271 8.3435 14.5271 9.01802 14.421C9.11533 14.4057 9.2147 14.4097 9.31045 14.4328C9.40621 14.4559 9.49648 14.4977 9.57611 14.5557C9.65573 14.6137 9.72316 14.6868 9.77453 14.7708C9.8259 14.8549 9.86022 14.9482 9.87552 15.0455C9.89082 15.1428 9.8868 15.2422 9.86369 15.338C9.84059 15.4337 9.79885 15.524 9.74086 15.6036C9.68287 15.6832 9.60977 15.7507 9.52572 15.802C9.44167 15.8534 9.34833 15.8877 9.25102 15.903C8.42211 16.0333 7.57793 16.0333 6.74902 15.903C6.6517 15.8877 6.55835 15.8533 6.47432 15.8019C6.39029 15.7505 6.31721 15.683 6.25926 15.6033C6.20131 15.5236 6.15963 15.4333 6.1366 15.3375C6.11356 15.2417 6.10963 15.1423 6.12502 15.045V15.045Z" fill="${color}"/>
</g>
<defs>
<clipPath id="clip0_7886_139824">
<rect width="16" height="16" fill="${color}"/>
</clipPath>
</defs>
</svg>
`;

export const IconIssueOpened = (
  color: string = IconDefaultColor
) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8050_28258)">
<path d="M9.06066 9.06066C8.77936 9.34196 8.39782 9.5 8 9.5C7.60218 9.5 7.22064 9.34196 6.93934 9.06066C6.65804 8.77936 6.5 8.39782 6.5 8C6.5 7.60218 6.65804 7.22064 6.93934 6.93934C7.22064 6.65804 7.60218 6.5 8 6.5C8.39782 6.5 8.77936 6.65804 9.06066 6.93934C9.34196 7.22064 9.5 7.60218 9.5 8C9.5 8.39782 9.34196 8.77936 9.06066 9.06066Z" fill="${color}" style="fill:${color};fill:${color};fill-opacity:1;"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315ZM3.40381 3.40381C2.18482 4.62279 1.5 6.27609 1.5 8C1.5 9.72391 2.18482 11.3772 3.40381 12.5962C4.62279 13.8152 6.27609 14.5 8 14.5C9.72391 14.5 11.3772 13.8152 12.5962 12.5962C13.8152 11.3772 14.5 9.72391 14.5 8C14.5 6.27609 13.8152 4.62279 12.5962 3.40381C11.3772 2.18482 9.72391 1.5 8 1.5C6.27609 1.5 4.62279 2.18482 3.40381 3.40381Z" fill="${color}" style="fill:${color};fill:${color};fill-opacity:1;"/>
</g>
<defs>
<clipPath id="clip0_8050_28258">
<rect width="16" height="16" fill="${color}" style="fill:${color};fill:${color};fill-opacity:1;"/>
</clipPath>
</defs>
</svg>
`;

export const IconIssueClosed = (
  color: string = IconDefaultColor
) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8050_28297)">
<path d="M11.4812 6.25551C11.4846 6.44981 11.4125 6.63785 11.28 6.78003L7.78 10.28C7.63937 10.4205 7.44875 10.4994 7.25 10.4994C7.05125 10.4994 6.86062 10.4205 6.72 10.28L4.72 8.28003C4.58752 8.13785 4.5154 7.94981 4.51882 7.75551C4.52225 7.56121 4.60096 7.37582 4.73838 7.23841C4.87579 7.10099 5.06118 7.02228 5.25548 7.01885C5.44978 7.01543 5.63782 7.08755 5.78 7.22003L7.25 8.69003L10.22 5.72003C10.3622 5.58755 10.5502 5.51543 10.7445 5.51885C10.9388 5.52228 11.1242 5.60099 11.2616 5.73841C11.399 5.87582 11.4777 6.06121 11.4812 6.25551Z" fill="${color}" style="fill:${color};fill:${color};fill-opacity:1;"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569ZM12.5962 12.5962C13.8152 11.3772 14.5 9.72391 14.5 8C14.5 6.27609 13.8152 4.62279 12.5962 3.40381C11.3772 2.18482 9.72391 1.5 8 1.5C6.27609 1.5 4.62279 2.18482 3.40381 3.40381C2.18482 4.62279 1.5 6.27609 1.5 8C1.5 9.72391 2.18482 11.3772 3.40381 12.5962C4.62279 13.8152 6.27609 14.5 8 14.5C9.72391 14.5 11.3772 13.8152 12.5962 12.5962Z" fill="${color}" style="fill:${color};fill:${color};fill-opacity:1;"/>
</g>
<defs>
<clipPath id="clip0_8050_28297">
<rect width="16" height="16" fill="${color}" style="fill:${color};fill:${color};fill-opacity:1;"/>
</clipPath>
</defs>
</svg>
`;