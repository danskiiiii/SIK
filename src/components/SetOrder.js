const SetOrder= size => 
{
    let someArray=[];
    someArray.length = 0;
    for (let i=0; i<size; i++)
    {
        someArray.push(i);
    }

    if(size<30)
    { 
        const shuffledArray = someArray
            .map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value); 
        return shuffledArray;
    }
    else
    {
        someArray.sort( () => Math.round(Math.random())-0.5) ; 
        return someArray;
    }
}

export default SetOrder;
