const a = [1,2,3,4,5]             //Map method
function fn(x){
    return x*2;
}
const opa = a.map(fn)
console.log(opa);


const b = [1,2,3,4,5,6]           //Function declared inside the map method 
const opb = b.map(function(x){
    return x*2;
})
console.log(opb);


const c = [1,2,3,4,5,6,7]          //Arrow function
const opc = c.map((x)=>{
    return x*2;
})
console.log(opc);


const d = [1,2,3,4,5,6,7,8]        //One line Arrow function no return keyword 
const opd = d.map((x)=>x*2)
console.log(opd);


const e = [1,2,3,4,5]                 //Filter method
const odde = e.filter(function(x){
    return x%2!=0;
})
console.log(odde);


const E = [1,2,3,4,5]
const evenE = E.filter((x)=>x%2==0)
console.log(evenE);


const EE = [1,2,3,4,5,6,7]
const opEE = EE.filter((x)=>x>3&&x<6)
console.log(opEE);


const f = [1,2,3,4,5,6]                //Reduce method
const opf = f.reduce((max,curr)=>{     // mandatory two parameters in function               //Maximum number in the array
     if(curr>max){
        max = curr;
    }
    return max
},0)                                  //should mention initial value 0 or 1, like a temp sum=0(sum = sum+curr)                                 
console.log(opf);


const g = [1,2,3,4]                                 //multiples of the array
const opg = g.reduce((max,curr)=>{           
        max =max*curr;
    return max
},1)
console.log(opg);


const h = [1,2,3,4,5]                              //Sum of the array
const oph = h.reduce((sum,curr)=>{
    return sum = sum+curr;
},0)                                      //should mention initial value 0 or 1, like a temp sum=0(sum = sum+curr)          
console.log(oph);

//API Examples for MRF method

const i = [
       {Firstname : "Superman",Lastname : "S",Age : 30},
        {Firstname : "Batman",Lastname : "B",Age : 30},
        {Firstname : "Spiderman",Lastname : "S",Age : 34},
        {Firstname : "Ironman",Lastname : "I",Age : 35},
        {Firstname : "Hulk",Lastname : "H",Age : 50},
        {Firstname : "Wonderwomen",Lastname : "W",Age : 38},
        {Firstname : "Aquaman",Lastname : "A",Age : 41},
        {Firstname : "Xman",Lastname : "X",Age : 40},
];

//list the full names from the api(Map method)
const j = i.map((x)=> x.Firstname +" "+x.Lastname)
console.log(JSON.stringify(j));


//list firstname of the age greater that 22( Filter method)

const k = i.filter((x)=> x.Age>20).map((x)=>x.Firstname)
console.log(k);

// list the ages which is repeated and number of times repeated( Reduce method)

const l = i.reduce((acc,curr)=>{
    if(acc[curr.Age])
    {
        acc[curr.Age]=++acc[curr.Age];
    }
    else
    {
        acc[curr.Age]=1;
    }
    return acc;
},{})
console.log(l);

// examples practice

// list the firstname of the ages from 30 to 40

const m = i.filter((x)=> x.Age>=30&&x.Age<40).map((x)=>x.Firstname)
console.log(m);


// Print the highest amoung the array objects

const  n = i.reduce((max,curr)=>{
    if(curr.Age>max){
        max = curr.Age;
    }
    return max    
},0)
console.log(n);