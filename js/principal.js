/**
 * Nombre: "Proyecto final integrador"
 * Realizado por: Mirian Yolanda Gonzalez
 * 
 */
do {
    var images=['data:image/bmp;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAeCAYAAACrI9dtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFySURBVFhH7ZaBcYMwDAA7JTMwAiMwAjOwAiswAiswg3tP0DUVkmxacNK7/h1HYoj0SLbJR3pD/qVK+RtS0zSlruu28x3M87wdxOdscZBqmiYty7J/uxZEiD+O43YMw5D6vt+vfnGQ4sY74EHpwLqu+8gDpPTYNykuWuZXIJXR0EI9fqjUXVIk9qaFzvmrSvH0uvQeUdxQCs5IcW/povix1NlK0ZIqlWrb1t0/NASrIuWtEgsegH0nR9QB2p9dfQQgUUkFCFZ6rydFEfTb4yAF8qrJJSOgFVQTVYpxnceUAqmCt7oIhLi0O/cAkZTGlQIRs5LKOBAYuQgrufe7UEqgIkxqgnDofxFStaiNlpQ3RYqkBALIoWEbQdwTo6rPU8GrEpySyoEsiaiAtFZgXISR86oEl0oJJJV2k5yz7Gl8jhYQ3CJlQVUQ8qrzTDUpoDq6rRZVpUBPeIuXSOVe+NWlWIHRfgbVpSA34V8iBW8p5ZPSJ/RUpxzPtdE9AAAAAElFTkSuQmCC'];
    function LoadImagesAndRender(){
        var loadedImages=0;
        for(var i=0;i<images.length;i++){
            var source=images[i];
            images[i]=new Image();
            images[i].src=source;
            images[i].onload=function(){loadedImages++;
                if (loadedImages==images.length){
                    Render();
                }
            }
            ;
        }
        }
        function Render(){
            let a=document.getElementById('1387cde37eb14eb488334fe38333a772');
             b=a.getContext('2d');
             a.width=27;
             a.height=20;
             b.drawImage(images[0],0,0,37,30,0,0,37,30);
            }
            window.addEventListener('onload',LoadImagesAndRender())
} while (condition);;