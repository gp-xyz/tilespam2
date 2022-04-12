class Tile{
    constructor(tiletype='base'){
        this.p = tiletype;
        this.backupcolor = 'red';
        if (tiletype=='base')
        {
            this.hightlightcolor ='#fe938c' ;
            this.bgcolor ='#042a2b' ;
        }
        else if (tiletype=="fancy"){
            this.hightlightcolor ='#fe23ac' ;
            this.bgcolor ='#42a55b' ;
        }
        else if (tiletype=="faderangle"){
            this.hightlightcolor ='orange' ;
            this.bgcolor ='#ffffff' ;
        }
        else if (tiletype=="swan"){
            this.hightlightcolor ='orange' ;
            this.bgcolor ='#ffffff' ;
        }
        else if (tiletype=="lux"){
            this.hightlightcolor ='white' ;
            this.bgcolor ='lime' ;
        }
        else if (tiletype=="shadow"){
            this.hightlightcolor ='grey' ;
            this.bgcolor ='grey' ;
        }
        else if (tiletype=="swirl"){
            
            this.hightlightcolor ='red' ;
            this.bgcolor ='#42a55b';
            // print('come here',this);
        }
        else if (tiletype=="hexagon"){
            this.hightlightcolor ='blue' ;
            this.bgcolor ='white' ;
        }
        else if (tiletype=="pop"){
            this.hightlightcolor ='blue' ;
            this.bgcolor ='darkblue' ;
        }
        else if (tiletype=="doublecross"){
            this.hightlightcolor ='blue' ;
            this.bgcolor ='darkblue' ;
        }
        else if (tiletype=="hook"){
            this.hightlightcolor ='blue' ;
            this.bgcolor ='darkblue' ;
        }
        else if (tiletype=="lop"){
            this.hightlightcolor ='blue' ;
            this.bgcolor ='darkblue' ;
        }

    }
    show(x,y,scalar)
    {
        strokeWeight(2);
        // print(x,y,this);
        fill(this.bgcolor);
        noStroke();
        // stroke('lime');

        rect(x,y,scalar,scalar);
        if (this.p=='swan'){
            for (let i=0;i<scalar;i++){
                stroke(this.hightlightcolor);
                line(x+i,y-i,x+scalar-i,y+scalar-i);
            }
        }
        else if (this.p=='faderangle'){
            for (let i=0;i<scalar;i++){
                let newcolor = lerpColor(color(this.hightlightcolor),color(255),map(i*i,0,scalar*scalar,0,1));
                stroke(newcolor);
                line(x+i,y,x+scalar,y+scalar-i);
                line(x-i,y,x+scalar,y+scalar+i);
            }
        }
        else if(this.p=='lux'){
            // print('a');
            this.bevelme(x,y,scalar,1,'black',true,false);
        }
        else if(this.p=='shadow'){
            // print('a');
            this.bevelme(x,y,scalar,1,'white',false,true);
        }

        else if(this.p=='swirl'){
            // print('a');
            let initx = x+scalar/2;
            let inity = y + scalar/2;
            for (let i=0;i<360;i+=90){
                let r = scalar/5;

                stroke('black');
                strokeWeight(scalar/4.5);
                point(initx + sin(i)*r,inity + cos(i)*r);
                stroke(this.hightlightcolor);
                point(initx + sin(i)*r-2,inity + cos(i)*r-2);
     
           

            }
            let inof = 3;
            

            this.bevelme(x,y,scalar,sqrt(scalar)/2,color(233),false,true);
            this.bevelme(x,y,scalar,sqrt(scalar)/2,color(17),true,false);
        }
        else if(this.p=='doublecross'){
            // print('a');
            let initx = x+scalar/2;
            let inity = y + scalar/2;
            for (let i=0;i<360;i+=60){
                let r = scalar/2.5;
                stroke(this.hightlightcolor);
                strokeWeight(scalar/18);
                point(initx + sin(i)*r,inity + cos(i)*r);
                let voff=170;
                line(initx + sin(i)*r,inity + cos(i)*r,initx + sin(i+voff)*r,inity + cos(i+voff)*r);
            }
            this.bevelme(x,y,scalar,sqrt(scalar)/2,color(233),false,true);
            this.bevelme(x,y,scalar,sqrt(scalar)/2,color(17),true,false);
        }
        else if(this.p=='hexagon'){
            // print('a');
            let initx = x+scalar/2;
            let inity = y + scalar/2;
            for (let i=0;i<360;i+=60){
                let r = scalar/2;
                stroke(this.hightlightcolor);
                strokeWeight(scalar/18);
                point(initx + sin(i)*r,inity + cos(i)*r);
                let voff=60;
                line(initx + sin(i)*r,inity + cos(i)*r,initx + sin(i+voff)*r,inity + cos(i+voff)*r);
            }
            // this.bevelme(x,y,scalar,sqrt(scalar)/2,color(233),false,false);
            // this.bevelme(x,y,scalar,sqrt(scalar)/2,color(17),true,false);
        }
        else if(this.p=='hook'){
            // print('a');
            let initx = x+scalar/2;
            let inity = y + scalar/2;
            for (let i=0;i<180;i+=1){
                let r = scalar/2.43;
                stroke(this.hightlightcolor);
                strokeWeight(scalar/18);
                point(initx + sin(i)*r,inity + cos(i)*r);
                let voff=60;
                line(initx + sin(i)*r,inity + cos(i)*r,initx + sin(i+voff)*r,inity + cos(i+voff)*r);
            }
            // this.bevelme(x,y,scalar,sqrt(scalar)/2,color(233),false,false);
            // this.bevelme(x,y,scalar,sqrt(scalar)/2,color(17),true,false);
        }
        else if(this.p=='lop'){
            // print('a');
            let initx = x+scalar/2;
            let inity = y + scalar/2;
            for (let i=0;i<180;i+=60){
                let r = scalar/2;
                stroke(this.hightlightcolor);
                strokeWeight(scalar/18);
                point(initx + sin(i)*r,inity + cos(i)*r);
                let voff=60;
                line(initx + sin(i)*r,inity + cos(i)*r,initx + sin(i+voff)*r,inity + cos(i+voff)*r);
            }
            // this.bevelme(x,y,scalar,sqrt(scalar)/2,color(233),false,false);
            // this.bevelme(x,y,scalar,sqrt(scalar)/2,color(17),true,false);
        }

        else if(this.p=='pop'){

            let inof = 3;
            this.bevelme(x+inof,y+inof,scalar-inof**2,50,color(244,105),false,true);

            this.bevelme(x,y,scalar,sqrt(scalar),color(0,105),false,true);
            this.bevelme(x,y,scalar,sqrt(scalar),color(255,105),true,false);
        }
        

    
        
    }
    bevelme(x,y,scalar,bars=5,primcolor = 'white',fadeTop=true,fadebottom=true){
        strokeWeight(1);

        let coverageint = int(scalar*1);
        // let bars = sqrt(scalar)/2;
    
        for (let i=0;i<bars;i++){
            let lerpa = map(i,0,bars-1,0,1);

            if (fadeTop)
            {
                let curcolor = lerpColor(color(primcolor),color(this.bgcolor),lerpa);
                stroke(curcolor);
                line(x+i,y+i,x+i,y+scalar-i*2);
                
                line(x+i,y+i,x+scalar-i*2,y+i);
            }
            if (fadebottom){
                let curcolor2 = lerpColor(color(primcolor),color(this.bgcolor),lerpa);
                stroke(curcolor2);
                line(x+i,y+scalar-i,x+scalar-i-1,y+scalar-i-1);

                line(x+scalar-i,y+i,x+scalar-i-1,y+scalar-i-1);
                
                // line(x+i,y+i,x+scalar-i*2,y+i);
            }

        }

    }
}
