import { 
    mdiAlertBoxOutline, 
    mdiAlertCircleOutline, 
    mdiCancel, 
    mdiCheck, 
    mdiContentSaveEditOutline, 
    mdiHome, 
    mdiLockAlertOutline 
} from '@mdi/js';

export type ColorTypes = 
'primary' | 
'secondary' | 
'error' | 
'warning' | 
'success' | 
'disabled' |
'tooltip' |
'body' |
'title' |
'subtitle';

// make state handler for dark or mode (toggle)
// fetch mode state
// return mode to string

export function setTextColor( color: ColorTypes ) {
    return `var(--text-${ color })`;
}

export function setSolidBg( color: ColorTypes ) {
    return `var(--solid-bg-${ color })`;
}

export function setGradientBg( color: ColorTypes ) {
    return `var(--gradient-bg-${ color })`;
}

export function setTransparentBg( color: ColorTypes ) {
    return `var(--transparent-bg-${ color })`;
}

export function setStatusIcon( color: ColorTypes ) {
    switch( color ) {
        case 'body': return mdiHome;
        case 'primary': return mdiContentSaveEditOutline;
        case 'secondary': return mdiCancel;
        case 'error': return mdiAlertCircleOutline;
        case 'warning': return mdiAlertBoxOutline;
        case 'success': return mdiCheck;
        case 'disabled': return mdiLockAlertOutline;
    }
}

export function getSnackbarColor ( color: ColorTypes ) {
    return `var(--transparent-bg-${ color })`;
}