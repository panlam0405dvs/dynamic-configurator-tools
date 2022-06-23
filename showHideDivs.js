const DIV_IMAGES_PREFIX = "dynaconf_im_";

export function showHideDivs(show, divsArray, speedMilisecs, addHiddenClassOnHide, removeHiddenClassOnShow) {
    let divObjPrefixId = `#${DIV_IMAGES_PREFIX}`;
    if (show) {
        divsArray.forEach(div => {
            let element = divObjPrefixId + div;
            if (!$(element).hasClass('div-hidden') || removeHiddenClassOnShow) {
                $(element).fadeIn(speedMilisecs);

                /*
                * SessionImageInfo.forEach( img =>{
                *   img.div_name === div ? img.show = show : '';
                * })
                * */
                if (removeHiddenClassOnShow) {
                    $(element).removeClass('mcc-hidden');
                }
            }
        });
    } else {
        divsArray.forEach(div => {
            let element = divObjPrefixId + div;
            if (removeHiddenClassOnShow) $(element).removeClass('div-hidden');
            else {
                $(element).fadeOut(speedMilisecs);
                if (addHiddenClassOnHide) $(element).addClass('div-hidden');
            }
            /*
                * SessionImageInfo.forEach( img =>{
                *   img.div_name === div ? img.show = show : '';
                * })
                * */
        });


    }

}

