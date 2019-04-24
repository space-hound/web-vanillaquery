export default ( VanillaQueryObject, variables, components ) => {

    Object.defineProperty(VanillaQueryObject, 'vars', {
        value: {},
        configurable: true,
        enumerable: true
    });
    
    Object.keys(variables).forEach( key => {
    
        Object.defineProperty(VanillaQueryObject.vars, key, {
            get: variables[key],
            configurable: true,
            enumerable: true
    
        });
    
    });

    components.forEach( component => {

        Object.keys(component).forEach( key => {
    
            Object.defineProperty(VanillaQueryObject, key, {
                value: component[key],
                configurable: true,
                enumerable: true
        
            });
    
        });
    
    });

    return VanillaQueryObject;
}