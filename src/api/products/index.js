export const getProducts = async() => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }
  return fetch ('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json', requestOptions)

}