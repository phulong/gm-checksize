/** **  REQUIRED API DOCS TO BE COMPATIBLE WITH KINTOHUB **
 * @api {POST} /check_size/  request check information image from URL
 * @apiName check_size
 * @apiParam {String} image_url url of Image.
 * @apiSuccess {String} [width] Width of the Image.
 * @apiSuccess {String} [height]  Height of the Image.
 * @apiSuccessExample {json} [Success-Response]:
 *     HTTP/1.1 200 OK
 *     {
 *       "width": "272",
 *       "height": "92"
 *     }
 *
 * @apiError [error] ImageNotFound
 * @apiError [code] 400
 * @apiErrorExample {json} [Error-Response]:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ImageNotFound",
 *       "code": "400"
 *     }
 */
 /** **  REQUIRED API DOCS TO BE COMPATIBLE WITH KINTOHUB **
 * @api {POST} /resize request resize image
 * @apiName resize
 * @apiHeader {String} authorization Logged in User's Id 
 * @apiParam {String} width width attribute of the IMG resized.
 * @apiParam {String} height attribute of the IMG resized.
 * @apiParam {file} [image_upload] image file upload in body form-data.
 * @apiSuccess {file} response image was resized success.
 * @apiError [error] Can not resize image
 * @apiError [code] 400
 * @apiError [error] Can not find image file
 * @apiError  Code 401
 * @apiError  The image size too large (image size allow <= 8M)
 * @apiError  Code 402
 * @apiError  The image type not allow
 * @apiError  Code 403
 * @apiErrorExample {json} [Error-Response]:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "code":"400",
 *       "error":"resize not success"
 *     }
 */
