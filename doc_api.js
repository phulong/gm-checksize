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
 * @apiError (400) {String} Can not resize image 
 * @apiError (401) {String} Can not find image file
 * @apiError (402) {String} The image size too large (image size allow <= 4MB) 
 * @apiError (403) {String}  The image type not allow
 * @apiErrorExample {json} [Error-Response]:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "code":"400",
 *       "error":"resize not success"
 *     }
 */
