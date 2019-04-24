export default ( VanillaQueryObject, VanillaQueryFactory ) => {

    //
    // https://stackoverflow.com/questions/8588563/adding-custom-properties-to-a-function
    //
    
    function VanillaQuery( query ) {
        return new VanillaQuery.VanillaQueryFactory(query);
    }

    Object.keys(VanillaQueryObject).forEach( key => {
        VanillaQuery[key] = VanillaQueryObject[key];
    });

    VanillaQuery['VanillaQueryFactory'] = VanillaQueryFactory;

    return VanillaQuery;
}