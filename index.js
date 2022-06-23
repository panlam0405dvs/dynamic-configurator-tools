
import {getJson} from "./getJson";
import {MenuItem} from "./MenuItemsClass";

module.exports =  async function () {
    let firstFetch = await getJson();
    console.log('firstFetch:',firstFetch);
    firstFetch.forEach( el =>{
        let menuItem = new MenuItem(el.id, el.active, el.name, el.category, el.structure, el.thumbUrl, el.images, el.subCategoryItems);
        menuItem.buildMenuItem();
    });
};
