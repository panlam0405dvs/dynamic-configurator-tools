import $ from "jquery";
import {getJson} from "./getJson";

export class MenuItem {
    constructor(id, active, name, category, structure, thumbUrl, images, subCategoryItems) {
        this.id = id;
        this.active = active;
        this.name = name;
        this.category = category;
        this.structure = structure;
        this.thumbUrl = thumbUrl;
        this.images = images;
        this.subCategoryItems = subCategoryItems;
    }

    buildMenuItem() {
        // console.log('id:', this.id);
        // console.log('active:', this.active);
        // console.log('name:', this.name);
        // console.log('category:', this.category);
        // console.log('structure:', this.structure);
        // console.log('thumbUrl:', this.thumbUrl);
        // console.log('images:', this.images);
        // console.log('subCategoryItems:', this.subCategoryItems);

        $(`#category-${this.category}`).append(this.buildHtml());

        this.reconstructMenuListener();

        if (this.active && this.subCategoryItems) {
            for (const item of this.subCategoryItems) {
                let menuItem = new MenuItem(item.id, item.active, item.name, item.category, item.structure, item.thumbUrl, item.images, item.subCategoryItems);
                menuItem.buildMenuItem();
            }
        }
    }

    buildHtml() {
        return `
            <div 
            class='menu-item ${this.active ? 'active ' : ''}${this.structure ? this.structure : ''}' 
            id='menu-item-${this.category}-${this.id}' 
            data-category='${this.category}'
            data-id='${this.id}'
            >
                ${this.thumbUrl ? `<img src=${this.thumbUrl}/>` : ''}
                ${this.name} 
            </div>
        `;
    }

    showDivsListener() {
        // document.querySelector(`#{this.id}`).addEventListener('click', /*showHideDivs*/);
    }


    reconstructMenuListener() {
        document.querySelector(`#menu-item-${this.category}-${this.id}`).addEventListener('click', function () {
            console.log('I was clicked', this);
            getJson(this.dataset.category, this.dataset.id).then(data => {
                new MenuItem(data.id, data.name, data.category, data.structure, data.thumbUrl, data.images, data.subCategoryItems);
            });
        });
    }
}

