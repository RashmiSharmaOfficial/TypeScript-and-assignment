var low, high, i, flag = 0

low = 5
high = 75

while(low < high){
    flag = 0

    if(low <= 1){
        ++low
        continue
    }

    for(i = 2; i <= low/2; i++){
        if(low % i == 0){
            flag = 1
            break
        }
    }
    if(flag == 0){
        console.log(low)
    }
    low += 1
}
