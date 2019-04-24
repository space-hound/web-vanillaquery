import variables from "./variables/variables";
import evaluators from "./evaluators/evaluators";
import transformers from "./transformers/transformers";
import traversal from "./traversal/traversal";
import manipulation from "./manipulation/manipulation";
import attributes from "./attributes/attributes";
import styles from "./styles/styles";
import events from "./events/events";
import others from "./others/others";

import CreateVanillaQueryObject from "./CreateVanillaQueryObject";
import CreateVanillaQueryFactory from "./CreateVanillaQueryFactory";
import CreateVanillaQuery from "./CreateVanillaQuery";

const VanillaQueryObject = CreateVanillaQueryObject({}, variables, [
    evaluators, transformers, traversal, manipulation, attributes, styles, events, others
]);

const VanillaQueryFactory = CreateVanillaQueryFactory(VanillaQueryObject);

const VanillaQuery = CreateVanillaQuery(VanillaQueryObject, VanillaQueryFactory);

export default VanillaQuery;





