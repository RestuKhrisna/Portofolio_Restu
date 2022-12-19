let count_line = 0;

function count(){
   for(i = 100; i > 0; i=i-2){
        if(i>49 && i<60){ 
    console.log('')
        }else{
    console.log(i)
   } count_line = count_line + 1 ;
}
count(); 

console.log(`you print $count_line`);