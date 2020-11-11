function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.createElements = function(){
    let block;
    console.log(this.selector[0]);
    if(this.selector[0]=='.'){
       console.log('class="block"');
       block = document.createElement('div');
             block.textcontent='hello';
      
        block.style.cssText = `
            height: ${this.height}; 
            width: ${this.width}; 
            background: ${this.bg}; 
            font-size: ${this.fontSize};
            `;
        document.body.append(block);
    };
    
    if(this.selector[0]=='#'){
      block = document.createElement('p');
      block.textcontent='hello';
      
    block.style.cssText = `
        height: ${this.height}; 
        width: ${this.width}; 
        background: ${this.bg}; 
        font-size: ${this.fontSize};
        `;
      document.body.append(block);
    };
    
};



let DomElement2 = new DomElement('#block','35px','100px','#eee','15px');
DomElement2.createElements();

let DomElement3 = new DomElement('.block','65px','50px','green','14px');
DomElement2.createElements();
