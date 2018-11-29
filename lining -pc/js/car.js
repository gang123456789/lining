new Vue({
    el:'#app',
    data:{
        
        productList:[
            {
                'pic':'images/yi.jpg',
                'shop':'自营',
                'res':'李宁男装时尚风暴节 - 运动吸汗针织衫',
                'size':'S',
                'dPrice':219,
                'dePrice':459,
                'rPrice':175.2,
                'sPrice':43.8,
                'num':1,

            },
            {
                'pic':'images/display4.jpg',
                'shop':'自营',
                'res':'李宁男装时尚风暴节 - 暴风时尚运动鞋',
                'size':'S',
                'dPrice':329,
                'dePrice':609,
                'rPrice':263.2,
                'sPrice':65.8,
                'num':1,
            
            },
            {
                'pic':'images/display5.jpg',
                'shop':'自营',
                'res':'李宁男装时尚风暴节 - 暴风时尚运动鞋',
                'size':'均码',
                'dPrice':399,
                'dePrice':569,
                'rPrice':339,
                'sPrice':60,
                'num':1,
            },
        ],
        //sPrice:0,

    },
    methods:{
        minus(index){
            if(this.productList[index].num>1){
                this.productList[index].num--;
            }else{
                this.productList[index].num=1;
            }
        },
        add(index){
            this.productList[index].num++;
        },
        sum(){
            let sum = 0;
            this.productList.forEach(function(val,index){
                sum += val.dPrice*val.num;
            })
            return sum;
        },
        sSum(){
            let sum = 0;
            this.productList.forEach(function(val,index){
                sum += val.sPrice*val.num;
            })
            return sum;
        },
        rSum(){
            let sum = 0;
            this.productList.forEach(function(val,index){
                sum += val.rPrice*val.num;
            })
            return sum;
        },
        sNum(){
            let sum = 0;
            this.productList.forEach(function(val,index){
                sum += val.num;
            })
            return sum;
        },
        del(index){
            let a = this.productList.splice(index,1);
            console.log(a);
        }


    },
})