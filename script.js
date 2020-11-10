function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.createsElements = function(){
    if(this.selector[0]=='.'){
       console.log('class="block"');
    };
    if(this.selector[0]=='#'){
       console.log('id ="best"');
    };
    
};

DomElement2.style.cssText = `
    height: ${this.height}; 
    width: ${this.width}; 
    background: ${this.bg}; 
    font-size: ${this.fontSize};
    `;


let DomElement2 = new DomElement('.block','35px','100px','#eee','15px');
DomElement2.createsElements();

