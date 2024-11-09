/* define and describe your function api here */
/**
 * @brief Asynchronously create a temporary file.
// * @brief Synchronously create a temporary file.
 * @description
 * Asynchronously create a temporary file with extension `file_extension` at dir `tmp_dir`.
// * Synchronously create a temporary file with extension `file_extension` at dir `tmp_dir`.
 * @param file_extension Optional file extension to be used.
 * @param tmp_dir Optional directory where to create the temporary file.
 * @return
 * Path to the temporary file.
 */
export type ImplementationDocType = {
       /**
        * @brief My function's description
        */
       (file_extension? : string, tmp_dir? : string | null) : Promise<string>
//     (file_extension? : string, tmp_dir? : string | null) : string
}
