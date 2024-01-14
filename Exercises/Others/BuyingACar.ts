function nbMonths(startPriceOld: number, startPriceNew: number, savingPerMonth: number,percentLossByMonth: number): number[]{
    let months = 0
    let ostatok = 0

    const difference = startPriceOld - startPriceNew
    
    for(let i = 1; i < 12; i++){
        if( i % 2 === 0){
            percentLossByMonth + 0.5
        }
       const shtoto = ((startPriceNew*(percentLossByMonth/100)) - i*savingPerMonth) - (startPriceOld*(percentLossByMonth/100))

        do {
            months++
        } while (difference < 0);
    
        ostatok = shtoto - difference
    }
    return [months, ostatok]
}

const firsttest = nbMonths(2000, 8000, 1000, 1.5)

console.log(firsttest)


// every two months percent loss is +0.5
// every month the percent loss is 1.5 ( the price of the car )
// so month 2,4,6 the percent will be 2,2.5,3 beggining with month 1

// we should return [months,ostatok] but ostatok should be rounded

// every month savings are 1000$ 

// so first month 8000*1.5% = 7880 - 1000 = 6880 - 2000*1.5% = 4910 
// second month 7880*2% = 7722,4 - 2000 = 5722,4 - 2000*2 = 3791...
// and so on 
// so the formula is for every month ( i++ ) we ((SPN*PLBM) - i*SPM) - (SPO*PLBM)

// logica corecta, dar implementarea dea pula