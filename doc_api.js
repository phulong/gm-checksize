/** **  REQUIRED API DOCS TO BE COMPATIBLE WITH KINTOHUB **
 * @api {post} /check_size/  request check information image from URL
 * @apiName CheckSize
 *
 * @apiParam {String} image_url url of Image.
 *
 * @apiSuccess {String} [width] Width of the Image.
 * @apiSuccess {String} [height]  Height of the Image.
 *
 * @apiSuccessExample {json} [Success-Response]:
 *     HTTP/1.1 200 OK
 *     {
 *       "width": "272",
 *       "height": "92"
 *     }
 *
 * @apiError [error] ImageNotFound
 * @apiError [code] 400
 *
 * @apiErrorExample {json} [Error-Response]:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ImageNotFound",
 *       "code": "400"
 *     }
 */
 
 /** **  REQUIRED API DOCS TO BE COMPATIBLE WITH KINTOHUB **

 * @api {GET} /resize/?width=:width&height=:height  request resize image
 * @apiName Resize
 *
 * @apiParam {Number} [width] width attribute of the IMG resized.
 * @apiParam {Number} [height] height attribute of the IMG resized.
 *
 * @apiSuccessExample {json} [Success-Response]:
 *     HTTP/1.1 200 OK
 *     {
 *      "code":200,
 *      "messsage":"resize success"
 *     }
 *
 * @apiError [error] Can not resize image
 * @apiError [code] 400
 *
 * @apiErrorExample {json} [Error-Response]:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "code":"400",
 *       "error":"resize not success"
 *     }
 */