function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    let namedFunction = (a, b) => 1+2;
    return namedFunction;

}
function returnsAnAnonymousFunction(){
    return () => "";
}