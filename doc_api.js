/** **  REQUIRED API DOCS TO BE COMPATIBLE WITH KINTOHUB **
 * @api {POST} /vehicle/{type} Add a new vehicle to the logged in user's collection
 * @apiName AddVehicle
 * @apiHeader (Session) {String} auth-account-id Logged in User's Id
 * @apiHeader {String} authorization Logged in User's Id
 * @apiParam (Url) {String} type the vehicle type
 * @apiParam {String} model the vehicle model
 * @apiParam {String} name the vehicle name
 ** OPTIONAL API DOCS **
 * @apiSuccess (Session) {Object[]} vehicle-owned All the vehicles that the current user have
 * @apiSuccess {Object} data the vehicle object
 * @apiSuccess {String} data.id Unique id for the vehicle
 * @apiSuccess {String} data.type vehicle type
 * @apiSuccess {String} data.model vehicle model
 */
 /** **  REQUIRED API DOCS TO BE COMPATIBLE WITH KINTOHUB **
 * @api {GET} /vehicle/{type} Add a new vehicle to the logged in user's collection
 * @apiName AddVehicle1
 * @apiHeader (Session) {String} auth-account-id Logged in User's Id
 * @apiHeader {String} authorization Logged in User's Id
 * @apiParam (Url) {String} type the vehicle type
 * @apiParam {String} model the vehicle model
 * @apiParam {String} name the vehicle name
 ** OPTIONAL API DOCS **
 * @apiSuccess (Session) {Object[]} vehicle-owned All the vehicles that the current user have
 * @apiSuccess {Object} data the vehicle object
 * @apiSuccess {String} data.id Unique id for the vehicle
 * @apiSuccess {String} data.type vehicle type
 * @apiSuccess {String} data.model vehicle model
 */