export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {
    return ({
        type: SHOW_MODAL,
        modal 
    })
};

export const hideModal = () => ({
    type: CLOSE_MODAL
});