class Pattern{
    constructor(w,h,tilesize,t1obj,t2obj,occurencerate=2){
        this.w =w;
        this.h=h;
        this.scalar = tilesize;
        this.myTiles = [];
        

         this.t1=t1obj.style;
         this.t2=t2obj.style;
         
         this.t1bg =t1obj.bg;
         this.t1hc = t1obj.hc;

         this.t2bg =t2obj.bg;
         this.t2hc = t2obj.hc;




        this.createTiles(occurencerate);

    }
    createTiles(maintyle,secondtile,occurencerate=2){
        var totaltiles = this.w*this.h;
        this.myTiles=[];



        let alternating = true;
        if (alternating){
            for (let i=0; i < totaltiles; i++){
                let newtile = new Tile(this.t1);
                newtile.bgcolor = this.t1bg;
                newtile.hightlightcolor = this.t1hc;
                if (i%occurencerate==0){
                    newtile = new Tile(this.t2);
                    newtile.bgcolor = this.t2bg;
                    newtile.hightlightcolor = this.t2hc;
                }
                this.myTiles.push(newtile);

            }
        }

    }
    show (x,y){
        for (let i=0;i<this.w;i++){
            for (let j=0; j<this.h;j++){
                var curdex = i+j*this.w;
                this.myTiles[curdex].show(x+i*this.scalar,y+j*this.scalar,this.scalar);
            }
        }

    }
}