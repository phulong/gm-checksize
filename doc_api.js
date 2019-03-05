/** **  REQUIRED API DOCS TO BE COMPATIBLE WITH KINTOHUB **
 * @api {POST} /check_size/  request check information image from URL
 * @apiName check_size
 * @apiParam {String} image_url url of Image.
 * @apiSuccess {String} [width] Width of the Image.
 * @apiSuccess {String} [height]  Height of the Image.
 * @apiError [error] ImageNotFound
 * @apiError [code] 400
 */
 /** **  REQUIRED API DOCS TO BE COMPATIBLE WITH KINTOHUB **
 * @api {GET} /resize?width=:width&height=:height  request resize image
 * @apiName resize
 * @apiHeader {String} authorization Logged in User's Id 
 * @apiParam {String} width width attribute of the IMG resized.
 * @apiParam {String} height attribute of the IMG resized.
 * @apiError [error] Can not resize image
 * @apiError [code] 400
 */